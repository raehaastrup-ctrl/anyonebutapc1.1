// Cloudflare Pages Function. Secrets stay server-side; collection fails closed.
export const CONSENT_VERSION = '2026-10-18-v1';
const headers = {
 'Content-Type':'application/json', 'Cache-Control':'no-store',
 'X-Content-Type-Options':'nosniff', 'Referrer-Policy':'no-referrer',
 'Content-Security-Policy':"default-src 'none'; frame-ancestors 'none'",
 'Strict-Transport-Security':'max-age=31536000'
};
const reply=(status,data)=>new Response(JSON.stringify(data),{status,headers});
const positive = x => /^\d+$/.test(String(x)) && Number(x)>0 && Number.isSafeInteger(Number(x));
export function configured(env) {
 try { return env.REGISTRATION_ENABLED==='true' && env.PRIVACY_APPROVED==='true'
  && new URL(env.SITE_ORIGIN).protocol==='https:' && new URL(env.SITE_ORIGIN).origin===env.SITE_ORIGIN
  && !!env.BREVO_API_KEY && !!env.TURNSTILE_SECRET_KEY && env.RATE_LIMIT_SECRET?.length>=32
  && positive(env.BREVO_LIST_ID) && positive(env.BREVO_DOI_TEMPLATE_ID) && !!env.ABUSE_DB;
 } catch { return false; }
}
export async function onRequest({request,env}) {
 if(request.method!=='POST')return reply(405,{error:'Method not allowed'});
 if(!configured(env))return reply(503,{error:'Registration is currently unavailable.'});
 if(request.headers.get('Origin')!==env.SITE_ORIGIN)return reply(403,{error:'Request rejected.'});
 if(request.headers.get('Content-Type')?.split(';')[0].trim().toLowerCase()!=='application/json')return reply(415,{error:'JSON required.'});
 try {
  // Stream-limited body so chunked requests cannot bypass the limit.
  const reader=request.body?.getReader(); if(!reader)return reply(400,{error:'Invalid request.'});
  let size=0; const chunks=[];
  while(true){const {done,value}=await reader.read();if(done)break;size+=value.length;
   if(size>4096){await reader.cancel();return reply(413,{error:'Request too large.'});}chunks.push(value);}
  const bytes=new Uint8Array(size);let offset=0;for(const c of chunks){bytes.set(c,offset);offset+=c.length;}
  let data;try{data=JSON.parse(new TextDecoder().decode(bytes));}catch{return reply(400,{error:'Invalid request.'});}
  if(!data || typeof data!=='object' || Array.isArray(data)
   ||Object.keys(data).some(k=>!['email','consent','consentVersion','turnstileToken','website'].includes(k))
   ||typeof data.email!=='string'||data.email.length>254
   ||! /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(data.email.trim())
   ||data.consent!==true||data.consentVersion!==CONSENT_VERSION
   ||typeof data.turnstileToken!=='string'||!data.turnstileToken||data.turnstileToken.length>2048
   ||(data.website!==undefined&&data.website!==''))return reply(400,{error:'Please check your email, consent and spam check.'});
  const email=data.email.trim();
  const ip=request.headers.get('CF-Connecting-IP'); if(!ip)return reply(403,{error:'Request rejected.'});
  const now=Math.floor(Date.now()/1000), window=Math.floor(now/900);
  const key=await crypto.subtle.importKey('raw',new TextEncoder().encode(env.RATE_LIMIT_SECRET),{name:'HMAC',hash:'SHA-256'},false,['sign']);
  const hash=async text=>Array.from(new Uint8Array(await crypto.subtle.sign('HMAC',key,new TextEncoder().encode(text)))).map(b=>b.toString(16).padStart(2,'0')).join('');
  // Atomic shared counters, per IP and address, prevent concurrent bypass.
  await env.ABUSE_DB.prepare('DELETE FROM abuse_limits WHERE expires_at < ?').bind(now).run();
  for(const [scope,value,limit] of [['ip',ip,5],['email',email.toLowerCase(),3]]) {
   const id=await hash(scope+':'+window+':'+value);
   const row=await env.ABUSE_DB.prepare('INSERT INTO abuse_limits (id, count, expires_at) VALUES (?, 1, ?) ON CONFLICT(id) DO UPDATE SET count=count+1 RETURNING count')
    .bind(id,(window+2)*900).first();
   if(!row||row.count>limit)return reply(429,{error:'Please wait before trying again.'});
  }
  const verify=await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify',{
   method:'POST',headers:{'Content-Type':'application/json'},
   body:JSON.stringify({secret:env.TURNSTILE_SECRET_KEY,response:data.turnstileToken,remoteip:ip}),
   signal:AbortSignal.timeout(10000)});
  if(!verify.ok)return reply(503,{error:'Spam verification is unavailable.'});
  const result=await verify.json();
  if(result.success!==true||result.hostname!==new URL(env.SITE_ORIGIN).hostname||result.action!=='subscribe')
   return reply(400,{error:'Please complete the spam check again.'});
  const response=await fetch('https://api.brevo.com/v3/contacts/doubleOptinConfirmation',{
   method:'POST',headers:{'Content-Type':'application/json','api-key':env.BREVO_API_KEY},
   body:JSON.stringify({email,includeListIds:[Number(env.BREVO_LIST_ID)],
    templateId:Number(env.BREVO_DOI_TEMPLATE_ID),redirectionUrl:env.SITE_ORIGIN+'/#/updates',
    contactPixelTrackingConsent:false,
    attributes:{CONSENT_VERSION,CONSENT_AT:new Date().toISOString(),EXPLICIT_CONSENT:true}}),
   signal:AbortSignal.timeout(10000)});
  // A provider error is never success; never echo provider responses or credentials.
  if(response.status!==201)return reply(503,{error:'We could not accept your request. Please try later.'});
  return reply(202,{status:'verification_requested'});
 } catch { return reply(503,{error:'Registration is temporarily unavailable.'}); }
}

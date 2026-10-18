import {test} from 'node:test';
import assert from 'node:assert/strict';
import {onRequest,configured,CONSENT_VERSION} from '../functions/api/subscribe.js';
const makeEnv=()=>({REGISTRATION_ENABLED:'true',PRIVACY_APPROVED:'true',SITE_ORIGIN:'https://example.org',
 BREVO_API_KEY:'test-only',TURNSTILE_SECRET_KEY:'test-only',RATE_LIMIT_SECRET:'x'.repeat(32),BREVO_LIST_ID:'1',BREVO_DOI_TEMPLATE_ID:'2',
 ABUSE_DB:{counts:new Map(),prepare(sql){
  return {bind:(...values)=>({run:async()=>({}),first:async()=>{
   const id=values[0];const count=(this.counts.get(id)||0)+1;this.counts.set(id,count);return {count};
  }})};
 }} });
const valid=()=>({email:'tester@example.org',consent:true,consentVersion:CONSENT_VERSION,turnstileToken:'test-token',website:''});
const req=(data=valid(),origin='https://example.org')=>new Request('https://example.org/api/subscribe',{method:'POST',headers:{Origin:origin,'Content-Type':'application/json','CF-Connecting-IP':'192.0.2.1'},body:JSON.stringify(data)});
test('closed without launch approval or bindings',async()=>{
 const env=makeEnv();env.PRIVACY_APPROVED='false';assert.equal(configured(env),false);
 assert.equal((await onRequest({request:req(),env})).status,503);
});
test('rejects wrong origin, consent, extra private fields, malformed email and oversized bodies',async()=>{
 const env=makeEnv();assert.equal((await onRequest({request:req(valid(),'https://attacker.invalid'),env})).status,403);
 for(const d of [{...valid(),consent:false},{...valid(),consentVersion:'old'},{...valid(),phone:'123'},{...valid(),email:'bad'},{...valid(),website:'spam'}])
  assert.equal((await onRequest({request:req(d),env})).status,400);
 assert.equal((await onRequest({request:req({...valid(),extra:'x'.repeat(5000)}),env})).status,413);
});
test('checks Turnstile hostname and action, and never calls email API on failure',async(t)=>{
 const env=makeEnv();let calls=0;t.mock.method(globalThis,'fetch',async()=>{calls++;return Response.json({success:true,hostname:'attacker.invalid',action:'subscribe'});});
 assert.equal((await onRequest({request:req(),env})).status,400);assert.equal(calls,1);
});
test('provider rejection, network error and unexpected success status never report success',async(t)=>{
 for(const status of [400,429,500,200]){
  const env=makeEnv();let calls=0;
  const mock=t.mock.method(globalThis,'fetch',async()=>++calls===1?Response.json({success:true,hostname:'example.org',action:'subscribe'}):new Response('{}',{status}));
  const r=await onRequest({request:req(),env});assert.equal(r.status,503);assert.ok(!(await r.text()).includes(env.BREVO_API_KEY));mock.mock.restore();
 }
 t.mock.method(globalThis,'fetch',async()=>{throw Error('offline')});
 assert.equal((await onRequest({request:req(),env:makeEnv()})).status,503);
});
test('only provider 201 produces pending verification, with server consent evidence and no tracking',async(t)=>{
 const env=makeEnv();let calls=0,payload;
 t.mock.method(globalThis,'fetch',async(url,init)=>{calls++;if(calls===1)return Response.json({success:true,hostname:'example.org',action:'subscribe'});payload=JSON.parse(init.body);return new Response('{}',{status:201});});
 const r=await onRequest({request:req(),env});assert.equal(r.status,202);assert.deepEqual(await r.json(),{status:'verification_requested'});
 assert.equal(payload.attributes.CONSENT_VERSION,CONSENT_VERSION);assert.equal(payload.attributes.EXPLICIT_CONSENT,true);
 assert.equal(payload.contactPixelTrackingConsent,false);assert.deepEqual(payload.includeListIds,[1]);
 assert.equal(r.headers.get('Cache-Control'),'no-store');
});
test('per-address limiter fails closed before emailing repeatedly',async(t)=>{
 const env=makeEnv();t.mock.method(globalThis,'fetch',async(url)=>url.includes('siteverify')?Response.json({success:true,hostname:'example.org',action:'subscribe'}):new Response('{}',{status:201}));
 for(let n=0;n<3;n++)assert.equal((await onRequest({request:req(),env})).status,202);
 assert.equal((await onRequest({request:req(),env})).status,429);
});

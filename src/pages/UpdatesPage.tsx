import React, {useEffect, useRef, useState} from 'react';
import {PageId} from '../types';
interface Props { onNavigate: (page:PageId)=>void }
const CONSENT_VERSION='2026-10-18-v1';
const consentText='I explicitly consent to Anyone But APC processing my email address for civic updates, including information that may reveal my political opinions. I understand that I can withdraw consent and unsubscribe at any time.';
export const UpdatesPage:React.FC<Props>=({onNavigate})=>{
 const enabled=import.meta.env.VITE_REGISTRATION_ENABLED==='true' && !!import.meta.env.VITE_TURNSTILE_SITE_KEY;
 const [email,setEmail]=useState(''), [consent,setConsent]=useState(false), [token,setToken]=useState('');
 const [website,setWebsite]=useState(''), [status,setStatus]=useState('idle'), [error,setError]=useState('');
 const container=useRef<HTMLDivElement>(null);const widget=useRef<string|undefined>(undefined);
 const busy=useRef(false);
 useEffect(()=>{
  if(!enabled)return;
  let cancelled=false;
  const mount=()=>{const api=(window as any).turnstile;if(cancelled||!api||!container.current)return;
   widget.current=api.render(container.current,{sitekey:import.meta.env.VITE_TURNSTILE_SITE_KEY,action:'subscribe',size:'flexible',
    callback:(v:string)=>setToken(v),'expired-callback':()=>setToken(''),'error-callback':()=>{setToken('');setError('Spam check unavailable. Please try again later.');}});};
  const existing=document.querySelector<HTMLScriptElement>('script[data-turnstile]');
  if((window as any).turnstile)mount();
  else if(existing)existing.addEventListener('load',mount);
  else {const s=document.createElement('script');s.src='https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
   s.dataset.turnstile='true';s.async=true;s.addEventListener('load',mount);document.head.append(s);}
  return ()=>{cancelled=true;existing?.removeEventListener('load',mount);if(widget.current)(window as any).turnstile?.remove(widget.current);};
 },[enabled]);
 const submit=async(e:React.FormEvent)=>{
  e.preventDefault();if(!enabled||!consent||!token||busy.current)return;
  busy.current=true;setStatus('sending');setError('');
  try{const r=await fetch('/api/subscribe',{method:'POST',headers:{'Content-Type':'application/json'},
   body:JSON.stringify({email,consent,consentVersion:CONSENT_VERSION,turnstileToken:token,website}),
   signal:AbortSignal.timeout(15000)});
   const data=await r.json();
   if(r.status!==202||data.status!=='verification_requested')throw Error('request failed');
   setStatus('pending');setEmail('');setConsent(false);
  }catch{setStatus('idle');setError('Your request could not be completed. Please try again later.');}
  finally{busy.current=false;setToken('');if(widget.current)(window as any).turnstile?.reset(widget.current);}
 };
 return <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-6">
  <h1 className="font-display text-3xl sm:text-5xl">Get Involved</h1>
  <p>Receive civic updates by email. Confirm your email address before receiving updates.</p>
  {!enabled?<p role="status" className="border-2 p-5">Registration is not open yet. Please return later.</p>:
   status==='pending'?<div role="status" className="border-2 p-5"><h2 className="font-bold text-xl">Verification requested</h2><p>Check your inbox for a confirmation link. Your subscription is not active until your email is verified. Delivery can take a few minutes.</p></div>:
   <form onSubmit={submit} className="space-y-5">
    <label htmlFor="supporter-email" className="block font-bold">Email address</label>
    <input id="supporter-email" autoComplete="email" type="email" required maxLength={254} value={email} onChange={e=>setEmail(e.target.value)} className="w-full p-3 border-2"/>
    <div hidden aria-hidden="true"><label>Website<input tabIndex={-1} autoComplete="off" value={website} onChange={e=>setWebsite(e.target.value)}/></label></div>
    <div className="flex gap-3 items-start"><input id="explicit-consent" type="checkbox" required checked={consent} onChange={e=>setConsent(e.target.checked)} className="mt-1 h-5 w-5 shrink-0"/><label htmlFor="explicit-consent">{consentText}</label></div>
    <p>We collect only your email and consent record. Our email service processes these to send and verify your subscription.</p>
    <div ref={container}/>
    {error&&<p role="alert">{error}</p>}
    <button type="submit" disabled={!consent||!token||status==='sending'} className="tap-target px-6 py-3 bg-[#E30613] text-white font-bold disabled:bg-neutral-300 disabled:text-neutral-700">{status==='sending'?'Submitting...':'Request verification email'}</button>
   </form>}
  <button type="button" onClick={()=>onNavigate('privacy')} className="tap-target underline">Read the privacy notice</button>
 </div>;
};

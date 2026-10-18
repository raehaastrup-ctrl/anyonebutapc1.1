import React, { useState } from 'react';
import { PageId } from '../types';
import { SITE_METADATA, SOCIAL_CHANNELS } from '../data/content';
import { CORRESPONDENCE_TEMPLATES } from '../data/templates';
import { 
  Mail, 
  Share2, 
  Download, 
  Check, 
  Copy, 
  Send, 
  MessageSquare, 
  ArrowRight, 
  ExternalLink,
  ShieldCheck,
  Printer,
  Sparkles
} from 'lucide-react';

interface ActionHubPageProps {
  onNavigate: (page: PageId) => void;
}

export const ActionHubPage: React.FC<ActionHubPageProps> = ({ onNavigate }) => {
  // Letter Generator State
  const defaultTemplate = CORRESPONDENCE_TEMPLATES[0]; // Template A: To UK MP
  const [selectedTemplateId, setSelectedTemplateId] = useState(defaultTemplate.id);
  const [placeholders, setPlaceholders] = useState<Record<string, string>>({
    MP_NAME: '',
    CONSTITUENCY: '',
    SENDER_NAME: '',
    SENDER_POSTAL_ADDRESS: '',
    OFFICE_DESK_NAME: 'Nigeria Desk Officer',
    SENDER_OR_ORGANISATION_NAME: '',
    CONTACT_EMAIL: '',
    CITY_AND_COUNTRY: ''
  });
  const [letterCopied, setLetterCopied] = useState(false);

  // Social Share State
  const [copiedHashtag, setCopiedHashtag] = useState(false);
  const [copiedCaption, setCopiedCaption] = useState(false);

  // Newsletter State (Action 03)
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterDone, setNewsletterDone] = useState(false);

  // Participation Enquiry State
  const [partName, setPartName] = useState('');
  const [partOrg, setPartOrg] = useState('');
  const [partEmail, setPartEmail] = useState('');
  const [partType, setPartType] = useState('Diaspora Group');
  const [partMessage, setPartMessage] = useState('');
  const [partSubmitted, setPartSubmitted] = useState(false);

  // General Contact Form State
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('General Inquiry');
  const [contactBody, setContactBody] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const activeTemplate = CORRESPONDENCE_TEMPLATES.find(t => t.id === selectedTemplateId) || defaultTemplate;

  // Compute Letter Body with Placeholders
  const computedLetterBody = () => {
    let text = activeTemplate.defaultBody;
    activeTemplate.placeholders.forEach(p => {
      const val = placeholders[p.key]?.trim() || p.defaultValue;
      text = text.replaceAll(`[${p.key}]`, val);
    });
    return text;
  };

  const computedLetterSubject = () => {
    return activeTemplate.defaultSubject;
  };

  const handleCopyLetter = () => {
    navigator.clipboard.writeText(`Subject: ${computedLetterSubject()}\n\n${computedLetterBody()}`);
    setLetterCopied(true);
    setTimeout(() => setLetterCopied(false), 2000);
  };

  const handleOpenMailto = () => {
    const subject = encodeURIComponent(computedLetterSubject());
    const body = encodeURIComponent(computedLetterBody());
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const handleDownloadLetter = () => {
    const content = `Subject: ${computedLetterSubject()}\n\n${computedLetterBody()}`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Civic_Letter_${activeTemplate.id}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const socialCaptionText = `Nigeria deserves accountable leadership, protected civil liberties, and credible elections. We reject economic hardship and impunity under the APC. Read the 2026 Manifesto: https://anyonebutapc.org\n\nFollow @anyonebutapc on TikTok, Instagram, X, and Facebook.\n\n#ANYONEBUTAPC`;

  const handleCopyHashtag = () => {
    navigator.clipboard.writeText('#ANYONEBUTAPC');
    setCopiedHashtag(true);
    setTimeout(() => setCopiedHashtag(false), 2000);
  };

  const handleCopyCaption = () => {
    navigator.clipboard.writeText(socialCaptionText);
    setCopiedCaption(true);
    setTimeout(() => setCopiedCaption(false), 2000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterDone(true);
    }
  };

  const handleParticipationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPartSubmitted(true);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* 4-Step Stepper Breadcrumb */}
      <nav aria-label="Guided Civic Learning Steps" className="bg-neutral-50 p-4 border border-black/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <span className="font-bold uppercase tracking-wider text-[#E30613] flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E30613]" />
            <span>Civic Path: Step 4 of 4</span>
          </span>
          <div className="flex items-center gap-2 font-medium text-neutral-600 overflow-x-auto pb-1 sm:pb-0">
            <button onClick={() => onNavigate('home')} className="hover:text-[#E30613] cursor-pointer">
              1. Home
            </button>
            <span>&rarr;</span>
            <button onClick={() => onNavigate('manifesto')} className="hover:text-[#E30613] cursor-pointer">
              2. The Manifesto
            </button>
            <span>&rarr;</span>
            <button onClick={() => onNavigate('democracy')} className="hover:text-[#E30613] cursor-pointer">
              3. Democracy 101
            </button>
            <span>&rarr;</span>
            <span className="text-[#080808] font-bold bg-white px-2.5 py-1 border border-black/20">
              4. Take Action
            </span>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <div className="border-b-4 border-[#080808] pb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-[#E30613] text-white">
            Civic Participation
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
            Step 4 of 4
          </span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl text-[#080808] uppercase tracking-tight">
          Take Action Today
        </h1>
        <p className="mt-3 text-base sm:text-lg text-neutral-700 leading-relaxed max-w-3xl">
          Democracy works when citizens actively hold leaders accountable. Choose how you want to participate below: send a letter to your MP, share #ANYONEBUTAPC, subscribe to our newsletter, download the manifesto, or submit an enquiry.
        </p>
      </div>

      {/* ACTION 1: SEND YOUR MP A LETTER */}
      <section className="space-y-6" aria-labelledby="send-mp-letter">
        <div className="flex items-center justify-between border-b-2 border-black/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-[#080808] text-white">
              <Mail className="w-5 h-5 text-[#E30613]" />
            </span>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#E30613]">Action 01</span>
              <h2 id="send-mp-letter" className="font-display text-2xl text-[#080808] uppercase tracking-tight">
                Send Your MP a Letter
              </h2>
            </div>
          </div>
          <span className="hidden sm:inline text-xs text-neutral-500 font-mono">
            Direct Parliamentary Scrutiny
          </span>
        </div>

        <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed max-w-3xl">
          UK MPs and international representatives are obliged to reply to their constituents. Fill in your details below, then copy or open the pre-written factual letter in your email app.
        </p>

        {/* Template Selector */}
        <div className="flex flex-wrap gap-2">
          {CORRESPONDENCE_TEMPLATES.slice(0, 3).map((tpl) => (
            <button
              key={tpl.id}
              onClick={() => setSelectedTemplateId(tpl.id)}
              className={`tap-target px-3.5 py-2 text-xs font-bold uppercase tracking-wider cursor-pointer border ${
                selectedTemplateId === tpl.id
                  ? 'bg-[#080808] text-white border-[#080808]'
                  : 'bg-neutral-100 text-[#080808] border-black/20 hover:bg-neutral-200'
              }`}
            >
              {tpl.title.split(':')[0]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Inputs */}
          <div className="lg:col-span-5 bg-neutral-50 p-5 border border-black/10 space-y-4">
            <h3 className="font-bold text-xs uppercase tracking-wider text-[#080808]">
              Your Information (Not Stored)
            </h3>

            {activeTemplate.placeholders.map((p) => (
              <div key={p.key} className="space-y-1">
                <label className="block text-[11px] font-bold text-neutral-700 uppercase">
                  {p.label}
                </label>
                <input
                  type="text"
                  value={placeholders[p.key] || ''}
                  onChange={(e) => setPlaceholders({ ...placeholders, [p.key]: e.target.value })}
                  placeholder={p.defaultValue}
                  className="w-full px-3 py-2 text-xs border border-black/20 bg-white text-[#080808] focus:outline-2 focus:outline-[#E30613]"
                />
                {p.description && (
                  <span className="block text-[10px] text-neutral-500">{p.description}</span>
                )}
              </div>
            ))}

            <div className="pt-2 border-t border-black/10 text-[11px] text-neutral-600 space-y-1">
              <strong className="block text-[#080808]">Constituent Tips:</strong>
              {activeTemplate.tips.slice(0, 2).map((tip, i) => (
                <div key={i} className="flex items-start gap-1.5">
                  <span className="text-[#E30613]">&bull;</span>
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Letter Preview */}
          <div className="lg:col-span-7 border-2 border-[#080808] bg-white p-5 flex flex-col justify-between shadow-xs">
            <div className="space-y-3">
              <div className="border-b border-black/10 pb-2">
                <span className="text-[10px] uppercase font-bold text-neutral-500">Subject:</span>
                <div className="font-bold text-xs sm:text-sm text-[#080808]">
                  {computedLetterSubject()}
                </div>
              </div>

              <div className="bg-neutral-50 p-4 border border-black/10 font-mono text-[11px] text-neutral-800 whitespace-pre-wrap max-h-80 overflow-y-auto leading-relaxed">
                {computedLetterBody()}
              </div>
            </div>

            <div className="pt-4 border-t border-black/10 flex flex-wrap gap-2 mt-4">
              <button
                onClick={handleCopyLetter}
                className="tap-target px-4 py-2.5 bg-[#080808] text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 cursor-pointer flex items-center gap-1.5"
              >
                {letterCopied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5 text-[#E30613]" />}
                <span>{letterCopied ? 'Copied to Clipboard' : 'Copy Letter'}</span>
              </button>
              <button
                onClick={handleOpenMailto}
                className="tap-target px-4 py-2.5 bg-[#E30613] text-white text-xs font-bold uppercase tracking-wider hover:bg-red-700 cursor-pointer flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Open in Email App</span>
              </button>
              <button
                onClick={handleDownloadLetter}
                className="tap-target px-3 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-[#080808] border border-black/20 text-xs font-bold uppercase cursor-pointer"
              >
                Save as .txt
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ACTION 2: SHARE #ANYONEBUTAPC ON SOCIAL MEDIA */}
      <section className="space-y-6 pt-8 border-t-2 border-black/10" aria-labelledby="share-social">
        <div className="flex items-center justify-between border-b-2 border-black/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-[#E30613] text-white">
              <Share2 className="w-5 h-5" />
            </span>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#E30613]">Action 02</span>
              <h2 id="share-social" className="font-display text-2xl text-[#080808] uppercase tracking-tight">
                Share #ANYONEBUTAPC on Social Media
              </h2>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-[#E30613]">
            @anyonebutapc
          </span>
        </div>

        <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed max-w-3xl">
          Encourage others to speak out! Follow and tag <strong className="text-[#080808]">@anyonebutapc</strong> on TikTok, Instagram, X (Twitter), and Facebook. Use the official campaign hashtag <strong className="text-[#E30613]">#ANYONEBUTAPC</strong>.
        </p>

        {/* Social Platform Direct Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {SOCIAL_CHANNELS.map((ch) => (
            <a
              key={ch.name}
              href={ch.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white border-2 border-[#080808] hover:border-[#E30613] transition-colors flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase text-[#080808]">{ch.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#E30613]" />
                </div>
                <div className="font-mono text-sm font-bold text-[#E30613]">
                  {ch.handle}
                </div>
              </div>
              <span className="text-[10px] text-neutral-500 mt-3 block">
                Open {ch.name} Profile &rarr;
              </span>
            </a>
          ))}
        </div>

        {/* Copyable Share Post Box */}
        <div className="border-2 border-[#080808] p-5 bg-neutral-50 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-black/10 pb-2">
            <span className="text-xs font-bold uppercase text-[#080808]">
              Ready-to-Post Caption (For TikTok, Instagram, X &amp; WhatsApp)
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyHashtag}
                className="px-2.5 py-1 bg-white border border-black/20 hover:bg-neutral-100 text-[11px] font-bold font-mono cursor-pointer"
              >
                {copiedHashtag ? 'Hashtag Copied!' : 'Copy #ANYONEBUTAPC'}
              </button>
            </div>
          </div>

          <p className="bg-white p-4 border border-black/10 text-xs sm:text-sm text-neutral-800 leading-relaxed font-mono whitespace-pre-wrap">
            {socialCaptionText}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleCopyCaption}
              className="tap-target px-5 py-2.5 bg-[#080808] text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 cursor-pointer flex items-center gap-2"
            >
              {copiedCaption ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedCaption ? 'Caption Copied!' : 'Copy Entire Post'}</span>
            </button>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Nigeria deserves constitutional accountability, protected freedoms, and credible elections. Read the 2026 Manifesto: https://anyonebutapc.org @anyonebutapc #ANYONEBUTAPC')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-target px-4 py-2.5 bg-[#E30613] text-white text-xs font-bold uppercase tracking-wider hover:bg-red-700 cursor-pointer flex items-center gap-1.5"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share on X (Twitter)</span>
            </a>
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(socialCaptionText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-target px-4 py-2.5 bg-green-700 text-white text-xs font-bold uppercase tracking-wider hover:bg-green-800 cursor-pointer flex items-center gap-1.5"
            >
              <span>Share on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* ACTION 3: SUBSCRIBE TO OUR NEWSLETTER (Renamed from research briefings) */}
      <section className="space-y-6 pt-8 border-t-2 border-black/10" aria-labelledby="newsletter-section">
        <div className="flex items-center justify-between border-b-2 border-black/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-[#080808] text-white">
              <Mail className="w-5 h-5 text-[#E30613]" />
            </span>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#E30613]">Action 03</span>
              <h2 id="newsletter-section" className="font-display text-2xl text-[#080808] uppercase tracking-tight">
                Subscribe to Our Newsletter
              </h2>
            </div>
          </div>
          <span className="text-xs text-neutral-500 font-mono">
            Zero Spam &bull; Strict Privacy
          </span>
        </div>

        <div className="border-2 border-[#080808] p-6 bg-white max-w-2xl">
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4">
            Receive verified factual updates on election readiness and civil liberties. Double opt-in, strict privacy by design, and zero spam.
          </p>

          {newsletterDone ? (
            <div className="p-4 bg-green-50 border border-green-300 text-green-800 text-xs font-bold flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <div>
                <p>Subscription request received for {newsletterEmail}!</p>
                <p className="font-normal text-[11px] text-green-700 mt-0.5">
                  Please check your inbox to confirm your double opt-in registration. You can unsubscribe at any time.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-[#080808] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="e.g. name@domain.com"
                  required
                  className="w-full px-3 py-2.5 text-xs border border-black/30 bg-white text-[#080808] focus:outline-2 focus:outline-[#E30613]"
                />
              </div>

              <div className="flex items-start gap-2 text-[11px] text-neutral-600">
                <input type="checkbox" required id="privacyConsent" className="mt-0.5" />
                <label htmlFor="privacyConsent">
                  I agree to receive verified civic newsletter updates. I understand I can unsubscribe anytime with 1 click.
                </label>
              </div>

              <button
                type="submit"
                className="tap-target px-6 py-3 bg-[#E30613] text-white text-xs font-bold uppercase tracking-wider hover:bg-red-700 cursor-pointer shadow-xs"
              >
                Subscribe to Newsletter
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ACTION 4: PARTICIPATION ENQUIRY (Renamed from political party leadership) */}
      <section className="space-y-6 pt-8 border-t-2 border-black/10" aria-labelledby="participation-section">
        <div className="flex items-center justify-between border-b-2 border-black/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-[#080808] text-white">
              <MessageSquare className="w-5 h-5 text-[#E30613]" />
            </span>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#E30613]">Get Involved</span>
              <h2 id="participation-section" className="font-display text-2xl text-[#080808] uppercase tracking-tight">
                Participation Enquiry
              </h2>
            </div>
          </div>
          <span className="text-xs text-neutral-500 font-mono">
            Civic Coalitions &amp; Volunteers
          </span>
        </div>

        <div className="border-2 border-[#080808] p-6 bg-white max-w-2xl">
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4">
            For civic organisations, diaspora groups, legal observers, researchers, and citizens wishing to participate in the Anyone But APC initiative.
          </p>

          {partSubmitted ? (
            <div className="p-4 bg-green-50 border border-green-300 text-green-800 text-xs font-bold flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <div>
                <p>Enquiry received! Thank you, {partName}.</p>
                <p className="font-normal text-[11px] text-green-700 mt-0.5">
                  Our civic working group will review your message and reply via email.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleParticipationSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-[#080808] mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    value={partName}
                    onChange={(e) => setPartName(e.target.value)}
                    required
                    placeholder="e.g. Dr. Adaeze Okafor"
                    className="w-full px-3 py-2 text-xs border border-black/20 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-[#080808] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={partEmail}
                    onChange={(e) => setPartEmail(e.target.value)}
                    required
                    placeholder="adaeze@example.org"
                    className="w-full px-3 py-2 text-xs border border-black/20 bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-[#080808] mb-1">
                    Organisation or Capacity
                  </label>
                  <input
                    type="text"
                    value={partOrg}
                    onChange={(e) => setPartOrg(e.target.value)}
                    placeholder="e.g. UK Diaspora Association / Independent Citizen"
                    className="w-full px-3 py-2 text-xs border border-black/20 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-[#080808] mb-1">
                    Type of Participation
                  </label>
                  <select
                    value={partType}
                    onChange={(e) => setPartType(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-black/20 bg-white"
                  >
                    <option value="Diaspora Group">Diaspora Association / Town Hall</option>
                    <option value="Civil Society">Civil Society / Election Observer</option>
                    <option value="Volunteer Researcher">Volunteer Researcher / Data Analyst</option>
                    <option value="Legal Practitioner">Legal Practitioner / Human Rights</option>
                    <option value="Other Civic Group">Other Civic Group</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-[#080808] mb-1">
                  How would you like to participate?
                </label>
                <textarea
                  value={partMessage}
                  onChange={(e) => setPartMessage(e.target.value)}
                  required
                  rows={4}
                  placeholder="Briefly describe your group, goals, or proposal..."
                  className="w-full px-3 py-2 text-xs border border-black/20 bg-white"
                />
              </div>

              <button
                type="submit"
                className="tap-target px-6 py-3 bg-[#080808] text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 cursor-pointer shadow-xs"
              >
                Submit Participation Enquiry
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ACTION 5: DIRECT CONTACT FORM */}
      <section className="space-y-6 pt-8 border-t-2 border-black/10" aria-labelledby="contact-section">
        <div className="flex items-center justify-between border-b-2 border-black/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-[#080808] text-white">
              <Mail className="w-5 h-5 text-[#E30613]" />
            </span>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#E30613]">Get in Touch</span>
              <h2 id="contact-section" className="font-display text-2xl text-[#080808] uppercase tracking-tight">
                General Contact Form
              </h2>
            </div>
          </div>
          <span className="text-xs text-neutral-500 font-mono">
            {SITE_METADATA.contactEmail}
          </span>
        </div>

        <div className="border-2 border-[#080808] p-6 bg-white max-w-2xl">
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4">
            For press inquiries, editorial corrections, or direct messages to our team.
          </p>

          {contactSubmitted ? (
            <div className="p-4 bg-green-50 border border-green-300 text-green-800 text-xs font-bold flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <div>
                <p>Thank you for reaching out, {contactName}.</p>
                <p className="font-normal text-[11px] text-green-700 mt-0.5">
                  Your message has been sent to our working group at {SITE_METADATA.contactEmail}.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-[#080808] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    required
                    placeholder="Your Name"
                    className="w-full px-3 py-2 text-xs border border-black/20 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-[#080808] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-3 py-2 text-xs border border-black/20 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-[#080808] mb-1">
                  Subject / Category
                </label>
                <select
                  value={contactSubject}
                  onChange={(e) => setContactSubject(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-black/20 bg-white"
                >
                  <option value="General Inquiry">General Civic Inquiry</option>
                  <option value="Press / Media">Press / Media Request</option>
                  <option value="Editorial Correction">Editorial Correction</option>
                  <option value="Security / Privacy">Data Privacy Question</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-[#080808] mb-1">
                  Message
                </label>
                <textarea
                  value={contactBody}
                  onChange={(e) => setContactBody(e.target.value)}
                  required
                  rows={4}
                  placeholder="How can we help?"
                  className="w-full px-3 py-2 text-xs border border-black/20 bg-white"
                />
              </div>

              <button
                type="submit"
                className="tap-target px-6 py-3 bg-[#080808] text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 cursor-pointer shadow-xs"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
};

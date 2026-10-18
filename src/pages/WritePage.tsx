import React, { useState, useMemo } from 'react';
import { PageId, CorrespondenceTemplate } from '../types';
import { CORRESPONDENCE_TEMPLATES } from '../data/templates';
import { 
  Copy, 
  Check, 
  Download, 
  Mail, 
  AlertCircle, 
  ShieldCheck, 
  FileEdit, 
  Send,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

interface WritePageProps {
  onNavigate: (page: PageId) => void;
}

export const WritePage: React.FC<WritePageProps> = ({ onNavigate }) => {
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>('template-a');
  const [placeholderValues, setPlaceholderValues] = useState<Record<string, Record<string, string>>>({
    'template-a': {
      MP_NAME: 'Rt Hon [Surname] MP',
      CONSTITUENCY: 'Manchester Central',
      SENDER_NAME: 'Jane Doe',
      SENDER_POSTAL_ADDRESS: '12 Oxford Road, Manchester M1 5AN'
    },
    'template-b': {
      SENDER_NAME: 'Jane Doe',
      SENDER_CONTACT_INFO: '07123 456789 / Manchester'
    },
    'template-c': {
      OFFICE_DESK_NAME: 'West Africa Department / FCDO Electoral Monitoring Team',
      SENDER_OR_ORGANISATION_NAME: 'Concerned Nigerian Diaspora Civic Group',
      CONTACT_EMAIL: 'diaspora.voice@civicnet.org'
    },
    'template-d': {
      INEC_OFFICE: 'Director of Voter Education and Publicity, INEC Headquarters, Abuja',
      SENDER_NAME: 'Chinedu Eze',
      SENDER_CITY_OR_LOCATION: 'Lagos State / London UK'
    },
    'template-e': {
      PARTY_OFFICIAL_NAME: 'National Publicity Secretary',
      PROJECT_DESK_CONTACT: 'Independent Research Liaison',
      DESK_EMAIL: 'evidence-desk@civicresearch.org'
    }
  });

  const [customEdits, setCustomEdits] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);

  const currentTemplate = CORRESPONDENCE_TEMPLATES.find((t) => t.id === selectedTemplateId) || CORRESPONDENCE_TEMPLATES[0];

  // Generate resolved body by substituting placeholders
  const generatedBody = useMemo(() => {
    if (customEdits[currentTemplate.id] !== undefined) {
      return customEdits[currentTemplate.id];
    }

    let text = currentTemplate.defaultBody;
    const currentValues = placeholderValues[currentTemplate.id] || {};

    currentTemplate.placeholders.forEach((p) => {
      const val = currentValues[p.key] !== undefined ? currentValues[p.key] : p.defaultValue;
      const regex = new RegExp(`\\[${p.key}\\]`, 'g');
      text = text.replace(regex, val);
    });

    return text;
  }, [currentTemplate, placeholderValues, customEdits]);

  const handlePlaceholderChange = (key: string, value: string) => {
    setPlaceholderValues((prev) => ({
      ...prev,
      [currentTemplate.id]: {
        ...(prev[currentTemplate.id] || {}),
        [key]: value
      }
    }));
    // Clear custom manual override when user changes variables so it refreshes
    setCustomEdits((prev) => {
      const copy = { ...prev };
      delete copy[currentTemplate.id];
      return copy;
    });
  };

  const handleCustomBodyChange = (value: string) => {
    setCustomEdits((prev) => ({
      ...prev,
      [currentTemplate.id]: value
    }));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `Subject: ${currentTemplate.defaultSubject}\n\n${generatedBody}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob(
      [`Subject: ${currentTemplate.defaultSubject}\n\n${generatedBody}`],
      { type: 'text/plain;charset=utf-8' }
    );
    element.href = URL.createObjectURL(file);
    element.download = `${currentTemplate.id}-civic-correspondence.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleOpenMailto = () => {
    const subject = encodeURIComponent(currentTemplate.defaultSubject);
    const body = encodeURIComponent(generatedBody);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="border-b-4 border-[#080808] pb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-[#E30613] text-white">
            Civic Advocacy
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
            Section 6: Factual Correspondence
          </span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl text-[#080808] uppercase tracking-tight">
          Individual Civic Correspondence Desk
        </h1>
        <p className="mt-3 text-base sm:text-lg text-[#252525] max-w-3xl leading-relaxed">
          Five factual, individually editable letters for writing to elected representatives, news editors, diplomatic offices, and electoral authorities.
        </p>

        {/* Anti-Bulk Guardrail Notice */}
        <div className="mt-6 p-4 bg-neutral-100 border-l-4 border-[#080808] text-xs sm:text-sm text-[#252525] flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-[#E30613] shrink-0 mt-0.5" aria-hidden="true" />
          <div className="space-y-1">
            <strong className="block text-[#080808] uppercase font-bold">
              Individual-Use &amp; Privacy Safeguards:
            </strong>
            <p>
              We do NOT provide automated mass-email spammers, robo-calling, or pre-filled impersonation tools. Democratic accountability requires personal constituents using their genuine names and verified addresses. You retain total control to edit words before sending.
            </p>
          </div>
        </div>
      </div>

      {/* Template Selector Grid */}
      <div>
        <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3">
          Select Correspondence Category:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3" role="tablist">
          {CORRESPONDENCE_TEMPLATES.map((tmpl) => {
            const isSelected = selectedTemplateId === tmpl.id;
            return (
              <button
                key={tmpl.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedTemplateId(tmpl.id)}
                className={`p-3.5 text-left border-2 transition-all cursor-pointer flex flex-col justify-between tap-target ${
                  isSelected
                    ? 'bg-[#080808] text-white border-[#080808] shadow-xs'
                    : 'bg-white text-[#080808] border-neutral-300 hover:border-black hover:bg-neutral-50'
                }`}
              >
                <span className={`text-[11px] font-bold uppercase tracking-wider block mb-1 ${isSelected ? 'text-[#E30613]' : 'text-neutral-500'}`}>
                  {tmpl.recipientCategory}
                </span>
                <span className="font-display text-sm tracking-tight line-clamp-2">
                  {tmpl.title.split(':')[0]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Letter Editor & Jurisdiction Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Jurisdiction & Dynamic Variable Inputs */}
        <div className="lg:col-span-5 space-y-6">
          {/* Jurisdiction Explanation */}
          <div className="bg-neutral-50 border-2 border-black/15 p-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E30613] block mb-1">
              Institutional Jurisdiction
            </span>
            <h3 className="font-display text-lg text-[#080808] uppercase tracking-tight mb-2">
              {currentTemplate.title}
            </h3>
            <p className="text-xs text-[#252525] leading-relaxed mb-3">
              {currentTemplate.targetDescription}
            </p>
            <div className="p-3 bg-white border border-black/10 text-xs text-neutral-700">
              <strong>Legal / Statutory Remit:</strong> {currentTemplate.jurisdictionExplanation}
            </div>
          </div>

          {/* Placeholders Customization Form */}
          <div className="bg-white border-2 border-[#080808] p-5 space-y-4">
            <div className="flex items-center gap-2 border-b border-black/10 pb-2">
              <FileEdit className="w-4 h-4 text-[#E30613]" />
              <h4 className="font-display text-sm uppercase tracking-wider text-[#080808]">
                Personalise Letter Placeholders
              </h4>
            </div>

            <div className="space-y-3">
              {currentTemplate.placeholders.map((p) => {
                const currentVal = placeholderValues[currentTemplate.id]?.[p.key] !== undefined
                  ? placeholderValues[currentTemplate.id][p.key]
                  : p.defaultValue;
                return (
                  <div key={p.key}>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#080808] mb-1">
                      {p.label}
                    </label>
                    <input
                      type="text"
                      value={currentVal}
                      onChange={(e) => handlePlaceholderChange(p.key, e.target.value)}
                      placeholder={p.defaultValue}
                      className="w-full p-2 text-xs border border-black/30 focus:outline-none focus:border-[#E30613] bg-white font-medium"
                    />
                    {p.description && (
                      <p className="text-[10px] text-neutral-500 mt-0.5">{p.description}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Practical Sending Tips */}
          <div className="bg-neutral-50 border border-black/15 p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#080808] mb-2 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-[#080808]" />
              <span>Guidelines for Maximum Impact:</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-neutral-700">
              {currentTemplate.tips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E30613] mt-1.5 shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Full Editable Letter Preview */}
        <div className="lg:col-span-7 bg-white border-2 border-[#080808] shadow-sm flex flex-col">
          {/* Letter Header Bar */}
          <div className="bg-[#080808] text-white p-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider block">
                Subject Line
              </span>
              <p className="font-bold text-xs sm:text-sm text-neutral-100">{currentTemplate.defaultSubject}</p>
            </div>
            <span className="text-[10px] bg-[#E30613] text-white px-2 py-0.5 font-bold uppercase">
              Editable Draft
            </span>
          </div>

          {/* Letter Body (User can directly edit in place) */}
          <div className="p-6 flex-1 flex flex-col">
            <label htmlFor="letter-body" className="sr-only">Editable Letter Content</label>
            <textarea
              id="letter-body"
              rows={16}
              value={generatedBody}
              onChange={(e) => handleCustomBodyChange(e.target.value)}
              className="w-full flex-1 p-4 border border-black/15 font-sans text-xs sm:text-sm text-[#080808] leading-relaxed resize-y focus:outline-none focus:border-[#E30613]"
            />

            {/* Action Bar */}
            <div className="mt-6 pt-4 border-t border-black/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="tap-target px-4 py-2 bg-[#080808] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-[#252525] cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#E30613]" />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Letter'}</span>
                </button>

                <button
                  onClick={handleDownload}
                  className="tap-target px-4 py-2 bg-neutral-100 text-[#080808] border border-black/20 text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-neutral-200 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-[#080808]" />
                  <span>Download (.txt)</span>
                </button>
              </div>

              <button
                onClick={handleOpenMailto}
                className="tap-target px-4 py-2 bg-[#E30613] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-red-700 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Open in Email App</span>
              </button>
            </div>

            <p className="text-[11px] text-neutral-500 mt-3 text-center sm:text-left">
              Clicking &ldquo;Open in Email App&rdquo; creates a standard mail draft in your system client (Outlook, Apple Mail, Gmail) with subject and text pre-filled. You must review and click send yourself.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

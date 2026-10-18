import React, { useState } from 'react';
import { PageId } from '../types';
import { SITE_METADATA } from '../data/content';
import { Mail, MessageSquare, Newspaper, RotateCcw, ShieldCheck, CheckCircle2, Lock } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [inquiryType, setInquiryType] = useState('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Collection remains disabled until this separate intake backend is reviewed.
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="border-b-4 border-[#080808] pb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-[#E30613] text-white">
            Civic Channels
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
            Section 3I: Contact &amp; Enquiries
          </span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl text-[#080808] uppercase tracking-tight">
          Secure Contact &amp; Public Desks
        </h1>
        <p className="mt-3 text-base sm:text-lg text-[#252525] leading-relaxed max-w-3xl">
          Direct channels for press accreditation, research collaboration, factual corrections, and data privacy requests.
        </p>
      </div>

      {/* Directory of Direct Desks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="border-2 border-[#080808] p-5 bg-white flex flex-col justify-between">
          <div>
            <Newspaper className="w-6 h-6 text-[#E30613] mb-3" />
            <h3 className="font-display text-base uppercase text-[#080808]">Press &amp; Media Desk</h3>
            <p className="text-xs text-[#252525] mt-1 mb-3">
              Journalist briefings, broadcast commentary, and primary fact sheets.
            </p>
          </div>
          <a href={`mailto:${SITE_METADATA.pressEmail}`} className="text-xs font-bold text-[#E30613] hover:underline font-mono">
            {SITE_METADATA.pressEmail}
          </a>
        </div>

        <div className="border-2 border-[#080808] p-5 bg-white flex flex-col justify-between">
          <div>
            <RotateCcw className="w-6 h-6 text-[#E30613] mb-3" />
            <h3 className="font-display text-base uppercase text-[#080808]">Factual Corrections</h3>
            <p className="text-xs text-[#252525] mt-1 mb-3">
              Submit primary sources to challenge or refine published citations.
            </p>
          </div>
          <a href={`mailto:${SITE_METADATA.correctionsEmail}`} className="text-xs font-bold text-[#E30613] hover:underline font-mono">
            {SITE_METADATA.correctionsEmail}
          </a>
        </div>

        <div className="border-2 border-[#080808] p-5 bg-white flex flex-col justify-between">
          <div>
            <Lock className="w-6 h-6 text-[#E30613] mb-3" />
            <h3 className="font-display text-base uppercase text-[#080808]">Privacy &amp; GDPR DPO</h3>
            <p className="text-xs text-[#252525] mt-1 mb-3">
              Data subject rights, erasure requests, and security reporting.
            </p>
          </div>
          <a href={`mailto:${SITE_METADATA.privacyEmail}`} className="text-xs font-bold text-[#E30613] hover:underline font-mono">
            {SITE_METADATA.privacyEmail}
          </a>
        </div>

        <div className="border-2 border-[#080808] p-5 bg-white flex flex-col justify-between">
          <div>
            <Mail className="w-6 h-6 text-[#E30613] mb-3" />
            <h3 className="font-display text-base uppercase text-[#080808]">General Enquiries</h3>
            <p className="text-xs text-[#252525] mt-1 mb-3">
              Civic liaison, diaspora coordination, and platform feedback.
            </p>
          </div>
          <a href={`mailto:${SITE_METADATA.contactEmail}`} className="text-xs font-bold text-[#E30613] hover:underline font-mono">
            {SITE_METADATA.contactEmail}
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white border-2 border-[#080808] p-6 sm:p-10 shadow-sm">
        {status === 'submitted' ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl text-[#080808] uppercase tracking-tight">
              Message Routed to Appropriate Desk
            </h3>
            <p className="text-sm text-[#252525] max-w-md mx-auto leading-relaxed">
              Thank you for reaching out. We route incoming inquiries according to topic. All messages are encrypted in transit and never stored on public endpoints.
            </p>
            <button
              onClick={() => {
                setStatus('idle');
                setFormData({ name: '', email: '', subject: '', message: '' });
              }}
              className="mt-4 px-6 py-2.5 bg-[#080808] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#252525]"
            >
              Send Another Note
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
<p role="status" className="p-4 border-2">This form is currently unavailable. No information is being collected or sent.</p>
<fieldset disabled className="contents">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#080808] mb-1">
                Select Destination Desk
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'general', label: 'General Civic' },
                  { id: 'press', label: 'Press Desk' },
                  { id: 'corrections', label: 'Correction Request' },
                  { id: 'privacy', label: 'Privacy / GDPR' },
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setInquiryType(type.id)}
                    className={`p-2.5 text-xs font-bold uppercase tracking-wider text-center border cursor-pointer ${
                      inquiryType === type.id
                        ? 'bg-[#080808] text-white border-[#080808]'
                        : 'bg-white text-neutral-700 border-neutral-300 hover:border-black'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#080808] mb-1">
                  Your Full Name <span className="text-[#E30613]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Samuel Okafor"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-2.5 border-2 border-black/30 focus:outline-none focus:border-[#E30613] text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#080808] mb-1">
                  Email Address <span className="text-[#E30613]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-2.5 border-2 border-black/30 focus:outline-none focus:border-[#E30613] text-sm font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#080808] mb-1">
                Subject
              </label>
              <input
                type="text"
                required
                placeholder="Brief summary of inquiry"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full p-2.5 border-2 border-black/30 focus:outline-none focus:border-[#E30613] text-sm font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#080808] mb-1">
                Message Content <span className="text-[#E30613]">*</span>
              </label>
              <textarea
                rows={5}
                required
                placeholder="Write your inquiry or feedback clearly..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-3 border-2 border-black/30 focus:outline-none focus:border-[#E30613] text-sm"
              />
            </div>

            <div className="p-3 bg-neutral-50 border border-black/10 text-xs text-neutral-600 flex items-center justify-between">
              <span>Form unavailable until security testing is complete.</span>
              <button
                type="button"
                onClick={() => onNavigate('privacy')}
                className="text-[#E30613] font-bold underline hover:text-black cursor-pointer"
              >
                Privacy Notice
              </button>
            </div>

            <button
              type="submit"
              className="tap-target px-8 py-3.5 bg-[#E30613] text-white text-xs font-bold uppercase tracking-wider hover:bg-red-700 transition-colors cursor-pointer"
            >
              Send Message
            </button>
          </fieldset>
</form>
        )}
      </div>
    </div>
  );
};

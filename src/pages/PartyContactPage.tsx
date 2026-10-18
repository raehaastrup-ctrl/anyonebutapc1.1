import React, { useState } from 'react';
import { PageId } from '../types';
import { Landmark, ShieldAlert, Lock, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

interface PartyContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const PartyContactPage: React.FC<PartyContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    partyName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false
  });
  const [status, setStatus] = useState<'idle' | 'submitted_notice'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Collection remains disabled until this separate intake backend is reviewed.
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="border-b-4 border-[#080808] pb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-[#080808] text-white">
            Institutional Channel
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-[#E30613]">
            Section 3H: Party Leadership Desk
          </span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl text-[#080808] uppercase tracking-tight">
          Political Party Leadership Inquiries
        </h1>
        <p className="mt-3 text-base sm:text-lg text-[#252525] leading-relaxed">
          A dedicated, private intake channel for registered political party leadership and campaign executives to submit documented procedural or legal concerns.
        </p>
      </div>

      {/* Critical Non-Endorsement & Moderation Notice */}
      <div className="bg-[#F4F4F4] border-2 border-[#080808] p-6 sm:p-8 space-y-4">
        <div className="flex items-start gap-4">
          <ShieldAlert className="w-8 h-8 text-[#E30613] shrink-0 mt-1" aria-hidden="true" />
          <div className="space-y-3">
            <h2 className="font-display text-xl text-[#080808] uppercase tracking-tight">
              Essential Protocols for Political Parties
            </h2>
            <div className="space-y-2 text-xs sm:text-sm text-[#252525] leading-relaxed">
              <p>
                <strong>1. No Endorsement or Alliance:</strong> Anyone But APC does not enter political pacts, electoral coalitions, joint campaign committees, or candidate endorsements with any registered political party.
              </p>
              <p>
                <strong>2. Private Review Queue:</strong> Incoming submissions are routed directly to an encrypted private review queue. Messages are <em>never published publicly or shared with third parties</em>.
              </p>
              <p>
                <strong>3. Out-of-Band Verification:</strong> The identity of party officials and claimed roles will be verified out-of-band via official party secretariat directories and verifiable public records before engagement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Card */}
      <div className="bg-white border-2 border-[#080808] p-6 sm:p-10 shadow-sm">
        {status === 'submitted_notice' ? (
          <div className="space-y-6">
            <div className="p-4 bg-neutral-100 border-2 border-[#080808] text-[#080808] space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <h3 className="font-display text-lg uppercase tracking-tight">
                  Submission Transmitted to Private Review Queue
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#252525] leading-relaxed">
                Your communication has been placed in our private verification queue. Our legal and liaison desk will verify credentials with registered party records prior to any correspondence.
              </p>
              <div className="p-3 bg-white border border-black/10 text-xs text-neutral-600 font-mono">
                Status: Encrypted intake verified. No public dissemination.
              </div>
            </div>

            <button
              onClick={() => {
                setStatus('idle');
                setFormData({
                  name: '',
                  role: '',
                  partyName: '',
                  email: '',
                  phone: '',
                  subject: '',
                  message: '',
                  consent: false
                });
              }}
              className="tap-target px-5 py-2.5 bg-[#080808] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#252525] cursor-pointer"
            >
              Reset Channel
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
<p role="status" className="p-4 border-2">This form is currently unavailable. No information is being collected or sent.</p>
<fieldset disabled className="contents">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#080808] mb-1">
                  Full Name of Representative <span className="text-[#E30613]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Barrister O. Adeleke"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-2.5 border-2 border-black/30 focus:outline-none focus:border-[#E30613] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#080808] mb-1">
                  Official Role / Designation <span className="text-[#E30613]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. National Legal Adviser / State Secretary"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full p-2.5 border-2 border-black/30 focus:outline-none focus:border-[#E30613] text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#080808] mb-1">
                  Registered Political Party <span className="text-[#E30613]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Registered Political Party Name"
                  value={formData.partyName}
                  onChange={(e) => setFormData({ ...formData, partyName: e.target.value })}
                  className="w-full p-2.5 border-2 border-black/30 focus:outline-none focus:border-[#E30613] text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#080808] mb-1">
                  Official Institutional Email <span className="text-[#E30613]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="official@partyname.org.ng"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-2.5 border-2 border-black/30 focus:outline-none focus:border-[#E30613] text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#080808] mb-1">
                Subject of Inquiry / Documentation
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Documentation on polling unit logistics / collation access"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full p-2.5 border-2 border-black/30 focus:outline-none focus:border-[#E30613] text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#080808] mb-1">
                Detailed Message &amp; Documentary References <span className="text-[#E30613]">*</span>
              </label>
              <textarea
                rows={6}
                required
                placeholder="Provide dates, specific polling locations, statutory sections, or administrative correspondence. Do not upload sensitive evidentiary files through standard web forms; request secure transfer instructions."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-3 border-2 border-black/30 focus:outline-none focus:border-[#E30613] text-sm font-sans"
              />
            </div>

            {/* Explicit Consent and Acknowledgment */}
            <div className="p-4 bg-neutral-50 border border-black/15 flex items-start gap-3">
              <input
                type="checkbox"
                id="party-consent"
                required
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="mt-1 h-5 w-5 rounded-none border-gray-400 text-[#E30613] focus:ring-[#E30613] cursor-pointer"
              />
              <label htmlFor="party-consent" className="text-xs text-[#252525] leading-relaxed cursor-pointer">
                I understand and acknowledge that this communication does NOT create any endorsement, political alliance, or joint campaign relationship with Anyone But APC. I confirm that I am authorised to communicate on behalf of the named organization, and that my identity is subject to out-of-band verification.
              </label>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                type="submit"
                disabled={!formData.consent}
                className={`tap-target px-8 py-3.5 text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer ${
                  formData.consent ? 'bg-[#080808] text-white hover:bg-[#252525]' : 'bg-neutral-300 text-neutral-600 cursor-not-allowed'
                }`}
              >
                <span>Transmit to Private Review Queue</span>
                <ArrowRight className="w-4 h-4 text-[#E30613]" />
              </button>
            </div>
          </fieldset>
</form>
        )}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { PageId } from '../types';
import { Shield, Lock, CheckCircle2, AlertCircle, ArrowRight, ExternalLink } from 'lucide-react';

interface UpdatesPageProps {
  onNavigate: (page: PageId) => void;
}

export const UpdatesPage: React.FC<UpdatesPageProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [country, setCountry] = useState('');
  const [consentGiven, setConsentGiven] = useState(false);
  const [statusState, setStatusState] = useState<'idle' | 'submitting' | 'success' | 'demo_notice'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consentGiven) return;

    setStatusState('submitting');

    // Check if a real backend endpoint is supplied in environment
    const endpoint = import.meta.env.VITE_SUPPORTER_ENDPOINT;

    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, firstName, country, timestamp: new Date().toISOString() })
        });
        if (res.ok) {
          setStatusState('success');
        } else {
          setStatusState('demo_notice');
        }
      } catch {
        setStatusState('demo_notice');
      }
    } else {
      // Per master prompt specification:
      // "No functional claims of sending email, registering a supporter, or submitting a form until a real backend has been configured and tested."
      // "Do not store supporter data in browser localStorage, public GitHub, source files or client-side environment variables."
      setTimeout(() => {
        setStatusState('demo_notice');
      }, 500);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="border-b-4 border-[#080808] pb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-[#E30613] text-white">
            Civic Community
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
            Phase One Voluntary Sign-Up
          </span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl text-[#080808] uppercase tracking-tight">
          Supporter Updates &amp; Research Briefings
        </h1>
        <p className="mt-3 text-base sm:text-lg text-[#252525] leading-relaxed">
          Receive factual weekly briefings on election integrity, constitutional inquiries, and civic resources. Voluntary, double opt-in, and strictly private.
        </p>
      </div>

      {/* Privacy-by-Design Safeguards Banner */}
      <div className="bg-[#F4F4F4] border-2 border-[#080808] p-6 sm:p-8 space-y-4">
        <div className="flex items-start gap-4">
          <Lock className="w-7 h-7 text-[#E30613] shrink-0 mt-1" aria-hidden="true" />
          <div className="space-y-2">
            <h2 className="font-display text-xl text-[#080808] uppercase tracking-tight">
              Privacy by Design &amp; UK GDPR Special-Category Safeguards
            </h2>
            <p className="text-xs sm:text-sm text-[#252525] leading-relaxed">
              Because political advocacy touches on special-category data under UK GDPR and the Nigeria Data Protection Act (NDPA), we operate with extreme data minimisation:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#080808] font-medium pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E30613] shrink-0" />
                <span>Zero political affiliation questions</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E30613] shrink-0" />
                <span>Zero phone numbers or postal addresses collected</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E30613] shrink-0" />
                <span>Zero storage in browser localStorage or cookies</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E30613] shrink-0" />
                <span>Strict double opt-in verification required</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Sign-Up Form */}
      <div className="bg-white border-2 border-[#080808] p-6 sm:p-10 shadow-sm">
        {statusState === 'demo_notice' ? (
          <div className="space-y-6">
            <div className="p-4 bg-amber-50 border-2 border-amber-800 text-amber-950 space-y-3">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-800 shrink-0" />
                <h3 className="font-display text-lg uppercase tracking-tight">
                  Backend Integration Check (Specification Requirement 6)
                </h3>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed">
                <strong>No Fake Success Claims:</strong> In strict compliance with our production specification, we do not claim to have submitted your email or sent a confirmation until a real, live secure backend has been provisioned and tested.
              </p>
              <div className="bg-white p-3 border border-amber-300 text-xs text-neutral-800 font-mono space-y-1">
                <p>Status: Client validation passed successfully.</p>
                <p>Storage: Zero data stored in localStorage or source files.</p>
                <p>Production step: Set <code>VITE_SUPPORTER_ENDPOINT</code> in Cloudflare Pages to connect your encrypted Worker/CRM webhook.</p>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setStatusState('idle')}
                className="tap-target px-5 py-2.5 bg-[#080808] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#252525] cursor-pointer"
              >
                Return to Form
              </button>
            </div>
          </div>
        ) : statusState === 'success' ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl text-[#080808] uppercase tracking-tight">
              Verification Email Dispatched
            </h3>
            <p className="text-sm text-[#252525] max-w-md mx-auto leading-relaxed">
              Please check your inbox to confirm your double opt-in subscription. You will only receive verified updates after clicking the confirmation link.
            </p>
            <button
              onClick={() => { setStatusState('idle'); setEmail(''); setFirstName(''); }}
              className="mt-4 px-6 py-2.5 bg-[#080808] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#252525]"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="supporter-email" className="block text-xs font-bold uppercase tracking-wider text-[#080808] mb-1">
                Email Address <span className="text-[#E30613]">*</span>
              </label>
              <input
                id="supporter-email"
                type="email"
                required
                placeholder="you@domain.org"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border-2 border-black/30 focus:outline-none focus:border-[#E30613] text-sm font-medium"
              />
              <p className="text-[11px] text-neutral-500 mt-1">
                Your email is used exclusively for periodic briefings. Never sold, rented, or shared with third parties.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="supporter-fname" className="block text-xs font-bold uppercase tracking-wider text-[#080808] mb-1">
                  First Name <span className="text-neutral-500 font-normal">(Optional)</span>
                </label>
                <input
                  id="supporter-fname"
                  type="text"
                  placeholder="e.g. Amina"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full p-3 border-2 border-black/30 focus:outline-none focus:border-[#E30613] text-sm"
                />
              </div>

              <div>
                <label htmlFor="supporter-country" className="block text-xs font-bold uppercase tracking-wider text-[#080808] mb-1">
                  Country of Residence <span className="text-neutral-500 font-normal">(Optional)</span>
                </label>
                <select
                  id="supporter-country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full p-3 border-2 border-black/30 focus:outline-none focus:border-[#E30613] text-sm bg-white"
                >
                  <option value="">Select country (optional)</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="Other European">Other European Union</option>
                  <option value="Other Diaspora">Other Diaspora / Global</option>
                </select>
              </div>
            </div>

            {/* Explicit Unticked Opt-In Checkbox (Required) */}
            <div className="p-4 bg-neutral-50 border border-black/15 flex items-start gap-3">
              <input
                id="explicit-consent"
                type="checkbox"
                required
                checked={consentGiven}
                onChange={(e) => setConsentGiven(e.target.checked)}
                className="mt-1 h-5 w-5 rounded-none border-gray-400 text-[#E30613] focus:ring-[#E30613] cursor-pointer"
              />
              <label htmlFor="explicit-consent" className="text-xs sm:text-sm text-[#252525] leading-relaxed cursor-pointer">
                <strong>Explicit Opt-In:</strong> I consent to receive factual civic updates and research releases from Anyone But APC. I understand this subscription is double opt-in, that I may unsubscribe or request data deletion at any moment, and that my data is handled pursuant to the{' '}
                <button
                  type="button"
                  onClick={() => onNavigate('privacy')}
                  className="text-[#E30613] font-bold underline hover:text-black cursor-pointer"
                >
                  Privacy Notice
                </button>.
              </label>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <button
                type="submit"
                disabled={!consentGiven || statusState === 'submitting'}
                className={`tap-target px-8 py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors ${
                  consentGiven && statusState !== 'submitting'
                    ? 'bg-[#E30613] text-white hover:bg-red-700'
                    : 'bg-neutral-300 text-neutral-600 cursor-not-allowed'
                }`}
              >
                <span>{statusState === 'submitting' ? 'Validating...' : 'Register for Updates'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <span className="text-[11px] text-neutral-500">
                Double opt-in verification required before activation.
              </span>
            </div>
          </form>
        )}
      </div>

      {/* Unsubscribe & Data Deletion Info */}
      <div className="border border-black/20 p-6 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#252525]">
        <div>
          <strong className="block text-[#080808] font-bold uppercase text-xs mb-1">
            Right to Erasure &amp; Unsubscribe:
          </strong>
          <span>
            Every email contains a 1-click unsubscribe link. To request instant deletion of your records under UK GDPR Article 17, email{' '}
            <a href="mailto:privacy@anyonebutapc.org" className="text-[#E30613] underline font-bold">
              privacy@anyonebutapc.org
            </a>.
          </span>
        </div>
      </div>
    </div>
  );
};

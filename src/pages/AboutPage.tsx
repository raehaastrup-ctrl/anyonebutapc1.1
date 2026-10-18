import React from 'react';
import { PageId } from '../types';
import { ABOUT_DECLARATION, SITE_METADATA } from '../data/content';
import { BrandLogo } from '../components/BrandLogo';
import { Shield, AlertTriangle, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Page Header */}
      <div className="border-b-4 border-[#080808] pb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-[#E30613] text-white">
            Civic Charter
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
            About Our Initiative
          </span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl text-[#080808] uppercase tracking-tight">
          Independent, Non-Party-Affiliated &amp; Uncompromising
        </h1>
        <p className="mt-3 text-lg sm:text-xl text-[#252525] font-semibold leading-relaxed">
          Why our name criticises the ruling party, why we refuse opposition party endorsements, and how we operate in Phase One.
        </p>
      </div>

      {/* Critical Definition: Independent vs Politically Neutral */}
      <div className="bg-[#F4F4F4] border-2 border-[#080808] p-6 sm:p-10 shadow-xs">
        <div className="flex items-start gap-4">
          <Shield className="w-8 h-8 text-[#E30613] shrink-0 mt-1" aria-hidden="true" />
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-[#080808] uppercase tracking-tight">
              Independent vs. Politically Neutral: The Distinction
            </h2>
            <p className="text-sm sm:text-base text-[#252525] leading-relaxed">
              Anyone But APC is <strong>independent of political parties</strong>, but we are <strong>not politically neutral</strong>.
            </p>
            <p className="text-sm sm:text-base text-[#252525] leading-relaxed">
              Our name expresses an explicit, evidence-backed critique of the governing All Progressives Congress (APC)—its macroeconomic management, currency devaluation, fuel subsidy removal without social protections, and its response to peaceful civil dissent. We do not pretend to be an impartial observer of executive governance.
            </p>
            <div className="p-4 bg-white border-l-4 border-[#E30613] text-xs sm:text-sm text-[#080808] font-medium leading-relaxed">
              <strong>Equally, we are NOT a party campaign vehicle:</strong> We do not endorse, fund, or coordinate with any opposition political party (such as PDP, LP, NNPP, or SDP) or any individual politician. Holding power accountable requires complete operational separation from those competing for power.
            </div>
          </div>
        </div>
      </div>

      {/* Scope and Boundaries */}
      <div className="border-2 border-black/20 p-6 sm:p-8 bg-white">
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="w-5 h-5 text-[#E30613]" aria-hidden="true" />
          <h2 className="font-display text-xl sm:text-2xl text-[#080808] uppercase tracking-tight">
            Our Phase One Scope &amp; Safety Boundaries
          </h2>
        </div>
        <p className="text-sm text-[#252525] mb-6">
          To protect participants, maintain factual credibility, and comply with all applicable laws in Nigeria and the diaspora, Phase One adheres strictly to the following boundaries:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ABOUT_DECLARATION.scopeBoundaries.map((boundary, i) => (
            <div key={i} className="flex items-start gap-3 p-3 bg-neutral-50 border border-black/10">
              <span className="w-5 h-5 bg-[#080808] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                ✕
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#080808]">{boundary}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-amber-50 border border-amber-300 text-xs sm:text-sm text-amber-950 leading-relaxed">
          <strong>Protest Protocol:</strong> We do not call for, schedule, or direct street protests in Nigeria. The security of citizens on the ground is paramount. Public gatherings or diaspora town halls will only ever be announced after rigorous legal and risk reviews.
        </div>
      </div>

      {/* Governance & Working Group Structure */}
      <div className="space-y-6">
        <div className="border-b-2 border-[#080808] pb-2">
          <h2 className="font-display text-2xl text-[#080808] uppercase tracking-tight">
            Governance &amp; Accountability Structure
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border-2 border-[#080808] p-5 bg-white">
            <h3 className="font-display text-lg text-[#080808] uppercase tracking-tight mb-2">
              1. Editorial &amp; Research Desk
            </h3>
            <p className="text-xs text-[#252525] leading-relaxed">
              Composed of experienced investigative researchers, constitutional lawyers, and civic data analysts. Responsible for verifying all statistical claims, cross-referencing court records, and updating the public correction log.
            </p>
          </div>

          <div className="border-2 border-[#080808] p-5 bg-white">
            <h3 className="font-display text-lg text-[#080808] uppercase tracking-tight mb-2">
              2. Diaspora Liaison Panel
            </h3>
            <p className="text-xs text-[#252525] leading-relaxed">
              Coordinates civic correspondence with international parliaments (UK Parliament, US Congress, EU External Action Service) and mobilizes diaspora resources to safeguard voting rights.
            </p>
          </div>

          <div className="border-2 border-[#080808] p-5 bg-white">
            <h3 className="font-display text-lg text-[#080808] uppercase tracking-tight mb-2">
              3. Privacy &amp; Security Unit
            </h3>
            <p className="text-xs text-[#252525] leading-relaxed">
              Enforces privacy by design under UK GDPR and NDPR guidelines. Ensures that supporter data is never stored on client-side devices, unencrypted stores, or shared with third parties.
            </p>
          </div>
        </div>
      </div>

      {/* Funding Principles */}
      <div className="border-2 border-[#080808] p-6 sm:p-8 bg-neutral-50">
        <h2 className="font-display text-2xl text-[#080808] uppercase tracking-tight mb-3">
          Funding Disclosure &amp; Policy
        </h2>
        <div className="space-y-3 text-sm text-[#252525] leading-relaxed">
          <p>
            {ABOUT_DECLARATION.fundingPolicy}
          </p>
          <p>
            <strong>Phase One Financial Rule:</strong> We do NOT solicit donations, collect money, sell merchandise, or operate public fundraising campaigns. Any operational costs associated with domain registration, static edge infrastructure, and document retrieval are borne entirely pro bono by founding convenors.
          </p>
        </div>
      </div>

      {/* Manifesto Download Gateway */}
      <div className="bg-[#080808] text-white border-2 border-[#080808] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <BrandLogo variant="circle-badge" size="md" />
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#E30613]">Foundational Document</span>
            <h3 className="font-display text-xl uppercase tracking-tight text-white">
              Read &amp; Download The Full 2026 Manifesto
            </h3>
            <p className="text-xs text-neutral-300 mt-0.5">
              Available as printable PDF, high-res graphic poster, and plain text.
            </p>
          </div>
        </div>
        <button
          onClick={() => onNavigate('manifesto')}
          className="tap-target px-5 py-3 bg-[#E30613] text-white text-xs font-bold uppercase tracking-wider hover:bg-red-700 whitespace-nowrap cursor-pointer flex items-center gap-2"
        >
          <span>Download Manifesto</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Public Corrections Commitment */}
      <div className="border-2 border-[#080808] p-6 sm:p-8 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h2 className="font-display text-2xl text-[#080808] uppercase tracking-tight mb-2">
            Transparent Corrections Policy
          </h2>
          <p className="text-xs sm:text-sm text-[#252525] max-w-xl leading-relaxed">
            Every factual citation on this site is subject to open verification. If you detect an inaccuracy in a date, legal statute, or statistical quote, we log and publish the correction transparently.
          </p>
        </div>
        <button
          onClick={() => onNavigate('evidence')}
          className="tap-target px-5 py-3 bg-[#080808] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#252525] whitespace-nowrap cursor-pointer flex items-center gap-2"
        >
          <span>View Public Correction Log</span>
          <ArrowRight className="w-4 h-4 text-[#E30613]" />
        </button>
      </div>
    </div>
  );
};

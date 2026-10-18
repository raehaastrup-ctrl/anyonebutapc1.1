import React from 'react';
import { PageId } from '../types';
import { SITE_METADATA } from '../data/content';
import { FileCheck, Shield, RotateCcw, ArrowLeft, ArrowRight } from 'lucide-react';

interface EditorialPolicyPageProps {
  onNavigate: (page: PageId) => void;
}

export const EditorialPolicyPage: React.FC<EditorialPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      <button
        onClick={() => onNavigate('home')}
        className="text-xs font-bold uppercase tracking-wider text-neutral-600 hover:text-black flex items-center gap-1 cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Home</span>
      </button>

      <div className="border-b-4 border-[#080808] pb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-[#E30613] text-white">
            Editorial Constitution
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
            Research &amp; Verification Standards
          </span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl text-[#080808] uppercase tracking-tight">
          Editorial &amp; Factual Corrections Policy
        </h1>
        <p className="mt-3 text-sm text-[#252525]">
          Published 18 October 2026. Applied across all Anyone But APC research releases.
        </p>
      </div>

      <div className="prose max-w-none text-sm text-[#252525] leading-relaxed space-y-8">
        <section className="space-y-3">
          <h2 className="font-display text-xl uppercase text-[#080808]">
            1. Core Mandate: Uncompromising Verifiability
          </h2>
          <p>
            Anyone But APC is an independent civic advocacy movement explicitly critical of the governing All Progressives Congress. Because our mission is to demand democratic accountability, our moral authority rests wholly upon factual precision. We do not publish unverified rumours, fabricated statistics, manipulated imagery, or unsourced claims.
          </p>
        </section>

        <section className="space-y-3 p-4 bg-neutral-50 border-l-4 border-[#080808]">
          <h2 className="font-display text-lg uppercase text-[#080808]">
            2. Primary Source Hierarchy
          </h2>
          <p>
            All evidence citations must be traceable to primary, certified documentation:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm">
            <li><strong>Official Court Records:</strong> Certified true copies of pleadings, dockets, and signed court orders.</li>
            <li><strong>Statutory Publications:</strong> The consolidated 1999 Constitution, official Federal Government Gazettes, and enacted Electoral Acts.</li>
            <li><strong>Multilateral Economic Datasets:</strong> World Bank, IMF, and National Bureau of Statistics (NBS) primary publications with exact date and threshold notes.</li>
            <li><strong>Accredited Human Rights Monitors:</strong> Reports by established organisations (e.g. Amnesty International) adhering to forensic field verification.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl uppercase text-[#080808]">
            3. Strict Legal Terminology Directive
          </h2>
          <div className="p-4 bg-red-50 border border-red-200 text-xs sm:text-sm text-red-950">
            <strong>Mandatory Legal Distinction:</strong> In discussing historical court proceedings—specifically the 1993 US District Court civil forfeiture proceedings in Northern District of Illinois (Case 93 C 4483)—our writers and researchers must accurately differentiate civil forfeiture in rem from a criminal conviction. President Bola Ahmed Tinubu must never be characterized as a convicted narcotics trafficker or felon. Credibility requires stating the legal truth exactly as recorded in court records.
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl uppercase text-[#080808]">
            4. Right of Reply &amp; Counter-Positions
          </h2>
          <p>
            Whenever a government ministry, law enforcement agency, or public official issues an official statement, rebuttal, or rejoinder regarding a documented issue, our editorial desk summarizes that position in the evidence entry under &ldquo;Official Right of Reply / Counter-Position&rdquo;. Readers deserve access to both the documented allegation and the state&apos;s defense.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl uppercase text-[#080808]">
            5. Public Correction &amp; Retraction Protocol
          </h2>
          <p>
            When an error of fact, figure, date, or attribution is identified, we follow an open, auditable correction process:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm">
            <li>We do NOT silently edit or delete inaccurate copy.</li>
            <li>The text is updated with a transparent &ldquo;Corrected Record&rdquo; badge.</li>
            <li>The revision is permanently recorded in our public Correction Log with the date, previous phrasing, amended phrasing, and reason for the change.</li>
          </ol>
        </section>

        <div className="pt-4 flex items-center justify-between border-t border-black/10">
          <button
            onClick={() => onNavigate('manifesto')}
            className="tap-target px-5 py-2.5 bg-[#080808] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-[#252525] cursor-pointer"
          >
            <span>Read The Manifesto</span>
            <ArrowRight className="w-4 h-4 text-[#E30613]" />
          </button>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { PageId } from '../types';
import { SITE_METADATA, CORE_PILLARS } from '../data/content';
import { INITIAL_EVIDENCE_ITEMS } from '../data/evidence';
import { StatusBadge } from '../components/StatusBadge';
import { BrandLogo } from '../components/BrandLogo';
import { 
  ArrowRight, 
  Download, 
  BookOpen, 
  FileCheck2, 
  Mail, 
  Scale, 
  Vote, 
  Heart,
  Shield, 
  FileText,
  ChevronRight,
  ExternalLink,
  Sparkles,
  Users
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const featuredEvidence = INITIAL_EVIDENCE_ITEMS.slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section */}
      <section className="relative pt-8 sm:pt-16 pb-12 sm:pb-20 border-b border-black/10 overflow-hidden" aria-labelledby="hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#080808] text-white text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#E30613]" aria-hidden="true" />
                <span>Independent Civic Advocacy Initiative</span>
              </div>

              <div className="flex items-center gap-4">
                <BrandLogo variant="circle-badge" size="lg" className="shrink-0" />
                <div>
                  <h1 id="hero-heading" className="font-display text-4xl sm:text-6xl text-[#080808] uppercase tracking-tighter leading-none">
                    {SITE_METADATA.name}
                  </h1>
                  <p className="text-xs sm:text-sm font-bold text-[#E30613] tracking-widest uppercase mt-1">
                    Unite Opposition &amp; Activate Diaspora To Restore Democracy
                  </p>
                </div>
              </div>

              <p className="text-lg sm:text-xl font-bold text-[#252525] tracking-tight leading-snug">
                {SITE_METADATA.subheading}
              </p>

              <p className="text-sm sm:text-base text-[#252525] leading-relaxed max-w-3xl">
                {SITE_METADATA.introCopy}
              </p>

              {/* Action Buttons: Paced for Beginners */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  onClick={() => onNavigate('manifesto')}
                  className="tap-target px-6 py-3.5 bg-[#E30613] text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-red-700 transition-colors cursor-pointer shadow-xs flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download The Manifesto</span>
                </button>
                <button
                  onClick={() => onNavigate('issues')}
                  className="tap-target px-6 py-3.5 bg-[#080808] text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#252525] transition-colors cursor-pointer shadow-xs"
                >
                  Understand The Issues
                </button>
                <button
                  onClick={() => onNavigate('democracy')}
                  className="tap-target px-6 py-3.5 bg-white text-[#080808] font-bold text-xs sm:text-sm uppercase tracking-wider border-2 border-[#080808] hover:bg-neutral-50 transition-colors cursor-pointer"
                >
                  Democracy 101 Guide
                </button>
              </div>

              {/* Secondary Notice */}
              <div className="p-4 bg-[#F4F4F4] border-l-4 border-[#080808] text-xs sm:text-sm text-[#252525] leading-relaxed max-w-3xl">
                <strong className="block text-[#080808] uppercase tracking-wider font-bold mb-1">
                  Phase One Operational Notice:
                </strong>
                {SITE_METADATA.phaseNotice}
              </div>
            </div>

            {/* Right Card: Manifesto Download Showcase */}
            <div className="lg:col-span-4 bg-[#080808] text-white border-2 border-[#080808] p-6 sm:p-8 flex flex-col justify-between shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-neutral-700 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E30613]">
                    Official Release
                  </span>
                  <span className="text-[10px] bg-neutral-800 text-neutral-300 px-2 py-0.5 uppercase font-mono">
                    Phase One
                  </span>
                </div>

                <div className="flex justify-center py-2">
                  <BrandLogo variant="circle-badge" size="xl" />
                </div>

                <h3 className="font-display text-2xl uppercase tracking-tight text-white text-center">
                  OUR MANIFESTO
                </h3>
                <p className="text-xs text-neutral-300 text-center leading-relaxed">
                  A free, fair and prosperous Nigeria. Available in printable PDF, high-res graphic poster, and plain text.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-700 space-y-2">
                <button
                  onClick={() => onNavigate('manifesto')}
                  className="w-full tap-target py-3 bg-[#E30613] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-red-700 transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>View &amp; Download Manifesto</span>
                </button>
                <p className="text-[10px] text-neutral-400 text-center">
                  Free to download, print, and distribute for civic education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guided Civic Journey: Paced Out 4-Step Learning */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="journey-heading">
        <div className="border-b-2 border-[#080808] pb-3 mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E30613]">
            Paced for Everyone
          </span>
          <h2 id="journey-heading" className="font-display text-2xl sm:text-3xl text-[#080808] uppercase tracking-tight mt-1">
            New to Democracy? Follow This Step-by-Step Path
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="border-2 border-[#080808] p-5 bg-white flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-8 h-8 rounded-full bg-[#E30613] text-white flex items-center justify-center font-bold text-sm mb-3">
                1
              </div>
              <h3 className="font-display text-lg text-[#080808] uppercase tracking-tight mb-2">
                Read The Manifesto
              </h3>
              <p className="text-xs text-[#252525] leading-relaxed mb-4">
                Understand the 6 core principles, the vision for basic needs, and what we are (and are not) doing.
              </p>
            </div>
            <button
              onClick={() => onNavigate('manifesto')}
              className="text-xs font-bold uppercase tracking-wider text-[#E30613] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Explore Manifesto &rarr;</span>
            </button>
          </div>

          {/* Step 2 */}
          <div className="border-2 border-[#080808] p-5 bg-white flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-8 h-8 rounded-full bg-[#080808] text-white flex items-center justify-center font-bold text-sm mb-3">
                2
              </div>
              <h3 className="font-display text-lg text-[#080808] uppercase tracking-tight mb-2">
                Understand The Issues
              </h3>
              <p className="text-xs text-[#252525] leading-relaxed mb-4">
                Explore the facts on inflation, civil liberties, 1993 court records, and Maslow&apos;s human needs model.
              </p>
            </div>
            <button
              onClick={() => onNavigate('issues')}
              className="text-xs font-bold uppercase tracking-wider text-[#080808] hover:text-[#E30613] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Explore The Issues &rarr;</span>
            </button>
          </div>

          {/* Step 3 */}
          <div className="border-2 border-[#080808] p-5 bg-white flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-8 h-8 rounded-full bg-[#080808] text-white flex items-center justify-center font-bold text-sm mb-3">
                3
              </div>
              <h3 className="font-display text-lg text-[#080808] uppercase tracking-tight mb-2">
                Learn Democracy 101
              </h3>
              <p className="text-xs text-[#252525] leading-relaxed mb-4">
                Bite-sized explainers on separation of powers, assembly rights, and a 60-second claim-checking guide.
              </p>
            </div>
            <button
              onClick={() => onNavigate('democracy')}
              className="text-xs font-bold uppercase tracking-wider text-[#080808] hover:text-[#E30613] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Democracy 101 &rarr;</span>
            </button>
          </div>

          {/* Step 4 */}
          <div className="border-2 border-[#080808] p-5 bg-white flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-8 h-8 rounded-full bg-[#080808] text-white flex items-center justify-center font-bold text-sm mb-3">
                4
              </div>
              <h3 className="font-display text-lg text-[#080808] uppercase tracking-tight mb-2">
                Take Peaceful Action
              </h3>
              <p className="text-xs text-[#252525] leading-relaxed mb-4">
                Write an individual letter to an MP or editor, or subscribe privately for verified updates.
              </p>
            </div>
            <button
              onClick={() => onNavigate('action')}
              className="text-xs font-bold uppercase tracking-wider text-[#080808] hover:text-[#E30613] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Take Action &rarr;</span>
            </button>
          </div>
        </div>
      </section>

      {/* Verified Evidence Highlight Reel */}
      <section className="bg-neutral-50 py-16 border-y border-black/10" aria-labelledby="evidence-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-[#080808] pb-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E30613]">
                Transparency By Default
              </span>
              <h2 id="evidence-heading" className="font-display text-3xl sm:text-4xl text-[#080808] uppercase tracking-tight mt-1">
                Verified Research Highlights
              </h2>
            </div>
            <button
              onClick={() => onNavigate('evidence')}
              className="tap-target px-4 py-2 bg-[#080808] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#252525] flex items-center gap-2 cursor-pointer w-fit"
            >
              <span>View Full Evidence Archive</span>
              <ArrowRight className="w-4 h-4 text-[#E30613]" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredEvidence.map((item) => (
              <div
                key={item.id}
                className="bg-white border-2 border-black/15 p-6 flex flex-col justify-between shadow-xs hover:border-black transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <StatusBadge status={item.evidenceStatus} />
                    <span className="text-[11px] font-mono text-neutral-500 font-semibold">{item.timePeriod}</span>
                  </div>
                  <h3 className="font-display text-lg text-[#080808] uppercase tracking-tight mb-2 leading-snug">
                    {item.claimTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#252525] leading-relaxed line-clamp-3 mb-4">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-black/10 flex items-center justify-between">
                  <a
                    href={item.directLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#E30613] hover:underline flex items-center gap-1"
                  >
                    <span>Inspect Source</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => onNavigate('evidence')}
                    className="text-xs font-bold text-[#080808] hover:underline cursor-pointer"
                  >
                    Full Details &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

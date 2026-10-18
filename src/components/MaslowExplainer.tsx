import React, { useState } from 'react';
import { MASLOW_EXPLAINER } from '../data/content';
import { Info, AlertCircle, Layers, CheckCircle2 } from 'lucide-react';

export const MaslowExplainer: React.FC = () => {
  const [activeLevelIndex, setActiveLevelIndex] = useState<number>(0);
  const currentLevel = MASLOW_EXPLAINER.levels[activeLevelIndex];

  return (
    <section className="bg-white border-2 border-[#080808] p-6 sm:p-10 my-10 shadow-sm" aria-labelledby="basics-heading">
      <div className="max-w-4xl">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-[#E30613] text-white">
            Civic Framework
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
            Section 4: The Basics People Need
          </span>
        </div>

        <h2 id="basics-heading" className="font-display text-2xl sm:text-4xl text-[#080808] uppercase tracking-tight">
          Human Needs &amp; The Reality of Civic Participation
        </h2>

        <p className="mt-4 text-base sm:text-lg text-[#252525] leading-relaxed">
          {MASLOW_EXPLAINER.introduction}
        </p>

        {/* Vital Caveat Box */}
        <div className="mt-6 p-4 sm:p-5 bg-neutral-50 border-l-4 border-[#080808] flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-[#E30613] shrink-0 mt-0.5" aria-hidden="true" />
          <div className="text-sm text-[#252525] leading-relaxed">
            <strong className="block text-[#080808] font-bold uppercase tracking-wider mb-1">
              Constitutional Agency &amp; Anti-Bias Principle
            </strong>
            <p>{MASLOW_EXPLAINER.caveat}</p>
          </div>
        </div>

        {/* Interactive Pyramid / Level Selector */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Level Stack Tabs */}
          <div className="lg:col-span-5 space-y-2" role="tablist" aria-label="Maslow Hierarchy Levels">
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#080808]" aria-hidden="true" />
              <span>Select Level to Scrutinise Impact</span>
            </p>
            {MASLOW_EXPLAINER.levels.map((lvl, idx) => {
              const isSelected = activeLevelIndex === idx;
              return (
                <button
                  key={lvl.levelNumber}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`panel-${lvl.levelNumber}`}
                  id={`tab-${lvl.levelNumber}`}
                  onClick={() => setActiveLevelIndex(idx)}
                  className={`w-full text-left p-3.5 border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#080808] text-white border-[#080808] translate-x-1 shadow-xs'
                      : 'bg-white text-[#080808] border-neutral-300 hover:border-black hover:bg-neutral-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        isSelected ? 'bg-[#E30613] text-white' : 'bg-neutral-200 text-neutral-800'
                      }`}
                    >
                      {lvl.levelNumber}
                    </span>
                    <span className="font-bold text-sm tracking-tight">{lvl.name}</span>
                  </div>
                  <span className={`text-xs ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                    Level {lvl.levelNumber}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Level Detail Card */}
          <div
            id={`panel-${currentLevel.levelNumber}`}
            role="tabpanel"
            aria-labelledby={`tab-${currentLevel.levelNumber}`}
            className="lg:col-span-7 bg-neutral-50 border-2 border-black/15 p-6 sm:p-8"
          >
            <div className="flex items-center justify-between border-b border-black/10 pb-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E30613]">
                Level {currentLevel.levelNumber} Analysis
              </span>
              <span className="text-xs font-medium text-neutral-500 bg-white px-2 py-0.5 border border-black/10">
                Debated &amp; Overlapping Model
              </span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl text-[#080808] uppercase tracking-tight">
              {currentLevel.name}
            </h3>

            <div className="mt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2">
                Core Material &amp; Civic Elements:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#080808]">
                {currentLevel.needs.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 bg-white p-2 border border-black/10 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#E30613] shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 space-y-3">
              <div className="bg-white p-4 border-l-3 border-[#080808]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  How Governance Failure Restricts Civic Capacity:
                </h4>
                <p className="text-sm text-[#252525] leading-relaxed">
                  {currentLevel.civicImplication}
                </p>
              </div>

              <div className="bg-red-50/50 p-4 border-l-3 border-[#E30613]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#E30613] mb-1">
                  Nuance &amp; Agency Note:
                </h4>
                <p className="text-sm text-[#252525] leading-relaxed">
                  {currentLevel.nuanceNote}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Synthesis Conclusion */}
        <div className="mt-8 pt-6 border-t border-black/10 text-sm text-[#252525] leading-relaxed flex items-start gap-3">
          <Info className="w-5 h-5 text-[#080808] shrink-0 mt-0.5" aria-hidden="true" />
          <p>{MASLOW_EXPLAINER.civicSynthesis}</p>
        </div>
      </div>
    </section>
  );
};

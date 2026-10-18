import React, { useState } from 'react';
import { PageId } from '../types';
import { CORE_PRINCIPLES, OFFICIAL_INSTITUTIONS } from '../data/content';
import { 
  BookOpen, 
  Landmark, 
  ExternalLink, 
  ArrowRight, 
  ShieldCheck, 
  Scale, 
  Vote, 
  HeartHandshake
} from 'lucide-react';

interface DemocracyPageProps {
  onNavigate: (page: PageId) => void;
}

export const DemocracyPage: React.FC<DemocracyPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'principles' | 'directory'>('principles');

  const principleIcons = [Scale, HeartHandshake, Vote, ShieldCheck];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Paced 4-Step Navigation Stepper */}
      <nav aria-label="Guided Civic Learning Steps" className="bg-neutral-50 p-4 border border-black/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <span className="font-bold uppercase tracking-wider text-[#E30613] flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E30613]" />
            <span>Civic Path: Step 3 of 4</span>
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
            <span className="text-[#080808] font-bold bg-white px-2.5 py-1 border border-black/20">
              3. Democracy 101
            </span>
            <span>&rarr;</span>
            <button onClick={() => onNavigate('action')} className="hover:text-[#E30613] cursor-pointer">
              4. Take Action
            </button>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <div className="border-b-4 border-[#080808] pb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-[#E30613] text-white">
            Civic Education
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
            Paced for Beginners
          </span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl text-[#080808] uppercase tracking-tight">
          Democracy 101
        </h1>
        <p className="mt-3 text-base sm:text-lg text-neutral-700 max-w-3xl leading-relaxed">
          Democracy is not just about voting every four years—it is about everyday accountability, protected human dignity, and institutions that serve citizens.
        </p>

        {/* 2 Focused Tabs Only: Core Principles & Official Bodies Directory */}
        <div className="mt-8 flex gap-2 border-b-2 border-black/10 pb-2" role="tablist">
          <button
            onClick={() => setActiveTab('principles')}
            role="tab"
            aria-selected={activeTab === 'principles'}
            className={`tap-target px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider cursor-pointer border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === 'principles'
                ? 'border-[#E30613] bg-[#080808] text-white'
                : 'border-transparent bg-neutral-100 text-[#080808] hover:bg-neutral-200'
            }`}
          >
            <BookOpen className="w-4 h-4 text-[#E30613]" />
            <span>1. Core Principles ({CORE_PRINCIPLES.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('directory')}
            role="tab"
            aria-selected={activeTab === 'directory'}
            className={`tap-target px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider cursor-pointer border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === 'directory'
                ? 'border-[#E30613] bg-[#080808] text-white'
                : 'border-transparent bg-neutral-100 text-[#080808] hover:bg-neutral-200'
            }`}
          >
            <Landmark className="w-4 h-4 text-[#E30613]" />
            <span>2. Official Bodies Directory ({OFFICIAL_INSTITUTIONS.length})</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Core Principles */}
      {activeTab === 'principles' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CORE_PRINCIPLES.map((principle, index) => {
              const Icon = principleIcons[index % principleIcons.length];
              return (
                <div key={principle.id} className="border-2 border-[#080808] p-6 bg-white flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 bg-[#080808] text-white">
                        <Icon className="w-5 h-5 text-[#E30613]" />
                      </div>
                      <span className="text-xs font-mono font-bold text-neutral-400">
                        Principle 0{index + 1}
                      </span>
                    </div>

                    <h2 className="font-display text-xl text-[#080808] uppercase tracking-tight mb-2">
                      {principle.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4">
                      {principle.summary}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-neutral-200">
                      {principle.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-neutral-800">
                          <span className="text-[#E30613] font-bold">&bull;</span>
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-6 bg-neutral-50 border border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase text-[#E30613]">Explore Official Bodies</span>
              <p className="text-sm text-neutral-700 font-medium">
                Want to know where citizen rights are legally rooted?
              </p>
            </div>
            <button
              onClick={() => setActiveTab('directory')}
              className="px-4 py-2.5 bg-[#080808] text-white text-xs font-bold uppercase hover:bg-neutral-800 cursor-pointer flex items-center gap-2"
            >
              <span>View Official Bodies Directory</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E30613]" />
            </button>
          </div>
        </div>
      )}

      {/* Tab 2: Official Bodies Directory */}
      {activeTab === 'directory' && (
        <div className="space-y-6">
          <div className="p-4 bg-neutral-50 border-l-4 border-[#080808] text-xs text-neutral-700 leading-relaxed">
            These are the official constitutional bodies established under Nigerian law to uphold rights, conduct elections, and hold public officials accountable. Knowing their legal remit is the first step in democratic oversight.
          </div>

          <div className="space-y-4">
            {OFFICIAL_INSTITUTIONS.map((inst, index) => (
              <div key={index} className="border-2 border-[#080808] p-6 bg-white">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-black/10 pb-3 mb-3">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#E30613]">{inst.acronym}</span>
                    <h3 className="font-display text-lg sm:text-xl text-[#080808] uppercase tracking-tight">
                      {inst.name}
                    </h3>
                  </div>
                  <a
                    href={inst.officialWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#080808] hover:text-[#E30613] flex items-center gap-1.5 underline w-fit"
                  >
                    <span>Visit Official Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4">
                  {inst.role}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs bg-neutral-50 p-3.5 border border-black/10">
                  <div>
                    <span className="font-bold text-neutral-500 uppercase tracking-wider block text-[10px]">
                      Constitutional Basis:
                    </span>
                    <span className="text-neutral-800 font-mono text-[11px]">{inst.constitutionalBasis}</span>
                  </div>
                  <div>
                    <span className="font-bold text-neutral-500 uppercase tracking-wider block text-[10px]">
                      Citizen Complaint Mechanism:
                    </span>
                    <span className="text-neutral-800">{inst.complaintMechanism}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Step-4 CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-neutral-50 border border-black/10">
        <div>
          <span className="text-xs font-bold uppercase text-[#E30613]">Next Step: Step 4</span>
          <h4 className="text-base font-bold text-[#080808]">Ready to take civic action?</h4>
          <p className="text-xs text-neutral-600">Send a letter to your MP, share #ANYONEBUTAPC, or subscribe to updates.</p>
        </div>
        <button
          onClick={() => onNavigate('action')}
          className="px-5 py-3 bg-[#E30613] text-white text-xs font-bold uppercase tracking-wider hover:bg-red-700 cursor-pointer flex items-center gap-2"
        >
          <span>Go to Step 4: Take Action</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

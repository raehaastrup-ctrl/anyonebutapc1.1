import React from 'react';
import { PageId } from '../types';
import { Mail, Shield, Download, FileText, ArrowRight, CheckCircle2, Lock } from 'lucide-react';

interface ActionHubPageProps {
  onNavigate: (page: PageId) => void;
}

export const ActionHubPage: React.FC<ActionHubPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Paced Stepper Breadcrumb */}
      <nav aria-label="Guided Civic Learning Steps" className="bg-neutral-50 p-4 border border-black/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <span className="font-bold uppercase tracking-wider text-[#E30613] flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E30613]" />
            <span>Civic Path: Step 4 of 5</span>
          </span>
          <div className="flex items-center gap-2 font-medium text-neutral-600 overflow-x-auto pb-1 sm:pb-0">
            <button onClick={() => onNavigate('manifesto')} className="hover:text-[#E30613] cursor-pointer">
              1. The Manifesto
            </button>
            <span>&rarr;</span>
            <button onClick={() => onNavigate('issues')} className="hover:text-[#E30613] cursor-pointer">
              2. The Issues
            </button>
            <span>&rarr;</span>
            <button onClick={() => onNavigate('democracy')} className="hover:text-[#E30613] cursor-pointer">
              3. Democracy 101
            </button>
            <span>&rarr;</span>
            <span className="text-[#080808] font-bold bg-white px-2.5 py-1 border border-black/20">
              4. Take Action
            </span>
            <span>&rarr;</span>
            <button onClick={() => onNavigate('evidence')} className="hover:text-[#E30613] cursor-pointer">
              5. Evidence Library
            </button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="border-b-4 border-[#080808] pb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-[#E30613] text-white">
            Civic Participation
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
            Paced Action Channels
          </span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl text-[#080808] uppercase tracking-tight">
          How You Can Take Peaceful Action Today
        </h1>
        <p className="mt-3 text-base sm:text-lg text-[#252525] leading-relaxed max-w-3xl">
          Democracy works when citizens actively engage institutions. Choose how you want to participate—at your own pace, peacefully, lawfully, and effectively.
        </p>
      </div>

      {/* Action Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Action 1: Download & Share Manifesto */}
        <div className="border-2 border-[#080808] p-6 sm:p-8 bg-white flex flex-col justify-between shadow-xs">
          <div>
            <div className="p-3 bg-[#080808] text-white w-fit mb-4">
              <Download className="w-6 h-6 text-[#E30613]" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#E30613]">Action 01</span>
            <h2 className="font-display text-2xl text-[#080808] uppercase tracking-tight mt-1 mb-2">
              Download &amp; Share the Manifesto
            </h2>
            <p className="text-xs sm:text-sm text-[#252525] leading-relaxed mb-4">
              Equip yourself and your community with our foundational declaration. Available as a high-resolution poster image, printable PDF, and plain text.
            </p>
          </div>
          <button
            onClick={() => onNavigate('manifesto')}
            className="tap-target py-3 bg-[#E30613] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-red-700 cursor-pointer"
          >
            <span>Go to Manifesto Download</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Action 2: Write an Individual Civic Letter */}
        <div className="border-2 border-[#080808] p-6 sm:p-8 bg-white flex flex-col justify-between shadow-xs">
          <div>
            <div className="p-3 bg-[#080808] text-white w-fit mb-4">
              <Mail className="w-6 h-6 text-[#E30613]" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#E30613]">Action 02</span>
            <h2 className="font-display text-2xl text-[#080808] uppercase tracking-tight mt-1 mb-2">
              Write to Your Representative or Media
            </h2>
            <p className="text-xs sm:text-sm text-[#252525] leading-relaxed mb-4">
              Use our 5 factual correspondence templates to write to your UK MP, local newspaper desk, international diplomatic bodies, or INEC.
            </p>
          </div>
          <button
            onClick={() => onNavigate('write')}
            className="tap-target py-3 bg-[#080808] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#252525] cursor-pointer"
          >
            <span>Open Letter Templates</span>
            <ArrowRight className="w-4 h-4 text-[#E30613]" />
          </button>
        </div>

        {/* Action 3: Register for Supporter Updates */}
        <div className="border-2 border-[#080808] p-6 sm:p-8 bg-white flex flex-col justify-between shadow-xs">
          <div>
            <div className="p-3 bg-[#080808] text-white w-fit mb-4">
              <Shield className="w-6 h-6 text-[#E30613]" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#E30613]">Action 03</span>
            <h2 className="font-display text-2xl text-[#080808] uppercase tracking-tight mt-1 mb-2">
              Subscribe to Research Briefings
            </h2>
            <p className="text-xs sm:text-sm text-[#252525] leading-relaxed mb-4">
              Receive verified factual updates on election readiness and civil liberties. Double opt-in, strict privacy by design, and zero spam.
            </p>
          </div>
          <button
            onClick={() => onNavigate('updates')}
            className="tap-target py-3 bg-neutral-100 text-[#080808] border border-black/20 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-neutral-200 cursor-pointer"
          >
            <span>Supporter Sign-Up</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Action 4: Political Party Leadership Desk */}
        <div className="border-2 border-[#080808] p-6 sm:p-8 bg-neutral-50 flex flex-col justify-between shadow-xs">
          <div>
            <div className="p-3 bg-neutral-200 text-[#080808] w-fit mb-4">
              <Lock className="w-6 h-6 text-[#E30613]" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-600">Institutional Channel</span>
            <h2 className="font-display text-2xl text-[#080808] uppercase tracking-tight mt-1 mb-2">
              Political Party Inquiries
            </h2>
            <p className="text-xs sm:text-sm text-[#252525] leading-relaxed mb-4">
              For registered political party officials to share primary documentation through our encrypted, moderated review queue.
            </p>
          </div>
          <button
            onClick={() => onNavigate('party-contact')}
            className="tap-target py-3 bg-white text-[#080808] border border-black/30 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-neutral-100 cursor-pointer"
          >
            <span>Party Leadership Desk</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

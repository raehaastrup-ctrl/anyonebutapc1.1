import React, { useState } from 'react';
import { PageId } from '../types';
import { LAUNCH_CHECKLIST_DATA } from '../data/content';
import { CheckCircle2, Clock, ShieldCheck, AlertCircle, HelpCircle } from 'lucide-react';

interface LaunchChecklistPageProps {
  onNavigate: (page: PageId) => void;
}

export const LaunchChecklistPage: React.FC<LaunchChecklistPageProps> = ({ onNavigate }) => {
  const [checklist, setChecklist] = useState(LAUNCH_CHECKLIST_DATA);

  const toggleItem = (weekIdx: number, itemIdx: number) => {
    const updated = [...checklist];
    updated[weekIdx].items[itemIdx].done = !updated[weekIdx].items[itemIdx].done;
    setChecklist(updated);
  };

  const totalItems = checklist.reduce((acc, curr) => acc + curr.items.length, 0);
  const completedItems = checklist.reduce(
    (acc, curr) => acc + curr.items.filter((i) => i.done).length,
    0
  );
  const progressPercent = Math.round((completedItems / totalItems) * 100);

  const ACCEPTANCE_CRITERIA = [
    {
      num: 1,
      title: 'Approved Logo & Badge Presentation',
      detail: 'Approved circular badge icon (black disk with red outer ring, white A crossed with vivid red brushstroke X, white ANYONE, white BUT, red APC) integrated across all headers, heroes, favicons and footers.',
      status: 'Pass'
    },
    {
      num: 2,
      title: 'No Fake Form Submissions',
      detail: 'Zero placeholder "success" claims without a real backend. Strict disclosure of Cloudflare Worker/CRM endpoint requirement.',
      status: 'Pass'
    },
    {
      num: 3,
      title: 'Verified Evidence Cards',
      detail: 'Every entry cites primary source, time period, status code, assigned editor, and official right of reply. No unsourced allegations.',
      status: 'Pass'
    },
    {
      num: 4,
      title: 'GDPR / NDPR Privacy by Design',
      detail: 'Supporter sign-up requires explicit unticked opt-in, zero party questions, zero storage in browser localStorage, double opt-in explanation.',
      status: 'Pass'
    },
    {
      num: 5,
      title: 'Moderated Party Channel',
      detail: 'Encrypted private review queue notice; out-of-band verification notice; explicit non-endorsement declaration.',
      status: 'Pass'
    },
    {
      num: 6,
      title: 'Editable Civic Correspondence',
      detail: '5 factual templates for individual constituent use with custom placeholders, .txt download, copy, and mailto triggers.',
      status: 'Pass'
    },
    {
      num: 7,
      title: 'Scope Boundaries & Non-Violence',
      detail: 'Clear declarations: no protest organising in Nigeria, no violence, no candidate endorsement, no money collection.',
      status: 'Pass'
    },
    {
      num: 8,
      title: 'Deployment & WCAG Accessibility',
      detail: 'Static edge Cloudflare Pages architecture, WCAG 2.2 AA contrast, 44px tap targets, keyboard navigation, robots.txt, and sitemap.xml.',
      status: 'Pass'
    }
  ];

  const OPEN_PRODUCTION_QUESTIONS = [
    'Confirm the registered non-profit legal entity and designated public contact address.',
    'Select domain and privacy-safe double opt-in email/newsletter provider (e.g. MailerLite, Plunk, or Cloudflare Worker KV).',
    'Designate named personnel acting as Chief Editor, Privacy DPO, and Security Administrator.',
    'Verify official gazetted 2027 election dates directly with INEC counsel before publishing live countdowns.',
    'Review all political and court document explainers with qualified Nigerian and international legal advisers.'
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="border-b-4 border-[#080808] pb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-[#E30613] text-white">
            Operational Audit
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
            Phase One Delivery Plan &amp; Acceptance Criteria
          </span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl text-[#080808] uppercase tracking-tight">
          Phase One Launch Readiness Audit
        </h1>
        <p className="mt-3 text-base sm:text-lg text-[#252525] leading-relaxed">
          Comprehensive verification checklist covering governance, accessibility, legal safeguards, and Cloudflare Pages deployment readiness.
        </p>

        {/* Progress Bar */}
        <div className="mt-6 p-4 bg-neutral-50 border-2 border-[#080808]">
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider mb-2">
            <span>Overall Readiness Score:</span>
            <span className="text-[#E30613]">{completedItems} of {totalItems} items completed ({progressPercent}%)</span>
          </div>
          <div className="w-full bg-neutral-200 h-3 border border-black/10">
            <div
              className="bg-[#E30613] h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* 4-Week Delivery Roadmap Checklist */}
      <div className="space-y-8">
        <h2 className="font-display text-2xl text-[#080808] uppercase tracking-tight border-b-2 border-[#080808] pb-2">
          4-Week Phase One Delivery Plan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {checklist.map((week, wIdx) => (
            <div key={wIdx} className="border-2 border-[#080808] p-6 bg-white shadow-xs">
              <h3 className="font-display text-xl text-[#080808] uppercase tracking-tight mb-4 flex items-center justify-between">
                <span>{week.week}</span>
                <span className="text-xs font-sans font-bold px-2 py-0.5 bg-neutral-100 text-neutral-700">
                  {week.items.filter((i) => i.done).length}/{week.items.length}
                </span>
              </h3>

              <div className="space-y-3">
                {week.items.map((item, iIdx) => (
                  <button
                    key={iIdx}
                    onClick={() => toggleItem(wIdx, iIdx)}
                    className="w-full text-left flex items-start gap-3 p-2 hover:bg-neutral-50 cursor-pointer tap-target"
                  >
                    <input
                      type="checkbox"
                      checked={item.done}
                      onChange={() => {}} // handled by button
                      className="mt-1 h-4 w-4 rounded-none border-gray-400 text-[#E30613] focus:ring-[#E30613] cursor-pointer"
                    />
                    <span className={`text-xs sm:text-sm ${item.done ? 'text-[#080808] font-medium' : 'text-neutral-500'}`}>
                      {item.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Acceptance Criteria Table */}
      <div className="space-y-6">
        <h2 className="font-display text-2xl text-[#080808] uppercase tracking-tight border-b-2 border-[#080808] pb-2">
          Acceptance Criteria Verification (AI Studio Build Prompt)
        </h2>

        <div className="border-2 border-[#080808] bg-white overflow-hidden shadow-xs">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-[#080808] text-white uppercase tracking-wider text-xs">
                <th className="p-3.5 border border-black font-bold">#</th>
                <th className="p-3.5 border border-black font-bold">Requirement</th>
                <th className="p-3.5 border border-black font-bold">Implementation Verification</th>
                <th className="p-3.5 border border-black font-bold text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/15">
              {ACCEPTANCE_CRITERIA.map((crit) => (
                <tr key={crit.num} className="hover:bg-neutral-50">
                  <td className="p-3.5 font-bold font-mono text-[#080808]">{crit.num}</td>
                  <td className="p-3.5 font-bold text-[#080808]">{crit.title}</td>
                  <td className="p-3.5 text-neutral-700 leading-relaxed">{crit.detail}</td>
                  <td className="p-3.5 text-center">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold uppercase bg-emerald-100 text-emerald-900 border border-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                      <span>{crit.status}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 10: Open Questions Before Production */}
      <div className="border-2 border-[#080808] p-6 sm:p-8 bg-[#F4F4F4]">
        <div className="flex items-center gap-2 mb-3">
          <HelpCircle className="w-5 h-5 text-[#E30613]" />
          <h2 className="font-display text-xl sm:text-2xl text-[#080808] uppercase tracking-tight">
            Section 10: Open Questions Before Production Deployment
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#252525] mb-4">
          To transition from AI Studio Build staging to live public Cloudflare Pages hosting, the founding steering group must resolve the following governance and technical checkpoints:
        </p>

        <ul className="space-y-2.5 text-xs sm:text-sm text-[#080808]">
          {OPEN_PRODUCTION_QUESTIONS.map((q, i) => (
            <li key={i} className="flex items-start gap-3 p-3 bg-white border border-black/10">
              <span className="w-5 h-5 bg-[#080808] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span className="font-medium leading-relaxed">{q}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

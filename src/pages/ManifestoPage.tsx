import React, { useState } from 'react';
import { PageId } from '../types';
import { BrandLogo } from '../components/BrandLogo';
import { 
  Download, 
  Printer, 
  Copy, 
  Check, 
  ArrowRight, 
  FileText,
  Shield, 
  Users, 
  Scale, 
  Share2
} from 'lucide-react';
import { SITE_METADATA } from '../data/content';

interface ManifestoPageProps {
  onNavigate: (page: PageId) => void;
}

export const ManifestoPage: React.FC<ManifestoPageProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);

  const manifestoPlainText = `ANYONE BUT APC - OFFICIAL CIVIC MANIFESTO 2026
A FREE, FAIR AND PROSPEROUS NIGERIA

We are Nigerians at home and abroad who believe that Nigeria can and must be better. We reject the mismanagement, impunity and democratic backsliding under the current APC leadership.

We are not aligned to any individual or political party. Our focus is a free and fair election, a return to democratic principles and a Nigeria where people can live with dignity, security and opportunity.

---
OUR 6 CORE PRINCIPLES:
1. DEMOCRACY NOT PERSONAL RULE: The Constitution is supreme. No individual, family, or cabal is above the law.
2. ACCOUNTABILITY NOT IMPUNITY: Leaders must be answerable to the people, and public resources must be accounted for openly.
3. PEOPLE'S WELFARE NOT EMPTY PROMISES: Economic policy must serve human life. Affordable food, clean water, healthcare, and fair living wages are fundamental human rights.
4. SECURITY NOT FEAR: The state must protect citizens from violence, banditry, and unlawful harassment.
5. OPPORTUNITY FOR EVERY NIGERIAN: Youth, entrepreneurs, and workers deserve the infrastructure to thrive without nepotism.
6. A UNITED NIGERIA AT HOME AND ABROAD: Mobilising Nigerians across ethnic, religious, and geographic lines, uniting home and diaspora communities.

---
THE PROBLEM - NIGERIANS DESERVE BETTER:
- DEEPENING POVERTY: Over 60% of Nigerians live below the poverty line, with an unprecedented cost of living crisis and no effective safety nets.
- DEMOCRATIC BACKSLIDING: Growing attempts to silence opposition, obstruct free and fair elections, and marginalise critical voices.
- HUMAN RIGHTS ABUSES: Peaceful protesters and civic commentators are harassed, arrested, and detained without trial.
- LEADERSHIP WITHOUT ACCOUNTABILITY: Undocumented prolonged absences abroad without constitutional handovers, while public inquiries into governance conduct remain unanswered.
- PICK AND CHOOSE GOVERNANCE: Institutions and law enforcement are applied selectively to harass dissent while corruption among elites goes unchecked.

---
OUR PLAN - PRACTICAL ACTION FOR REAL CHANGE:
1. ACTIVATE: Mobilise Nigerians at home and abroad to raise awareness, share factual information, and engage key civic institutions.
2. ENGAGE: Work with all civil society and opposition coalitions to demand international support for free, fair, and credible elections.
3. INFORM: Provide clear, accessible education about Nigeria's democratic rights, the 1999 Constitution, and how citizens hold leaders accountable.
4. AMPLIFY: Help the diaspora contact MPs, media, and international diplomatic bodies to highlight concerns regarding election readiness and civil liberties.
5. PREPARE: Build a strong, informed, and lawful civic coalition so citizens can participate safely and protect every lawful ballot.

---
WHAT WE ARE AND ARE NOT DOING:
WE ARE:
- Nigerians and friends of Nigeria who demand constitutional accountability
- Raising verified factual awareness and educating communities
- Engaging international partners, media, and parliamentary representatives
- Supporting diaspora citizens to contact their local MPs and elected officials
- Promoting strictly peaceful, lawful, and constitutional civic action

WE ARE NOT:
- Calling for or organising protests in Nigeria
- Making any violent threats or tolerating hate speech
- Endorsing any political party or individual candidate
- Promoting ethnic, regional, or religious divisions
- Collecting money or personal data without consent

---
OUR VISION - A NIGERIA WHERE EVERYONE CAN THRIVE:
- BASIC NEEDS FOR ALL: Food, safe housing, clean water, and accessible healthcare.
- QUALITY EDUCATION: Opportunities for every child to reach their potential.
- MEANINGFUL WORK: Jobs, innovation, living wages, and a thriving economy.
- SAFETY AND JUSTICE: Equal rule of law, independent courts, and protection from extortion.
- A UNITED, INCLUSIVE NIGERIA: Where every Nigerian is proud to belong.

"A fair Nigeria is not a dream. It is a choice."

Website: https://anyonebutapc.org
Social: @anyonebutapc (TikTok, Instagram, Facebook, X)
Campaign Hashtag: #ANYONEBUTAPC
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(manifestoPlainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadTxt = () => {
    const blob = new Blob([manifestoPlainText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ANYONE_BUT_APC_CIVIC_MANIFESTO_2026.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Paced 4-Step Navigation Stepper */}
      <nav aria-label="Guided Civic Learning Steps" className="bg-neutral-50 p-4 border border-black/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <span className="font-bold uppercase tracking-wider text-[#E30613] flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E30613]" />
            <span>Civic Path: Step 2 of 4</span>
          </span>
          <div className="flex items-center gap-2 font-medium text-neutral-600 overflow-x-auto pb-1 sm:pb-0">
            <button onClick={() => onNavigate('home')} className="hover:text-[#E30613] cursor-pointer">
              1. Home
            </button>
            <span>&rarr;</span>
            <span className="text-[#080808] font-bold bg-white px-2.5 py-1 border border-black/20">
              2. The Manifesto
            </span>
            <span>&rarr;</span>
            <button onClick={() => onNavigate('democracy')} className="hover:text-[#E30613] cursor-pointer">
              3. Democracy 101
            </button>
            <span>&rarr;</span>
            <button onClick={() => onNavigate('action')} className="hover:text-[#E30613] cursor-pointer">
              4. Take Action
            </button>
          </div>
        </div>
      </nav>

      {/* Page Title & Action Bar */}
      <div className="border-b-4 border-[#080808] pb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-[#E30613] text-white">
            Official Release
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
            Phase One Charter
          </span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl text-[#080808] uppercase tracking-tight">
          The Anyone But APC Manifesto
        </h1>
        <p className="mt-3 text-base sm:text-lg text-neutral-700 leading-relaxed max-w-3xl">
          A blueprint for constitutional accountability, protected civic liberties, and credible elections. Read, download, print, or copy the manifesto below.
        </p>

        {/* Download & Action Toolbar */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            onClick={handleDownloadTxt}
            className="tap-target px-5 py-3 bg-[#E30613] text-white text-xs font-bold uppercase tracking-wider hover:bg-red-700 transition-colors cursor-pointer flex items-center gap-2 shadow-xs"
          >
            <Download className="w-4 h-4" />
            <span>Download Manifesto (.txt)</span>
          </button>
          <button
            onClick={handlePrint}
            className="tap-target px-5 py-3 bg-[#080808] text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors cursor-pointer flex items-center gap-2 shadow-xs"
          >
            <Printer className="w-4 h-4 text-[#E30613]" />
            <span>Print / Save as PDF</span>
          </button>
          <button
            onClick={handleCopy}
            className="tap-target px-4 py-3 bg-neutral-100 hover:bg-neutral-200 text-[#080808] border border-black/20 text-xs font-bold uppercase tracking-wider cursor-pointer flex items-center gap-2"
          >
            {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied to Clipboard' : 'Copy All Text'}</span>
          </button>
          <button
            onClick={() => onNavigate('action')}
            className="tap-target px-4 py-3 bg-white hover:bg-neutral-50 text-[#080808] border border-black/20 text-xs font-bold uppercase tracking-wider cursor-pointer flex items-center gap-2 ml-auto"
          >
            <span>Proceed to Step 3: Democracy 101</span>
            <ArrowRight className="w-4 h-4 text-[#E30613]" />
          </button>
        </div>
      </div>

      {/* Formatted Readable Manifesto Content */}
      <article className="border-2 border-[#080808] bg-white p-6 sm:p-12 shadow-sm space-y-10">
        
        {/* Document Header */}
        <div className="border-b-2 border-black/10 pb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <BrandLogo variant="compact" />
          <div className="text-right text-xs text-neutral-600 space-y-0.5">
            <div className="font-bold uppercase text-[#080808]">Civic Advocacy Working Group</div>
            <div>Phase One Documentation &bull; October 2026</div>
            <div className="font-mono text-[#E30613] font-bold">#ANYONEBUTAPC</div>
          </div>
        </div>

        {/* Preamble */}
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E30613]">Declaration</span>
          <h2 className="font-display text-2xl sm:text-3xl text-[#080808] uppercase tracking-tight">
            A Free, Fair and Prosperous Nigeria
          </h2>
          <p className="text-sm sm:text-base text-neutral-800 leading-relaxed">
            We are Nigerians at home and abroad who believe that Nigeria can and must be better. We reject the economic mismanagement, impunity, and democratic backsliding under the current APC leadership.
          </p>
          <p className="text-sm sm:text-base text-neutral-800 leading-relaxed">
            We are not aligned to any individual or political party. Our focus is a free and fair election, a return to constitutional principles, and a Nigeria where citizens live with dignity, security, and opportunity.
          </p>
        </div>

        {/* Core Principles */}
        <div className="space-y-6 pt-4 border-t border-black/10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E30613]">Foundational Pillars</span>
          <h3 className="font-display text-2xl text-[#080808] uppercase tracking-tight">
            Our 6 Core Principles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-neutral-50 border border-black/10">
              <strong className="block text-sm font-bold text-[#080808] uppercase mb-1">
                1. Democracy, Not Personal Rule
              </strong>
              <p className="text-xs text-neutral-700">
                The Constitution is supreme. No president or ruling cabal may place themselves above institutional checks.
              </p>
            </div>
            <div className="p-4 bg-neutral-50 border border-black/10">
              <strong className="block text-sm font-bold text-[#080808] uppercase mb-1">
                2. Accountability, Not Impunity
              </strong>
              <p className="text-xs text-neutral-700">
                Leaders must answer to the public. Public revenues and foreign debts must be disclosed and audited.
              </p>
            </div>
            <div className="p-4 bg-neutral-50 border border-black/10">
              <strong className="block text-sm font-bold text-[#080808] uppercase mb-1">
                3. People's Welfare, Not Empty Promises
              </strong>
              <p className="text-xs text-neutral-700">
                Economic policy must ensure affordable staple food, clean water, healthcare, and fair living wages.
              </p>
            </div>
            <div className="p-4 bg-neutral-50 border border-black/10">
              <strong className="block text-sm font-bold text-[#080808] uppercase mb-1">
                4. Security, Not Fear
              </strong>
              <p className="text-xs text-neutral-700">
                The state must protect citizens from violence, rural banditry, and unlawful police harassment.
              </p>
            </div>
            <div className="p-4 bg-neutral-50 border border-black/10">
              <strong className="block text-sm font-bold text-[#080808] uppercase mb-1">
                5. Opportunity for Every Nigerian
              </strong>
              <p className="text-xs text-neutral-700">
                Equal access to jobs, enterprise, and educational advancement without partisan or ethnic gatekeeping.
              </p>
            </div>
            <div className="p-4 bg-neutral-50 border border-black/10">
              <strong className="block text-sm font-bold text-[#080808] uppercase mb-1">
                6. A United Nigeria at Home &amp; Abroad
              </strong>
              <p className="text-xs text-neutral-700">
                Uniting citizens across ethnic, religious, and diaspora borders to demand constitutional governance.
              </p>
            </div>
          </div>
        </div>

        {/* The Problem */}
        <div className="space-y-4 pt-4 border-t border-black/10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E30613]">Critical Assessment</span>
          <h3 className="font-display text-2xl text-[#080808] uppercase tracking-tight">
            The Problem: Nigerians Deserve Better
          </h3>
          <ul className="space-y-3 text-xs sm:text-sm text-neutral-800 list-disc list-inside">
            <li><strong>Deepening Poverty:</strong> Over 60% of Nigerians live below the poverty line amid crippling inflation with no adequate social cushions.</li>
            <li><strong>Democratic Backsliding:</strong> Systematic attempts to suppress opposition voices and obstruct transparent voting procedures.</li>
            <li><strong>Human Rights Violations:</strong> Peaceful demonstrators and journalists face teargas, arbitrary detention, and intimidation.</li>
            <li><strong>Leadership Without Oversight:</strong> Extended unexplained presidential absences abroad without constitutional handovers.</li>
            <li><strong>Selective Justice:</strong> The law is weaponised against critics while government allies enjoy full immunity.</li>
          </ul>
        </div>

        {/* Our Plan */}
        <div className="space-y-4 pt-4 border-t border-black/10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E30613]">Strategy</span>
          <h3 className="font-display text-2xl text-[#080808] uppercase tracking-tight">
            Our Plan: Practical Action For Real Change
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 bg-neutral-100 border border-black/10">
              <strong className="text-[#E30613] block mb-1">1. ACTIVATE</strong>
              Mobilise Nigerians at home and abroad to raise awareness and demand institutional transparency.
            </div>
            <div className="p-3.5 bg-neutral-100 border border-black/10">
              <strong className="text-[#E30613] block mb-1">2. ENGAGE</strong>
              Work with civil society and opposition coalitions to secure international election monitoring.
            </div>
            <div className="p-3.5 bg-neutral-100 border border-black/10">
              <strong className="text-[#E30613] block mb-1">3. INFORM</strong>
              Provide clear, accessible constitutional education so citizens understand their rights.
            </div>
            <div className="p-3.5 bg-neutral-100 border border-black/10">
              <strong className="text-[#E30613] block mb-1">4. AMPLIFY</strong>
              Support diaspora constituents in lobbying their UK MPs and foreign representatives.
            </div>
            <div className="p-3.5 bg-neutral-100 border border-black/10">
              <strong className="text-[#E30613] block mb-1">5. PREPARE</strong>
              Build an informed, peaceful, and lawful movement to protect every lawful ballot.
            </div>
          </div>
        </div>

        {/* What We Are / Are Not Doing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-black/10">
          <div className="p-5 bg-green-50/70 border border-green-200">
            <h4 className="font-bold text-green-900 uppercase text-xs tracking-wider mb-2">
              What We Are Doing
            </h4>
            <ul className="text-xs text-green-900 space-y-1.5 list-disc list-inside">
              <li>Raising factual awareness and sharing verified resources</li>
              <li>Engaging international diplomats, MPs, and observers</li>
              <li>Educating citizens on democratic rights under CFRN 1999</li>
              <li>Promoting strictly peaceful, lawful, and constitutional action</li>
            </ul>
          </div>
          <div className="p-5 bg-red-50/70 border border-red-200">
            <h4 className="font-bold text-red-900 uppercase text-xs tracking-wider mb-2">
              What We Are NOT Doing
            </h4>
            <ul className="text-xs text-red-900 space-y-1.5 list-disc list-inside">
              <li>We do NOT organise protests in Nigeria</li>
              <li>We do NOT advocate violence, threats, or hate speech</li>
              <li>We do NOT endorse any political party or candidate</li>
              <li>We do NOT collect money or donations in Phase One</li>
            </ul>
          </div>
        </div>

        {/* Closing Quote */}
        <div className="pt-6 border-t-2 border-black/10 text-center">
          <p className="font-display text-xl sm:text-2xl text-[#080808] uppercase tracking-tight">
            &ldquo;A fair Nigeria is not a dream. It is a choice.&rdquo;
          </p>
          <p className="text-xs text-neutral-500 mt-2 font-mono">
            {SITE_METADATA.campaignHashtag} &bull; Follow @anyonebutapc
          </p>
        </div>

      </article>

      {/* Bottom Navigation CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-neutral-50 border border-black/10">
        <div>
          <span className="text-xs font-bold uppercase text-[#E30613]">Next Step</span>
          <h4 className="text-base font-bold text-[#080808]">Ready to understand constitutional rights?</h4>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('democracy')}
            className="px-5 py-3 bg-[#080808] text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 cursor-pointer flex items-center gap-2"
          >
            <span>Proceed to Democracy 101</span>
            <ArrowRight className="w-4 h-4 text-[#E30613]" />
          </button>
        </div>
      </div>
    </div>
  );
};

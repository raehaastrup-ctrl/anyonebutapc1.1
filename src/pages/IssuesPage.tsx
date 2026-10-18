import React, { useState } from 'react';
import { PageId } from '../types';
import { MaslowExplainer } from '../components/MaslowExplainer';
import { INITIAL_EVIDENCE_ITEMS } from '../data/evidence';
import { StatusBadge } from '../components/StatusBadge';
import { 
  TrendingDown, 
  ShieldAlert, 
  FileCheck, 
  Scale, 
  Vote, 
  Landmark, 
  ExternalLink,
  ChevronDown,
  ChevronUp,
  AlertCircle
} from 'lucide-react';

interface IssuesPageProps {
  onNavigate: (page: PageId) => void;
}

export const IssuesPage: React.FC<IssuesPageProps> = ({ onNavigate }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>('economic');

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Paced Navigation Progress Stepper */}
      <nav aria-label="Guided Civic Learning Steps" className="bg-neutral-50 p-4 border border-black/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <span className="font-bold uppercase tracking-wider text-[#E30613] flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E30613]" />
            <span>Civic Path: Step 2 of 5</span>
          </span>
          <div className="flex items-center gap-2 font-medium text-neutral-600 overflow-x-auto pb-1 sm:pb-0">
            <button onClick={() => onNavigate('manifesto')} className="hover:text-[#E30613] cursor-pointer">
              1. The Manifesto
            </button>
            <span>&rarr;</span>
            <span className="text-[#080808] font-bold bg-white px-2.5 py-1 border border-black/20">
              2. The Issues
            </span>
            <span>&rarr;</span>
            <button onClick={() => onNavigate('democracy')} className="hover:text-[#E30613] cursor-pointer">
              3. Democracy 101
            </button>
            <span>&rarr;</span>
            <button onClick={() => onNavigate('action')} className="hover:text-[#E30613] cursor-pointer">
              4. Take Action
            </button>
            <span>&rarr;</span>
            <button onClick={() => onNavigate('evidence')} className="hover:text-[#E30613] cursor-pointer">
              5. Evidence Library
            </button>
          </div>
        </div>
      </nav>

      {/* Page Title */}
      <div className="border-b-4 border-[#080808] pb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-[#E30613] text-white">
            Public Evidence
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
            Documented Issues &amp; Concerns
          </span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl text-[#080808] uppercase tracking-tight">
          Our Concerns: Evidence-Based Public Inquiries
        </h1>
        <p className="mt-3 text-base sm:text-lg text-[#252525] max-w-3xl leading-relaxed">
          We substantiate every concern with primary citations, constitutional statutes, multilateral economic datasets, and official governmental rights of reply.
        </p>
      </div>

      {/* Section 4: The Basics People Need (Maslow's Hierarchy Component) */}
      <MaslowExplainer />

      {/* Deep-Dive Issue Modules */}
      <div className="space-y-6">
        {/* Issue 1: Economic Hardship */}
        <div className="border-2 border-[#080808] bg-white overflow-hidden shadow-xs">
          <button
            onClick={() => toggleSection('economic')}
            className="w-full p-6 text-left flex items-center justify-between bg-white hover:bg-neutral-50 cursor-pointer tap-target"
            aria-expanded={expandedSection === 'economic'}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#080808] text-white">
                <TrendingDown className="w-6 h-6 text-[#E30613]" aria-hidden="true" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#E30613]">Issue Area 01</span>
                <h2 className="font-display text-xl sm:text-2xl text-[#080808] uppercase tracking-tight">
                  Economic Hardship: Real Wages, Inflation &amp; Poverty
                </h2>
              </div>
            </div>
            {expandedSection === 'economic' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </button>

          {expandedSection === 'economic' && (
            <div className="p-6 sm:p-8 border-t-2 border-black/10 bg-neutral-50 space-y-6">
              <div className="prose max-w-none text-sm text-[#252525] leading-relaxed space-y-4">
                <p>
                  <strong>The Empirical Picture:</strong> According to the World Bank Group&apos;s 2025–2026 Nigeria Macro Poverty Outlook, an estimated <strong>69.6%</strong> of Nigerians live below the lower-middle-income poverty line ($4.20 per day in 2021 PPP terms), while <strong>50.8%</strong> (approximately 123 million citizens) live in extreme poverty ($2.15 per day threshold).
                </p>
                <div className="p-4 bg-white border-l-4 border-[#080808] text-xs leading-relaxed">
                  <strong>Statistical Precision Note:</strong> We avoid sensationalist labels like &ldquo;the world&apos;s poorest country&rdquo; or non-comparable superlatives. Poverty thresholds must be quoted alongside their exact dollar-a-day PPP definitions and measurement years.
                </div>
                <p>
                  <strong>Subsidy Removal &amp; Currency Floating:</strong> The simultaneous elimination of PMS (petrol) fuel subsidies and unpegging of the Naira in mid-2023 caused transportation tariffs to jump by over 120% and propelled food inflation beyond 40% in mid-2024. While nominal minimum wages were adjusted in late 2024, real purchasing power across the 80%+ informal labour force has contracted significantly.
                </p>
                <p>
                  <strong>Migration &amp; Causal Boundaries:</strong> We avoid unverified claims that poverty automatically causes crime or mass emigration. Emigration is driven by complex combinations of professional opportunity, educational ambition, and institutional stability.
                </p>
              </div>

              {/* Verified Citation Box */}
              <div className="p-4 bg-white border border-black/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <StatusBadge status="verified" />
                  <span className="font-bold text-[#080808] ml-2">Source: The World Bank Nigeria Country Overview (2025)</span>
                </div>
                <a
                  href="https://www.worldbank.org/ext/en/country/nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E30613] font-bold hover:underline flex items-center gap-1"
                >
                  <span>Primary Dataset Link</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Issue 2: Civil Liberties */}
        <div className="border-2 border-[#080808] bg-white overflow-hidden shadow-xs">
          <button
            onClick={() => toggleSection('civil')}
            className="w-full p-6 text-left flex items-center justify-between bg-white hover:bg-neutral-50 cursor-pointer tap-target"
            aria-expanded={expandedSection === 'civil'}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#080808] text-white">
                <ShieldAlert className="w-6 h-6 text-[#E30613]" aria-hidden="true" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#E30613]">Issue Area 02</span>
                <h2 className="font-display text-xl sm:text-2xl text-[#080808] uppercase tracking-tight">
                  Civil Liberties: Peaceful Assembly &amp; Protest Policing
                </h2>
              </div>
            </div>
            {expandedSection === 'civil' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </button>

          {expandedSection === 'civil' && (
            <div className="p-6 sm:p-8 border-t-2 border-black/10 bg-neutral-50 space-y-6">
              <div className="prose max-w-none text-sm text-[#252525] leading-relaxed space-y-4">
                <p>
                  <strong>Constitutional Standard:</strong> Section 40 of the 1999 Constitution guarantees every citizen the fundamental right to peaceful assembly and association. This right was affirmed by the Court of Appeal in <em>Inspector-General of Police v. All Nigeria Peoples Party (2007)</em>, which established that citizens do not require police permits to hold peaceful demonstrations.
                </p>
                <p>
                  <strong>Documented Violations:</strong> In its August 2025 investigative briefing, Amnesty International documented at least 21 reported fatalities, over 1,000 arrests, and allegations of live ammunition use by security operatives during the August 2024 nationwide #EndBadGovernance protests.
                </p>
                <div className="p-4 bg-amber-50 border-l-4 border-amber-800 text-xs text-amber-950 leading-relaxed">
                  <strong>Official Right of Reply:</strong> The Nigeria Police Force stated that personnel responded with proportional crowd-control measures against rioting, looting, and unlawful incursions in select metropolitan zones, and denied instructing officers to fire upon unarmed civilians.
                </div>
                <p>
                  <strong>Detention of Minors:</strong> National and international alarm followed the arraignment on treason charges of dozens of protesters, including minors, before a Federal High Court in Abuja in late 2024, culminating in the Attorney-General entering a nolle prosequi to discharge them following public condemnation.
                </p>
              </div>

              <div className="p-4 bg-white border border-black/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <StatusBadge status="verified" />
                  <span className="font-bold text-[#080808] ml-2">Source: Amnesty International Nigeria (1 August 2025)</span>
                </div>
                <a
                  href="https://www.amnesty.org.ng/2025/08/01/nigeria-no-justice-for-victims-of-police-brutality-one-year-after-endbadgovernance-protests/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E30613] font-bold hover:underline flex items-center gap-1"
                >
                  <span>Read Amnesty Report</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Issue 3: Executive Accountability & Presidential Absence */}
        <div className="border-2 border-[#080808] bg-white overflow-hidden shadow-xs">
          <button
            onClick={() => toggleSection('executive')}
            className="w-full p-6 text-left flex items-center justify-between bg-white hover:bg-neutral-50 cursor-pointer tap-target"
            aria-expanded={expandedSection === 'executive'}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#080808] text-white">
                <Scale className="w-6 h-6 text-[#E30613]" aria-hidden="true" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#E30613]">Issue Area 03</span>
                <h2 className="font-display text-xl sm:text-2xl text-[#080808] uppercase tracking-tight">
                  Executive Accountability &amp; Presidential Powers
                </h2>
              </div>
            </div>
            {expandedSection === 'executive' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </button>

          {expandedSection === 'executive' && (
            <div className="p-6 sm:p-8 border-t-2 border-black/10 bg-neutral-50 space-y-6">
              <div className="prose max-w-none text-sm text-[#252525] leading-relaxed space-y-4">
                <p>
                  <strong>Constitutional Mechanics:</strong> Sections 144 and 145 of the 1999 Constitution lay down exact procedures for presidential absence or incapacity. Whenever the President proceeds on vacation or is unable to discharge functions, he must transmit a written declaration to the Senate President and House Speaker, whereupon the Vice-President acts as President.
                </p>
                <div className="p-4 bg-white border-l-4 border-[#080808] text-xs leading-relaxed">
                  <strong>Verification Directive:</strong> We reject baseless medical rumours. Any specific allegation concerning executive absence is published ONLY after verifying official flight manifests, transmission or non-transmission to the National Assembly, and the 21-day statutory window established in the 2010 First Alteration.
                </div>
                <p>
                  <strong>Right of Reply:</strong> The Presidency maintains that short foreign working engagements and private leaves do not trigger Section 145 requirements when modern communications allow continuous executive oversight.
                </p>
              </div>

              <div className="p-4 bg-white border border-black/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <StatusBadge status="verified" />
                  <span className="font-bold text-[#080808] ml-2">Source: 1999 Constitution of Nigeria, Section 145</span>
                </div>
                <a
                  href="https://nigerialaw.today/constitution-1999/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E30613] font-bold hover:underline flex items-center gap-1"
                >
                  <span>Review Constitutional Text</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Issue 4: Historical Court Records (1993 Civil Forfeiture) */}
        <div className="border-2 border-[#080808] bg-white overflow-hidden shadow-xs">
          <button
            onClick={() => toggleSection('court')}
            className="w-full p-6 text-left flex items-center justify-between bg-white hover:bg-neutral-50 cursor-pointer tap-target"
            aria-expanded={expandedSection === 'court'}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#080808] text-white">
                <FileCheck className="w-6 h-6 text-[#E30613]" aria-hidden="true" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#E30613]">Issue Area 04</span>
                <h2 className="font-display text-xl sm:text-2xl text-[#080808] uppercase tracking-tight">
                  Historical Court Records: 1993 US Civil Forfeiture
                </h2>
              </div>
            </div>
            {expandedSection === 'court' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </button>

          {expandedSection === 'court' && (
            <div className="p-6 sm:p-8 border-t-2 border-black/10 bg-neutral-50 space-y-6">
              <div className="prose max-w-none text-sm text-[#252525] leading-relaxed space-y-4">
                <div className="p-4 bg-red-50 border-2 border-[#E30613] text-xs text-[#080808] leading-relaxed">
                  <strong className="block text-[#E30613] font-bold uppercase tracking-wider mb-1">
                    Strict Editorial Directive on Legal Accuracy:
                  </strong>
                  The US court record represents a <strong>civil forfeiture in rem</strong> settlement of bank deposits, <em>not</em> a criminal conviction. Writers, advocates, and citizens must NEVER misstate this record by referring to President Bola Tinubu as a &ldquo;convicted narcotics trafficker&rdquo; or &ldquo;convicted felon&rdquo;. Integrity and factual truth are non-negotiable.
                </div>

                <p>
                  <strong>Case Facts:</strong> In Case No. 93 C 4483 before the US District Court for the Northern District of Illinois, the US Government instituted a verified civil forfeiture action against funds held in Citibank and Heritage Bank accounts associated with Bola Tinubu, asserting probable cause that the funds represented proceeds of narcotics trafficking or money laundering under 21 U.S.C. § 881 and 18 U.S.C. § 981.
                </p>
                <p>
                  <strong>Consent Decree:</strong> On 4 October 1993, Judge John A. Nordberg signed a negotiated final consent decree wherein $460,000 from the Citibank account was forfeited to the US Government, with the remainder released. The decree resolved the civil action without criminal charges, indictment, trial, or admission of guilt.
                </p>
                <p>
                  <strong>Presidential Response:</strong> Legal counsel for President Tinubu have maintained that the funds were legitimate corporate earnings and investment balances, and that the settlement was entered strictly to avoid prohibitive legal expenses in a foreign jurisdiction without any criminal finding whatsoever.
                </p>
              </div>

              <div className="p-4 bg-white border border-black/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <StatusBadge status="verified" />
                  <span className="font-bold text-[#080808] ml-2">US District Court, Northern District of Illinois (Case 93 C 4483)</span>
                </div>
                <a
                  href="https://archive.org/details/tinubu-us-court-order-1993"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E30613] font-bold hover:underline flex items-center gap-1"
                >
                  <span>View Certified Docket Archive</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Issue 5: Electoral Integrity */}
        <div className="border-2 border-[#080808] bg-white overflow-hidden shadow-xs">
          <button
            onClick={() => toggleSection('electoral')}
            className="w-full p-6 text-left flex items-center justify-between bg-white hover:bg-neutral-50 cursor-pointer tap-target"
            aria-expanded={expandedSection === 'electoral'}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#080808] text-white">
                <Vote className="w-6 h-6 text-[#E30613]" aria-hidden="true" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#E30613]">Issue Area 05</span>
                <h2 className="font-display text-xl sm:text-2xl text-[#080808] uppercase tracking-tight">
                  Electoral Integrity: INEC Accreditation &amp; Timetables
                </h2>
              </div>
            </div>
            {expandedSection === 'electoral' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </button>

          {expandedSection === 'electoral' && (
            <div className="p-6 sm:p-8 border-t-2 border-black/10 bg-neutral-50 space-y-6">
              <div className="prose max-w-none text-sm text-[#252525] leading-relaxed space-y-4">
                <p>
                  <strong>The 2027 Election Calendar Caution:</strong> While an online portal calendar of INEC listed 16 January 2027 as the tentative presidential election date, statutory notice under Section 28(1) of the Electoral Act 2022 (which mandates publication not later than 360 days before the poll) has not yet been formally gazetted. We urge all civic actors to seek direct verification from INEC before launching unalterable campaign countdowns.
                </p>
                <p>
                  <strong>Accreditation &amp; Collation Transparency:</strong> Lessons from the 2023 general elections underline the indispensability of the Bimodal Voter Accreditation System (BVAS) and immediate public transmission of polling unit results via the INEC Result Viewing (IReV) portal in strict compliance with the Electoral Act 2022.
                </p>
              </div>

              <div className="p-4 bg-white border border-black/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <StatusBadge status="under review" />
                  <span className="font-bold text-[#080808] ml-2">Source: INEC Nigeria Electoral Calendar Portal</span>
                </div>
                <a
                  href="https://inecnigeria.org/elections/calendar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E30613] font-bold hover:underline flex items-center gap-1"
                >
                  <span>INEC Calendar Link</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Issue 6: Legislative Oversight */}
        <div className="border-2 border-[#080808] bg-white overflow-hidden shadow-xs">
          <button
            onClick={() => toggleSection('legislative')}
            className="w-full p-6 text-left flex items-center justify-between bg-white hover:bg-neutral-50 cursor-pointer tap-target"
            aria-expanded={expandedSection === 'legislative'}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#080808] text-white">
                <Landmark className="w-6 h-6 text-[#E30613]" aria-hidden="true" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#E30613]">Issue Area 06</span>
                <h2 className="font-display text-xl sm:text-2xl text-[#080808] uppercase tracking-tight">
                  Legislative Oversight: Debt, Budgets &amp; Inquiries
                </h2>
              </div>
            </div>
            {expandedSection === 'legislative' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </button>

          {expandedSection === 'legislative' && (
            <div className="p-6 sm:p-8 border-t-2 border-black/10 bg-neutral-50 space-y-6">
              <div className="prose max-w-none text-sm text-[#252525] leading-relaxed space-y-4">
                <p>
                  <strong>Constitutional Duty of the Purse:</strong> Section 80 of the 1999 Constitution mandates that no moneys shall be withdrawn from the Consolidated Revenue Fund of the Federation except in the manner prescribed by the National Assembly.
                </p>
                <p>
                  <strong>Documented Approvals:</strong> Between 2023 and 2025, the 10th National Assembly approved accelerated borrowing plans and multi-trillion Naira supplementary bills with expedited committee hearings. Civic oversight requires scrutinising the specific roll-calls, committee reports, and value-for-money audits rather than making generalized attacks on the legislature as an institution.
                </p>
              </div>

              <div className="p-4 bg-white border border-black/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <StatusBadge status="verified" />
                  <span className="font-bold text-[#080808] ml-2">Source: National Assembly Votes &amp; Proceedings / DMO</span>
                </div>
                <a
                  href="https://nass.gov.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E30613] font-bold hover:underline flex items-center gap-1"
                >
                  <span>National Assembly Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Guided Next Step: Paced Out Navigation */}
      <div className="bg-white border-2 border-[#080808] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#E30613]">Ready for the Next Step?</span>
          <h4 className="font-display text-xl text-[#080808] uppercase tracking-tight mt-1">
            Step 3: Learn How Constitutional Democracy Works
          </h4>
          <p className="text-xs sm:text-sm text-[#252525] mt-1 max-w-xl">
            Bite-sized, jargon-free explainers on separation of powers, judicial independence, freedom of assembly, and a 60-second claim-checking guide.
          </p>
        </div>
        <button
          onClick={() => onNavigate('democracy')}
          className="tap-target px-6 py-3.5 bg-[#080808] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#252525] flex items-center gap-2 whitespace-nowrap cursor-pointer"
        >
          <span>Continue to Democracy 101</span>
          <ExternalLink className="w-4 h-4 text-[#E30613]" />
        </button>
      </div>
    </div>
  );
};

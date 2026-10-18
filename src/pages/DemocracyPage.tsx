import React, { useState } from 'react';
import { PageId } from '../types';
import { DEMOCRACY_EXPLAINERS, OFFICIAL_INSTITUTIONS } from '../data/content';
import { 
  BookOpen, 
  CheckSquare, 
  ExternalLink, 
  Calendar, 
  ShieldCheck, 
  Scale, 
  Search, 
  FileText,
  AlertTriangle,
  HelpCircle,
  Clock,
  ArrowRight
} from 'lucide-react';

interface DemocracyPageProps {
  onNavigate: (page: PageId) => void;
}

export const DemocracyPage: React.FC<DemocracyPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'concepts' | 'verify' | 'directory' | 'glossary'>('concepts');
  const [searchQuery, setSearchQuery] = useState('');

  const GLOSSARY_TERMS = [
    {
      term: 'Bimodal Voter Accreditation System (BVAS)',
      definition: 'An electronic device introduced by INEC that reads the chip on a Permanent Voter Card (PVC) and authenticates the voter via fingerprint or facial recognition before ballots are issued.'
    },
    {
      term: 'INEC Result Viewing Portal (IReV)',
      definition: 'A public digital portal where presiding election officers upload scanned copies of Form EC8A (polling unit election results) directly from the polling station for real-time public access.'
    },
    {
      term: 'Right of Peaceful Assembly (Section 40)',
      definition: 'The fundamental constitutional right of every Nigerian to gather with others and form or belong to any trade union or other association for the protection of their interests. No police permit is required (Court of Appeal, 2007).'
    },
    {
      term: 'Civil Asset Forfeiture in Rem',
      definition: 'A legal proceeding directed against property rather than a person. It is distinct from a criminal conviction and does not establish personal criminal guilt.'
    },
    {
      term: 'Consolidated Revenue Fund (Section 80)',
      definition: 'The primary treasury fund into which all revenues raised or received by the Federation are paid, withdrawals from which require explicit statutory appropriation by the National Assembly.'
    },
    {
      term: 'Notice of Election (Section 28)',
      definition: 'The mandatory statutory public notice issued by INEC not later than 360 days before the day appointed for a general election, stating the date and place of election.'
    }
  ];

  const filteredGlossary = GLOSSARY_TERMS.filter(
    (g) => g.term.toLowerCase().includes(searchQuery.toLowerCase()) || g.definition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Paced Navigation Progress Stepper */}
      <nav aria-label="Guided Civic Learning Steps" className="bg-neutral-50 p-4 border border-black/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <span className="font-bold uppercase tracking-wider text-[#E30613] flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E30613]" />
            <span>Civic Path: Step 3 of 5</span>
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
            <span className="text-[#080808] font-bold bg-white px-2.5 py-1 border border-black/20">
              3. Democracy 101
            </span>
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

      {/* Page Header */}
      <div className="border-b-4 border-[#080808] pb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-[#E30613] text-white">
            Civic Education
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
            Democracy Explained
          </span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl text-[#080808] uppercase tracking-tight">
          Democracy Education Centre
        </h1>
        <p className="mt-3 text-base sm:text-lg text-[#252525] max-w-3xl leading-relaxed">
          Elections are necessary, but not sufficient. Explore how constitutional checks, judicial independence, freedom of assembly, and rigorous verification protect democratic society.
        </p>

        {/* Tab Selector */}
        <div className="mt-8 flex flex-wrap gap-2 border-b-2 border-black/10 pb-2" role="tablist">
          <button
            onClick={() => setActiveTab('concepts')}
            role="tab"
            aria-selected={activeTab === 'concepts'}
            className={`tap-target px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider cursor-pointer border-b-2 ${
              activeTab === 'concepts'
                ? 'border-[#E30613] bg-[#080808] text-white'
                : 'border-transparent bg-neutral-100 text-[#080808] hover:bg-neutral-200'
            }`}
          >
            Core Principles
          </button>
          <button
            onClick={() => setActiveTab('verify')}
            role="tab"
            aria-selected={activeTab === 'verify'}
            className={`tap-target px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider cursor-pointer border-b-2 ${
              activeTab === 'verify'
                ? 'border-[#E30613] bg-[#080808] text-white'
                : 'border-transparent bg-neutral-100 text-[#080808] hover:bg-neutral-200'
            }`}
          >
            60-Second Claim Checker
          </button>
          <button
            onClick={() => setActiveTab('directory')}
            role="tab"
            aria-selected={activeTab === 'directory'}
            className={`tap-target px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider cursor-pointer border-b-2 ${
              activeTab === 'directory'
                ? 'border-[#E30613] bg-[#080808] text-white'
                : 'border-transparent bg-neutral-100 text-[#080808] hover:bg-neutral-200'
            }`}
          >
            Official Bodies Directory
          </button>
          <button
            onClick={() => setActiveTab('glossary')}
            role="tab"
            aria-selected={activeTab === 'glossary'}
            className={`tap-target px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider cursor-pointer border-b-2 ${
              activeTab === 'glossary'
                ? 'border-[#E30613] bg-[#080808] text-white'
                : 'border-transparent bg-neutral-100 text-[#080808] hover:bg-neutral-200'
            }`}
          >
            Constitutional Glossary
          </button>
        </div>
      </div>

      {/* Tab 1: Core Principles */}
      {activeTab === 'concepts' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DEMOCRACY_EXPLAINERS.map((item) => (
              <div
                key={item.id}
                className="bg-white border-2 border-[#080808] p-6 sm:p-7 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2.5 h-2.5 bg-[#E30613]" aria-hidden="true" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#080808]">Explainer</span>
                  </div>
                  <h3 className="font-display text-xl text-[#080808] uppercase tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#252525] leading-relaxed mb-4 font-medium">
                    {item.summary}
                  </p>
                  <ul className="space-y-2 text-xs text-neutral-700 border-t border-black/10 pt-3">
                    {item.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckSquare className="w-3.5 h-3.5 text-[#E30613] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Legal Rights vs Practical Obstacles Table */}
          <div className="border-2 border-[#080808] p-6 sm:p-8 bg-neutral-50">
            <h2 className="font-display text-2xl text-[#080808] uppercase tracking-tight mb-2">
              Separating Legal Rights from Practical Obstacles
            </h2>
            <p className="text-xs sm:text-sm text-[#252525] mb-6">
              A foundational principle of civic education is distinguishing between what the law guarantees and what citizens encounter in practice.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-[#080808] text-white uppercase tracking-wider text-xs">
                    <th className="p-3 font-bold border border-black">Constitutional Right</th>
                    <th className="p-3 font-bold border border-black">Statutory Provision</th>
                    <th className="p-3 font-bold border border-black">Practical Obstacle Encountered</th>
                    <th className="p-3 font-bold border border-black">Civic Remedy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/15 bg-white">
                  <tr>
                    <td className="p-3 font-bold">Peaceful Assembly</td>
                    <td className="p-3">Section 40 (CFRN 1999); IGP v. ANPP (2007)</td>
                    <td className="p-3 text-red-950 bg-red-50/50">Unlawful police tear gas, pre-emptive venue locks, cybercrime charges</td>
                    <td className="p-3">Legal defense via NHRC, documented livestreaming, bail coalitions</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Voter Accreditation</td>
                    <td className="p-3">Section 47, Electoral Act 2022 (Mandatory BVAS)</td>
                    <td className="p-3 text-red-950 bg-red-50/50">Delayed deployment of election officers, manual bypass attempts</td>
                    <td className="p-3">Accredited party agents insisting on zero manual voting without BVAS</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Public Result Viewing</td>
                    <td className="p-3">Section 60(5), Electoral Act 2022 (IReV upload)</td>
                    <td className="p-3 text-red-950 bg-red-50/50">Collation center access refusal, transmission server slowdowns</td>
                    <td className="p-3">Parallel citizen vote collation via physical Form EC8A duplicate sheets</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Freedom of Information</td>
                    <td className="p-3">Freedom of Information Act 2011 (7-day response)</td>
                    <td className="p-3 text-red-950 bg-red-50/50">MDAs claiming &ldquo;official secrets&rdquo; or outright non-response</td>
                    <td className="p-3">Judicial mandamus applications via Federal High Court public interest litigation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: 60-Second Claim Checker */}
      {activeTab === 'verify' && (
        <div className="bg-white border-2 border-[#080808] p-6 sm:p-10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#E30613] text-white">
              <Search className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">Fact-Checking Guide</span>
              <h2 className="font-display text-2xl sm:text-3xl text-[#080808] uppercase tracking-tight">
                How to Check a Political Claim in 60 Seconds
              </h2>
            </div>
          </div>

          <p className="text-sm text-[#252525] leading-relaxed">
            Disinformation thrives during politically charged periods. Before forwarding a WhatsApp broadcast, viral tweet, or video clip, apply this 5-step checklist:
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-neutral-50 border-l-4 border-[#080808] flex items-start gap-4">
              <span className="w-7 h-7 bg-[#080808] text-white flex items-center justify-center font-bold text-sm shrink-0">1</span>
              <div>
                <strong className="block text-[#080808] uppercase font-bold text-sm">Find the Primary Document</strong>
                <p className="text-xs sm:text-sm text-[#252525] mt-1">
                  Did the claim cite a certified court judgment, official gazette, or multilateral dataset? If it quotes &ldquo;anonymous presidency sources&rdquo; or an unverified blog without a document link, treat it as unverified.
                </p>
              </div>
            </div>

            <div className="p-4 bg-neutral-50 border-l-4 border-[#080808] flex items-start gap-4">
              <span className="w-7 h-7 bg-[#080808] text-white flex items-center justify-center font-bold text-sm shrink-0">2</span>
              <div>
                <strong className="block text-[#080808] uppercase font-bold text-sm">Check the Real Date &amp; Jurisdiction</strong>
                <p className="text-xs sm:text-sm text-[#252525] mt-1">
                  Is an old video from the 2015 elections or an old strike being recycled as breaking news in 2026? Run a reverse image search on video keyframes or check original upload timestamps.
                </p>
              </div>
            </div>

            <div className="p-4 bg-neutral-50 border-l-4 border-[#080808] flex items-start gap-4">
              <span className="w-7 h-7 bg-[#080808] text-white flex items-center justify-center font-bold text-sm shrink-0">3</span>
              <div>
                <strong className="block text-[#080808] uppercase font-bold text-sm">Separate Civil Lawsuits from Criminal Convictions</strong>
                <p className="text-xs sm:text-sm text-[#252525] mt-1">
                  Legal precision is critical. Civil forfeiture in rem, interim asset freezes, and political tribunals are legally distinct from criminal convictions. Misstating legal status undermines credible advocacy.
                </p>
              </div>
            </div>

            <div className="p-4 bg-neutral-50 border-l-4 border-[#080808] flex items-start gap-4">
              <span className="w-7 h-7 bg-[#080808] text-white flex items-center justify-center font-bold text-sm shrink-0">4</span>
              <div>
                <strong className="block text-[#080808] uppercase font-bold text-sm">Verify the Right of Reply</strong>
                <p className="text-xs sm:text-sm text-[#252525] mt-1">
                  Did the reporting agency seek comment from the accused person, institution, or party? Credible reporting always logs the response, explanation, or denial.
                </p>
              </div>
            </div>

            <div className="p-4 bg-neutral-50 border-l-4 border-[#080808] flex items-start gap-4">
              <span className="w-7 h-7 bg-[#080808] text-white flex items-center justify-center font-bold text-sm shrink-0">5</span>
              <div>
                <strong className="block text-[#080808] uppercase font-bold text-sm">Question Confirmation Bias</strong>
                <p className="text-xs sm:text-sm text-[#252525] mt-1">
                  If a claim aligns completely with your political hopes or fears, scrutinize it twice as rigorously. Truth, not sensationalism, builds lasting constitutional change.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between">
            <span className="text-xs text-neutral-500">Need to check a claim published in our archives?</span>
            <button
              onClick={() => onNavigate('evidence')}
              className="px-4 py-2 bg-[#080808] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#252525] cursor-pointer"
            >
              Search Evidence Library
            </button>
          </div>
        </div>
      )}

      {/* Tab 3: Official Bodies Directory */}
      {activeTab === 'directory' && (
        <div className="space-y-6">
          <div className="p-4 bg-neutral-100 border-l-4 border-[#E30613] text-xs sm:text-sm text-[#252525]">
            <strong>Directory Standard:</strong> All official Nigerian democratic institutions listed below are verified with their statutory foundation, official citizen contact mechanisms, and date last checked by our editorial desk.
          </div>

          <div className="space-y-4">
            {OFFICIAL_INSTITUTIONS.map((inst, idx) => (
              <div key={idx} className="border-2 border-[#080808] p-6 bg-white shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-black/10 pb-3 mb-4">
                  <div>
                    <span className="text-xs font-bold text-[#E30613] tracking-widest uppercase">{inst.acronym}</span>
                    <h3 className="font-display text-xl text-[#080808] uppercase tracking-tight">
                      {inst.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Verified: {inst.lastVerifiedDate}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm mb-4">
                  <div>
                    <strong className="block text-[#080808] uppercase font-bold text-xs mb-1">Constitutional Role:</strong>
                    <p className="text-neutral-700">{inst.role}</p>
                  </div>
                  <div>
                    <strong className="block text-[#080808] uppercase font-bold text-xs mb-1">Citizen Redress Channel:</strong>
                    <p className="text-neutral-700">{inst.complaintMechanism}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-black/10 flex items-center justify-between text-xs">
                  <span className="text-neutral-500 font-mono">Statutory Basis: {inst.constitutionalBasis}</span>
                  <a
                    href={inst.officialWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#E30613] hover:underline flex items-center gap-1"
                  >
                    <span>Visit Official Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Constitutional Glossary */}
      {activeTab === 'glossary' && (
        <div className="space-y-6">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-3 text-neutral-400" />
            <input
              type="text"
              placeholder="Search constitutional terms, statutes, and electoral definitions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-[#080808] text-sm focus:outline-none focus:border-[#E30613]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredGlossary.map((item, idx) => (
              <div key={idx} className="p-5 bg-white border border-black/20 shadow-xs">
                <h3 className="font-display text-base text-[#080808] uppercase tracking-tight mb-2">
                  {item.term}
                </h3>
                <p className="text-xs sm:text-sm text-[#252525] leading-relaxed">
                  {item.definition}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Guided Next Step: Paced Out Navigation */}
      <div className="bg-white border-2 border-[#080808] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#E30613]">Ready for the Next Step?</span>
          <h4 className="font-display text-xl text-[#080808] uppercase tracking-tight mt-1">
            Step 4: Take Peaceful Action
          </h4>
          <p className="text-xs sm:text-sm text-[#252525] mt-1 max-w-xl">
            Now that you know your rights, use our 5 factual letter templates to write to your representative, or subscribe to verified research briefings.
          </p>
        </div>
        <button
          onClick={() => onNavigate('action')}
          className="tap-target px-6 py-3.5 bg-[#E30613] text-white text-xs font-bold uppercase tracking-wider hover:bg-red-700 flex items-center gap-2 whitespace-nowrap cursor-pointer shadow-xs"
        >
          <span>Continue to Take Action</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

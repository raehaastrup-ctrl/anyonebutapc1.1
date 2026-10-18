import React, { useState } from 'react';
import { PageId, EvidenceCitation, EvidenceStatus } from '../types';
import { INITIAL_EVIDENCE_ITEMS, CORRECTION_LOG_ENTRIES } from '../data/evidence';
import { StatusBadge } from '../components/StatusBadge';
import { CorrectionModal } from '../components/CorrectionModal';
import { 
  Search, 
  Filter, 
  ExternalLink, 
  RotateCcw, 
  FileText, 
  ShieldAlert, 
  Calendar, 
  UserCheck, 
  ChevronRight,
  BookOpen,
  Info
} from 'lucide-react';

interface EvidencePageProps {
  onNavigate: (page: PageId) => void;
}

export const EvidencePage: React.FC<EvidencePageProps> = ({ onNavigate }) => {
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'evidence' | 'corrections'>('evidence');
  const [correctionModalOpen, setCorrectionModalOpen] = useState(false);
  const [activeCitationForCorrection, setActiveCitationForCorrection] = useState<EvidenceCitation | null>(null);
  const [expandedItemId, setExpandedItemId] = useState<string | null>(null);

  // Filtering
  const filteredEvidence = INITIAL_EVIDENCE_ITEMS.filter((item) => {
    const matchesTopic = selectedTopic === 'all' || item.topic === selectedTopic;
    const matchesStatus = selectedStatus === 'all' || item.evidenceStatus === selectedStatus;
    const matchesSearch = 
      item.claimTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sourceName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTopic && matchesStatus && matchesSearch;
  });

  const handleOpenCorrection = (item?: EvidenceCitation) => {
    setActiveCitationForCorrection(item || null);
    setCorrectionModalOpen(true);
  };

  const toggleExpand = (id: string) => {
    setExpandedItemId(expandedItemId === id ? null : id);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Paced Navigation Progress Stepper */}
      <nav aria-label="Guided Civic Learning Steps" className="bg-neutral-50 p-4 border border-black/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <span className="font-bold uppercase tracking-wider text-[#E30613] flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E30613]" />
            <span>Civic Path: Step 5 of 5</span>
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
            <button onClick={() => onNavigate('action')} className="hover:text-[#E30613] cursor-pointer">
              4. Take Action
            </button>
            <span>&rarr;</span>
            <span className="text-[#080808] font-bold bg-white px-2.5 py-1 border border-black/20">
              5. Evidence Library
            </span>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <div className="border-b-4 border-[#080808] pb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-[#E30613] text-white">
            Primary Documentation
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
            Open Civic Archive
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl sm:text-5xl text-[#080808] uppercase tracking-tight">
              Verified Evidence Library
            </h1>
            <p className="mt-3 text-base sm:text-lg text-[#252525] max-w-2xl leading-relaxed">
              Every entry is indexed with primary source links, status codes, official right-of-reply notes, and assigned editorial reviewers.
            </p>
          </div>
          <button
            onClick={() => handleOpenCorrection()}
            className="tap-target px-5 py-3 bg-[#080808] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#252525] flex items-center gap-2 cursor-pointer w-fit"
          >
            <RotateCcw className="w-4 h-4 text-[#E30613]" />
            <span>Submit Correction / Oversight</span>
          </button>
        </div>

        {/* Tab Toggle: Evidence Cards vs Public Correction Log */}
        <div className="mt-8 flex gap-2 border-b border-black/10 pb-2">
          <button
            onClick={() => setActiveTab('evidence')}
            className={`tap-target px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider cursor-pointer border-b-2 ${
              activeTab === 'evidence'
                ? 'border-[#E30613] bg-[#080808] text-white'
                : 'border-transparent bg-neutral-100 text-[#080808] hover:bg-neutral-200'
            }`}
          >
            Verified Records ({INITIAL_EVIDENCE_ITEMS.length})
          </button>
          <button
            onClick={() => setActiveTab('corrections')}
            className={`tap-target px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider cursor-pointer border-b-2 ${
              activeTab === 'corrections'
                ? 'border-[#E30613] bg-[#080808] text-white'
                : 'border-transparent bg-neutral-100 text-[#080808] hover:bg-neutral-200'
            }`}
          >
            Public Correction Log ({CORRECTION_LOG_ENTRIES.length})
          </button>
        </div>
      </div>

      {activeTab === 'evidence' ? (
        <div className="space-y-6">
          {/* Search & Topic Filters */}
          <div className="bg-neutral-50 p-4 sm:p-6 border-2 border-black/10 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3 top-3.5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search claims, court dockets, World Bank figures, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 text-sm border-2 border-black/20 bg-white focus:outline-none focus:border-[#E30613]"
                />
              </div>

              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-neutral-500 shrink-0" />
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="p-2.5 text-xs font-bold uppercase tracking-wider border-2 border-black/20 bg-white focus:outline-none focus:border-[#E30613] tap-target"
                  aria-label="Filter by Status"
                >
                  <option value="all">All Verification Statuses</option>
                  <option value="verified">Verified Records</option>
                  <option value="disputed">Disputed Claims</option>
                  <option value="allegation">Documented Allegations</option>
                  <option value="under review">Under Review</option>
                  <option value="corrected">Corrected</option>
                </select>
              </div>
            </div>

            {/* Topic Filter Chips */}
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-black/10">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 self-center mr-2">
                Topic:
              </span>
              {[
                { id: 'all', label: 'All Topics' },
                { id: 'economic-hardship', label: 'Economic Hardship' },
                { id: 'civil-liberties', label: 'Civil Liberties' },
                { id: 'executive-accountability', label: 'Executive Accountability' },
                { id: 'historical-records', label: 'Court Records (1993)' },
                { id: 'electoral-integrity', label: 'Electoral Integrity' },
                { id: 'legislative-oversight', label: 'Legislative Oversight' }
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedTopic(t.id)}
                  className={`px-3 py-1 text-xs font-bold tracking-tight uppercase cursor-pointer border ${
                    selectedTopic === t.id
                      ? 'bg-[#080808] text-white border-[#080808]'
                      : 'bg-white text-neutral-700 border-neutral-300 hover:border-black'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Evidence Cards List */}
          {filteredEvidence.length === 0 ? (
            <div className="p-12 text-center bg-white border-2 border-dashed border-neutral-300">
              <p className="font-display text-xl text-[#080808] uppercase">No Matching Evidence Entries Found</p>
              <p className="text-sm text-neutral-500 mt-2">Try adjusting your search criteria or topic filters.</p>
              <button
                onClick={() => { setSelectedTopic('all'); setSelectedStatus('all'); setSearchQuery(''); }}
                className="mt-4 px-4 py-2 bg-[#080808] text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredEvidence.map((item) => {
                const isExpanded = expandedItemId === item.id;
                return (
                  <article
                    key={item.id}
                    className="bg-white border-2 border-[#080808] p-6 sm:p-8 shadow-xs hover:border-[#E30613] transition-colors"
                  >
                    {/* Top Row: Badges, Topic, Dates */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/10 pb-3 mb-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <StatusBadge status={item.evidenceStatus} />
                        <span className="text-xs font-bold uppercase tracking-wider text-neutral-600 bg-neutral-100 px-2 py-0.5 border border-black/5">
                          {item.sourceType}
                        </span>
                        <span className="text-xs font-mono text-neutral-500">ID: {item.id}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-neutral-500">
                        <span>Period: <strong>{item.timePeriod}</strong></span>
                        <span>•</span>
                        <span>Reviewed: <strong>{item.lastReviewedDate}</strong></span>
                      </div>
                    </div>

                    {/* Claim Title */}
                    <h2 className="font-display text-xl sm:text-2xl text-[#080808] uppercase tracking-tight mb-3">
                      {item.claimTitle}
                    </h2>

                    {/* Summary */}
                    <p className="text-sm sm:text-base text-[#252525] leading-relaxed mb-4">
                      {item.summary}
                    </p>

                    {/* Legal or Editorial Warning / Guardrail */}
                    {item.legalNotes && (
                      <div className="p-3 bg-neutral-50 border-l-3 border-[#E30613] text-xs text-[#080808] leading-relaxed mb-4">
                        <strong className="block text-[#E30613] font-bold uppercase tracking-wider">
                          Editorial Guardrail:
                        </strong>
                        {item.legalNotes}
                      </div>
                    )}

                    {/* Counter Position / Official Response */}
                    <div className="p-3.5 bg-neutral-100 border border-black/10 text-xs text-[#252525] leading-relaxed mb-4">
                      <strong className="block text-[#080808] font-bold uppercase tracking-wider mb-1">
                        Official Right of Reply / Counter-Position:
                      </strong>
                      <p>{item.counterPositionOrRebuttal}</p>
                    </div>

                    {/* Expanded Detailed Analysis */}
                    {isExpanded && item.fullAnalysis && (
                      <div className="mt-4 pt-4 border-t border-black/10 space-y-2 text-xs sm:text-sm text-[#252525] bg-neutral-50/50 p-4">
                        <h4 className="font-bold text-xs uppercase tracking-wider text-[#080808]">
                          Comprehensive Research Breakdown:
                        </h4>
                        <ul className="space-y-1.5 list-disc list-inside">
                          {item.fullAnalysis.map((analysis, idx) => (
                            <li key={idx} className="leading-relaxed">{analysis}</li>
                          ))}
                        </ul>
                        <div className="mt-3 pt-3 border-t border-black/10 text-xs text-neutral-500">
                          Status Rationale: {item.statusRationale}
                        </div>
                      </div>
                    )}

                    {/* Metadata Footer & Direct Links */}
                    <div className="mt-4 pt-4 border-t border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2 text-neutral-600">
                        <UserCheck className="w-4 h-4 text-[#080808]" />
                        <span>Assigned Desk: <strong>{item.editorialReviewer}</strong></span>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        {item.fullAnalysis && (
                          <button
                            onClick={() => toggleExpand(item.id)}
                            className="font-bold text-[#080808] hover:underline cursor-pointer"
                          >
                            {isExpanded ? 'Collapse Analysis' : 'Expand Research Analysis'}
                          </button>
                        )}
                        <a
                          href={item.directLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-[#E30613] hover:underline flex items-center gap-1"
                        >
                          <span>Primary Source</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        <button
                          onClick={() => handleOpenCorrection(item)}
                          className="font-bold text-neutral-600 hover:text-black hover:underline cursor-pointer"
                        >
                          Request Review
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        /* Public Correction Log Tab */
        <div className="space-y-6">
          <div className="p-4 bg-white border-2 border-[#080808] text-xs sm:text-sm text-[#252525] leading-relaxed">
            <strong className="block text-[#080808] uppercase font-bold text-sm mb-1">
              Public Auditability &amp; Retraction Protocol
            </strong>
            In accordance with our editorial policy, any substantive modification to a statistical figure, timeline, attribution, or legal categorization is logged in this public record. We never quietly delete or overwrite factual inaccuracies.
          </div>

          <div className="space-y-4">
            {CORRECTION_LOG_ENTRIES.map((entry) => (
              <div key={entry.id} className="bg-white border-2 border-black/20 p-6 shadow-xs">
                <div className="flex items-center justify-between border-b border-black/10 pb-2 mb-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-red-100 text-[#E30613] font-bold uppercase tracking-wider">
                      Correction Logged
                    </span>
                    <span className="font-mono text-neutral-500 font-semibold">{entry.id}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-neutral-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Logged on: {entry.entryDate}</span>
                  </div>
                </div>

                <h3 className="font-display text-lg text-[#080808] uppercase tracking-tight mb-2">
                  {entry.title}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
                  <div className="p-3 bg-red-50/70 border border-red-200">
                    <strong className="block text-red-900 uppercase font-bold mb-1">Original Phrasing:</strong>
                    <p className="text-red-950 font-serif italic">&ldquo;{entry.originalText}&rdquo;</p>
                  </div>
                  <div className="p-3 bg-emerald-50/70 border border-emerald-200">
                    <strong className="block text-emerald-900 uppercase font-bold mb-1">Amended Factual Text:</strong>
                    <p className="text-emerald-950 font-medium">{entry.correctedText}</p>
                  </div>
                </div>

                <div className="text-xs text-neutral-700 bg-neutral-50 p-2.5 border border-black/5 mt-2">
                  <strong>Reason for Revision:</strong> {entry.reasonForCorrection}
                </div>

                <div className="mt-3 pt-2 border-t border-black/5 text-[11px] text-neutral-500 flex justify-between">
                  <span>Authorised Reviewer: {entry.reviewedBy}</span>
                  {entry.evidenceId && <span>Referenced Evidence ID: {entry.evidenceId}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Correction Modal */}
      <CorrectionModal
        isOpen={correctionModalOpen}
        onClose={() => setCorrectionModalOpen(false)}
        evidenceId={activeCitationForCorrection?.id}
        claimTitle={activeCitationForCorrection?.claimTitle}
      />
    </div>
  );
};

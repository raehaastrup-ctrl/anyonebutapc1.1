import React, { useState } from 'react';
import { X, Send, ShieldAlert, CheckCircle, FileText } from 'lucide-react';

interface CorrectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  evidenceId?: string;
  claimTitle?: string;
}

export const CorrectionModal: React.FC<CorrectionModalProps> = ({
  isOpen,
  onClose,
  evidenceId,
  claimTitle,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    targetEntry: claimTitle || (evidenceId ? `Entry #${evidenceId}` : 'General Evidence Archive'),
    sourceUrl: '',
    explanation: '',
    documentType: 'Official Court Document',
    confirmationCheck: false
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate editorial queue processing (no client data leaks)
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative bg-white w-full max-w-2xl border-4 border-[#080808] p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 tap-target p-2 text-neutral-600 hover:text-[#080808] cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 id="modal-title" className="font-display text-2xl text-[#080808] uppercase">
              Submission Queued for Editorial Review
            </h3>
            <p className="text-sm text-[#252525] max-w-lg mx-auto leading-relaxed">
              Thank you for submitting factual oversight. In accordance with our public editorial standards, our research desk validates every claim against primary sources before updating public records.
            </p>
            <div className="bg-neutral-50 p-4 border border-black/10 text-xs text-neutral-600 max-w-md mx-auto text-left">
              <strong>Editorial SLA:</strong> Review of primary court documents, multilateral datasets, and statutory records is typically concluded within 5 business days. Any resulting revision will appear on the public Correction Log.
            </div>
            <button
              onClick={handleReset}
              className="mt-6 px-6 py-2.5 bg-[#080808] text-white font-bold uppercase tracking-wider text-xs cursor-pointer hover:bg-[#252525]"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 bg-[#E30613] text-white text-[10px] font-bold uppercase tracking-wider">
                Editorial Integrity
              </span>
              <span className="text-xs text-neutral-500 font-bold uppercase">
                Right of Reply &amp; Factual Oversight
              </span>
            </div>

            <h3 id="modal-title" className="font-display text-2xl sm:text-3xl text-[#080808] uppercase tracking-tight">
              Submit Factual Correction or Citation
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-[#252525]">
              We correct verifiable inaccuracies promptly. Please supply primary documentation links (e.g. court filings, official gazettes, or accredited datasets).
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#080808] mb-1">
                  Target Entry / Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.targetEntry}
                  onChange={(e) => setFormData({ ...formData, targetEntry: e.target.value })}
                  className="w-full p-2.5 border-2 border-black/30 focus:border-[#E30613] focus:outline-none text-sm font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#080808] mb-1">
                    Your Name (or Affiliation)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. A. Adebayo / Legal Practitioner"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-2.5 border-2 border-black/30 focus:border-[#E30613] focus:outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#080808] mb-1">
                    Your Email (for Verification)
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="verifier@organisation.org"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-2.5 border-2 border-black/30 focus:border-[#E30613] focus:outline-none text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#080808] mb-1">
                    Primary Document Category
                  </label>
                  <select
                    value={formData.documentType}
                    onChange={(e) => setFormData({ ...formData, documentType: e.target.value })}
                    className="w-full p-2.5 border-2 border-black/30 focus:border-[#E30613] focus:outline-none text-sm bg-white"
                  >
                    <option value="Official Court Document">Official Court Document</option>
                    <option value="Government Gazette or Statutory Act">Government Gazette or Statutory Act</option>
                    <option value="Multilateral Economic Dataset">Multilateral Economic Dataset</option>
                    <option value="Accredited Observer Report">Accredited Observer Report</option>
                    <option value="Right of Reply Official Statement">Right of Reply Official Statement</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#080808] mb-1">
                    Link to Primary Source Document
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://..."
                    value={formData.sourceUrl}
                    onChange={(e) => setFormData({ ...formData, sourceUrl: e.target.value })}
                    className="w-full p-2.5 border-2 border-black/30 focus:border-[#E30613] focus:outline-none text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#080808] mb-1">
                  Specific Error &amp; Proposed Factual Text
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Detail the exact sentence or statistic that requires amendment, citing the page and paragraph of the primary source provided..."
                  value={formData.explanation}
                  onChange={(e) => setFormData({ ...formData, explanation: e.target.value })}
                  className="w-full p-2.5 border-2 border-black/30 focus:border-[#E30613] focus:outline-none text-sm"
                />
              </div>

              <div className="p-3 bg-neutral-50 border border-black/10 flex items-start gap-3">
                <input
                  type="checkbox"
                  id="confirm-primary"
                  required
                  checked={formData.confirmationCheck}
                  onChange={(e) => setFormData({ ...formData, confirmationCheck: e.target.checked })}
                  className="mt-1 h-4 w-4 rounded-none border-gray-300 text-[#E30613] focus:ring-[#E30613]"
                />
                <label htmlFor="confirm-primary" className="text-xs text-neutral-700 leading-snug cursor-pointer">
                  I confirm that this submission is based on primary documentary evidence or direct official records, and does not contain unsubstantiated rumors or defamatory statements.
                </label>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-neutral-600 hover:text-black cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#E30613] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-red-700 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Transmit to Editorial Desk</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

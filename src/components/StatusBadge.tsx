import React from 'react';
import { EvidenceStatus } from '../types';
import { CheckCircle2, AlertTriangle, HelpCircle, Clock, RotateCcw } from 'lucide-react';

interface StatusBadgeProps {
  status: EvidenceStatus;
  showIcon?: boolean;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  showIcon = true,
  className = '',
}) => {
  switch (status) {
    case 'verified':
      return (
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold uppercase tracking-wider bg-[#080808] text-white border border-[#080808] ${className}`}
        >
          {showIcon && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />}
          <span>Verified Record</span>
        </span>
      );
    case 'disputed':
      return (
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-950 border border-amber-800 ${className}`}
        >
          {showIcon && <AlertTriangle className="w-3.5 h-3.5 text-amber-800" aria-hidden="true" />}
          <span>Disputed Claim</span>
        </span>
      );
    case 'allegation':
      return (
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold uppercase tracking-wider bg-[#F4F4F4] text-[#252525] border border-[#252525] ${className}`}
        >
          {showIcon && <HelpCircle className="w-3.5 h-3.5 text-[#252525]" aria-hidden="true" />}
          <span>Documented Allegation</span>
        </span>
      );
    case 'under review':
      return (
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-950 border border-blue-900 ${className}`}
        >
          {showIcon && <Clock className="w-3.5 h-3.5 text-blue-800" aria-hidden="true" />}
          <span>Under Legal Review</span>
        </span>
      );
    case 'corrected':
      return (
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold uppercase tracking-wider bg-red-50 text-[#E30613] border border-[#E30613] ${className}`}
        >
          {showIcon && <RotateCcw className="w-3.5 h-3.5 text-[#E30613]" aria-hidden="true" />}
          <span>Corrected Record</span>
        </span>
      );
    default:
      return null;
  }
};

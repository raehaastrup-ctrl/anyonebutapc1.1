/**
 * ANYONE BUT APC - Phase One Content Types and Schemas
 * Adhering to WCAG 2.2 AA and UK English standards
 */

export type EvidenceStatus = 
  | 'verified' 
  | 'disputed' 
  | 'allegation' 
  | 'under review' 
  | 'corrected';

export type SourceType = 
  | 'Official Court Record' 
  | 'Multilateral Institution' 
  | 'Human Rights NGO' 
  | 'Electoral Commission Record' 
  | 'Constitutional Statute' 
  | 'Parliamentary Hansard' 
  | 'Journalistic Investigation' 
  | 'Public Document';

export interface EvidenceCitation {
  id: string;
  claimTitle: string;
  topic: 'economic-hardship' | 'civil-liberties' | 'executive-accountability' | 'historical-records' | 'electoral-integrity' | 'legislative-oversight';
  summary: string;
  sourceType: SourceType;
  sourceName: string;
  directLink: string;
  publicationDate: string; // YYYY-MM-DD
  timePeriod: string; // e.g., "August 2024", "1993", "2025-2026"
  evidenceStatus: EvidenceStatus;
  statusRationale: string;
  counterPositionOrRebuttal: string;
  editorialReviewer: string;
  lastReviewedDate: string; // YYYY-MM-DD
  legalNotes?: string;
  fullAnalysis?: string[];
}

export interface CorrectionLogEntry {
  id: string;
  entryDate: string;
  evidenceId?: string;
  title: string;
  originalText: string;
  correctedText: string;
  reasonForCorrection: string;
  reviewedBy: string;
}

export interface CorrespondenceTemplate {
  id: string;
  title: string;
  recipientCategory: string;
  targetDescription: string;
  jurisdictionExplanation: string;
  defaultSubject: string;
  defaultBody: string;
  placeholders: {
    key: string;
    label: string;
    defaultValue: string;
    description?: string;
  }[];
  tips: string[];
}

export interface OfficialInstitution {
  name: string;
  acronym: string;
  role: string;
  constitutionalBasis: string;
  officialWebsite: string;
  complaintMechanism: string;
  lastVerifiedDate: string;
}

export interface MaslowLevel {
  levelNumber: number;
  name: string;
  needs: string[];
  civicImplication: string;
  nuanceNote: string;
}

export type PageId = 
  | 'home' 
  | 'manifesto'
  | 'about' 
  | 'issues' 
  | 'democracy' 
  | 'action'
  | 'evidence' 
  | 'write' 
  | 'updates' 
  | 'party-contact' 
  | 'contact' 
  | 'privacy' 
  | 'editorial' 
  | 'checklist';

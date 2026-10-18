/**
 * ANYONE BUT APC - Phase One Content Types and Schemas
 * Adhering to WCAG 2.2 AA and UK English standards
 */

export type PageId = 
  | 'home' 
  | 'manifesto' 
  | 'democracy' 
  | 'action'
  | 'privacy'
  | 'editorial';

export interface OfficialInstitution {
  name: string;
  acronym: string;
  role: string;
  constitutionalBasis: string;
  officialWebsite: string;
  complaintMechanism: string;
  lastVerifiedDate: string;
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

export interface SocialChannel {
  name: string;
  handle: string;
  url: string;
  icon: string;
  description: string;
}

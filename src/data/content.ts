import { OfficialInstitution } from '../types';

export const SITE_METADATA = {
  name: 'ANYONE BUT APC',
  tagline: 'UNITE OPPOSITION & ACTIVATE DIASPORA TO RESTORE DEMOCRACY',
  subheading: 'An independent Nigerian-led civic initiative for accountable leadership, protected freedoms, and credible elections.',
  introCopy: 'We are Nigerians at home and abroad demanding constitutional accountability and leadership that can be questioned. We are independent of political parties, but explicitly critical of the APC record on economic hardship, civil liberties suppression, and election credibility. We provide clear civic facts, template letters to representatives, and tools to organise peacefully.',
  phaseNotice: 'Phase One: peaceful civic information, representative engagement, and democratic education. Zero protests organised in Nigeria.',
  contactEmail: 'contact@anyonebutapc.org',
  privacyEmail: 'privacy@anyonebutapc.org',
  pressEmail: 'press@anyonebutapc.org',
  campaignHashtag: '#ANYONEBUTAPC',
  copyrightYear: '2026'
};

export const SOCIAL_CHANNELS = [
  {
    name: 'TikTok',
    handle: '@anyonebutapc',
    url: 'https://tiktok.com/@anyonebutapc',
    description: 'Short civic explainers, facts, and community voices'
  },
  {
    name: 'Instagram',
    handle: '@anyonebutapc',
    url: 'https://instagram.com/anyonebutapc',
    description: 'Visual graphics, verified infographics, and updates'
  },
  {
    name: 'X (Twitter)',
    handle: '@anyonebutapc',
    url: 'https://x.com/anyonebutapc',
    description: 'Real-time campaign updates, quotes, and advocacy alerts'
  },
  {
    name: 'Facebook',
    handle: 'anyonebutapc',
    url: 'https://facebook.com/anyonebutapc',
    description: 'Community discussions, town halls, and diaspora connections'
  }
];

export const CORE_PRINCIPLES = [
  {
    id: 'rule-of-law',
    title: 'Constitutional Accountability, Not Impunity',
    summary: 'The 1999 Constitution is supreme. No president, minister, or governor is above the law. Public officials must account for public funds and submit to independent oversight.',
    bullets: [
      'Leaders must be answerable to citizens and subject to legislative scrutiny.',
      'Public funds, loans, and resources must be accounted for openly.',
      'Courts and judges must remain completely independent of the executive.'
    ]
  },
  {
    id: 'peoples-welfare',
    title: "People's Welfare & Dignity, Not Empty Slogans",
    summary: 'Economic policy exists to serve human life. Hyperinflation, soaring food prices, and sudden policy shocks without safety nets have plunged over 60% of citizens into severe poverty.',
    bullets: [
      'Every Nigerian has the right to affordable food, water, security, and healthcare.',
      'Workers and families deserve a living wage that matches actual living costs.',
      'Economic policies must protect vulnerable households from destitution.'
    ]
  },
  {
    id: 'credible-elections',
    title: 'Free, Fair & Credible Elections',
    summary: 'Elections are the cornerstone of democratic legitimacy. Citizens must be able to vote without intimidation, and every lawful vote must be transparently counted and declared.',
    bullets: [
      'INEC must operate with absolute independence from political interference.',
      'Electronic transmission and polling unit results must be verifiable in real time.',
      'The diaspora must be granted voting rights to participate in national decisions.'
    ]
  },
  {
    id: 'free-dissent',
    title: 'Protected Civil Liberties & Free Dissent',
    summary: 'Section 39 and Section 40 of the Constitution guarantee peaceful assembly and freedom of speech. Peaceful protesters and journalists must never be criminalised or detained.',
    bullets: [
      'Police permits are NOT required for peaceful assembly (Court of Appeal, 2007).',
      'Security forces must protect peaceful demonstrators, not teargas or arrest them.',
      'Dissent is patriotism: citizens have the sacred right to criticise bad governance.'
    ]
  }
];

export const OFFICIAL_INSTITUTIONS: OfficialInstitution[] = [
  {
    name: 'Constitution of the Federal Republic of Nigeria 1999',
    acronym: 'CFRN 1999',
    role: 'The supreme legal authority binding all persons and authorities throughout Nigeria. Guarantees Fundamental Human Rights under Chapter IV.',
    constitutionalBasis: 'Section 1(1) – Supremacy of the Constitution',
    officialWebsite: 'https://nigerialaw.today/constitution-1999/',
    complaintMechanism: 'Enforceable in State High Courts and Federal High Courts under Section 46.',
    lastVerifiedDate: '2026-10-18'
  },
  {
    name: 'Independent National Electoral Commission',
    acronym: 'INEC',
    role: 'Statutory commission mandated to organise, supervise, and conduct all federal and governorship elections in Nigeria.',
    constitutionalBasis: 'Third Schedule, Part I, Section F of 1999 Constitution; Electoral Act 2022',
    officialWebsite: 'https://inecnigeria.org',
    complaintMechanism: 'INEC Citizen Contact Centre (ICCC), Election Petition Tribunals (Section 285).',
    lastVerifiedDate: '2026-10-18'
  },
  {
    name: 'National Assembly of Nigeria',
    acronym: 'NASS (Senate & House of Representatives)',
    role: 'Bicameral federal parliament responsible for lawmaking, annual budget appropriations, and holding ministers and executive agencies accountable.',
    constitutionalBasis: 'Chapter V, Sections 47–89 of 1999 Constitution',
    officialWebsite: 'https://nass.gov.ng',
    complaintMechanism: 'Public Petitions Committee in both the Senate and the House of Representatives.',
    lastVerifiedDate: '2026-10-18'
  },
  {
    name: 'National Human Rights Commission',
    acronym: 'NHRC',
    role: 'Independent statutory agency established to investigate human rights violations, unlawful detention, and police abuse across Nigeria.',
    constitutionalBasis: 'National Human Rights Commission Act 1995 (amended 2010)',
    officialWebsite: 'https://nhrc.gov.ng',
    complaintMechanism: 'Public complaints portal, state branch secretariats, and toll-free incident desks.',
    lastVerifiedDate: '2026-10-18'
  },
  {
    name: 'Police Complaint Response Unit & Police Service Commission',
    acronym: 'CRU / PSC',
    role: 'Official oversight bodies for receiving citizen complaints regarding police brutality, harassment, illegal extortion, and abuse of authority.',
    constitutionalBasis: 'Police Act 2020 & Police Service Commission Act 2001',
    officialWebsite: 'https://npf.gov.ng',
    complaintMechanism: 'Complaint Response Unit via WhatsApp (+234 805 700 0001) and Twitter/X (@PoliceNG_CRU).',
    lastVerifiedDate: '2026-10-18'
  }
];

export const ABOUT_DECLARATION = {
  standpoint: 'Independent and non-party-affiliated, but explicitly critical of the APC.',
  clarification: 'We do not belong to or receive funds from any political party. Our name is a clear critique of the ruling APC record. We do not endorse any opposition candidate, but we fight for the constitutional environment where opposition can exist safely and citizens can vote freely.',
  scopeBoundaries: [
    'We do NOT organise protests in Nigeria.',
    'We do NOT advocate, encourage, or tolerate violence, threats, or hate speech.',
    'We do NOT endorse or campaign for any opposition political party or candidate.',
    'We do NOT collect donations or money in Phase One.',
    'We do NOT claim to represent all Nigerians—we are citizens demanding accountability.'
  ]
};

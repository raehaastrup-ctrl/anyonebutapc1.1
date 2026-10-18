import { EvidenceCitation, CorrectionLogEntry } from '../types';

export const INITIAL_EVIDENCE_ITEMS: EvidenceCitation[] = [
  {
    id: 'ev-001',
    claimTitle: 'World Bank Estimates on Nigerian Poverty & Living Standards (2025–2026)',
    topic: 'economic-hardship',
    summary: 'The World Bank country data for Nigeria estimates that approximately 69.6% of Nigerians live below the lower-middle-income poverty line of $4.20 per day (2021 PPP), with 50.8% (approximately 123 million citizens) living in extreme poverty ($2.15 per day).',
    sourceType: 'Multilateral Institution',
    sourceName: 'The World Bank Group – Nigeria Country Overview',
    directLink: 'https://www.worldbank.org/ext/en/country/nigeria',
    publicationDate: '2025-10-15',
    timePeriod: '2024–2025 Reporting Cycle',
    evidenceStatus: 'verified',
    statusRationale: 'Verified against primary World Bank macroeconomic databanks and Macro Poverty Outlook reports.',
    counterPositionOrRebuttal: 'Federal Ministry of Finance and National Bureau of Statistics (NBS) state that headline inflation has begun decelerating following currency and subsidy reforms, and point to targeted conditional cash transfer rollouts as structural mitigation.',
    editorialReviewer: 'Economic Research & Data Desk',
    lastReviewedDate: '2026-10-18',
    legalNotes: 'Do not describe Nigeria as "the world\'s poorest nation" or assert non-comparable claims without standardized cross-national PPP datasets.',
    fullAnalysis: [
      'Poverty figures are based on internationally harmonized living standards measurements.',
      'The compounding effect of fuel subsidy removal and floating of the Naira accelerated headline inflation, particularly food inflation, which peaked above 40% in mid-2024 before showing moderate stabilization in early 2026.',
      'Real wages have contracted sharply across both formal and informal sectors despite nominal national minimum wage adjustments.'
    ]
  },
  {
    id: 'ev-002',
    claimTitle: 'Amnesty International Documentation on #EndBadGovernance Protests (2024–2025)',
    topic: 'civil-liberties',
    summary: 'Amnesty International documented allegations of live ammunition use, at least 21 reported deaths, arbitrary arrests of over 1,000 demonstrators, and prolonged detention during and following the nationwide August 2024 #EndBadGovernance protests against inflation and hardship.',
    sourceType: 'Human Rights NGO',
    sourceName: 'Amnesty International Nigeria Report',
    directLink: 'https://www.amnesty.org.ng/2025/08/01/nigeria-no-justice-for-victims-of-police-brutality-one-year-after-endbadgovernance-protests/',
    publicationDate: '2025-08-01',
    timePeriod: 'August 2024 – August 2025',
    evidenceStatus: 'verified',
    statusRationale: 'Documented through verified witness testimony, forensic video analysis, and medical records reviewed by international rights monitors.',
    counterPositionOrRebuttal: 'The Nigeria Police Force (NPF) and Defence Headquarters denied using unauthorized lethal force, asserting that security personnel acted within standard rules of engagement to curb looting, vandalism, and foreign-flag displays in northern states.',
    editorialReviewer: 'Human Rights & Constitutional Liberties Desk',
    lastReviewedDate: '2026-10-18',
    legalNotes: 'All claims of unlawful fatalities must explicitly attribute findings to Amnesty International and other accredited observers while recording official police rejoinders.',
    fullAnalysis: [
      'Protests were organized under fundamental rights guaranteed by Section 40 of the 1999 Constitution (Right to Peaceful Assembly and Association).',
      'Arrests under treason and cybercrime charges prompted international concern; several minors initially detained were subsequently discharged following public outcry and Attorney General intervention in late 2024.',
      'Independent judicial inquiry reports at state levels remain pending or incompletely gazetted.'
    ]
  },
  {
    id: 'ev-003',
    claimTitle: 'US Federal Civil Forfeiture Proceedings (1993, Northern District of Illinois)',
    topic: 'historical-records',
    summary: 'In October 1993, in Case No. 93 C 4483 before the US District Court for the Northern District of Illinois (Eastern Division), funds totalling $460,000 held in Citibank and Heritage Bank accounts under the name of Bola Tinubu were forfeited to the United States Government via a negotiated consent decree resolving a civil forfeiture complaint asserting probable cause of narcotics proceeds.',
    sourceType: 'Official Court Record',
    sourceName: 'United States District Court, Northern District of Illinois, Eastern Division (Case 93 C 4483)',
    directLink: 'https://archive.org/details/tinubu-us-court-order-1993',
    publicationDate: '1993-10-04',
    timePeriod: '1992–1993 Proceedings',
    evidenceStatus: 'verified',
    statusRationale: 'Verified against certified true copies of court docket entries, verified complaint, and final consent order signed by Judge John A. Nordberg.',
    counterPositionOrRebuttal: 'Counsel for President Tinubu and official spokespersons have consistently maintained that the proceedings were purely a civil in rem asset settlement without admission of wrongdoing, and that no criminal indictment, trial, or conviction ever took place.',
    editorialReviewer: 'Legal Affairs & Archives Unit',
    lastReviewedDate: '2026-10-18',
    legalNotes: 'STRICT EDITORIAL DIRECTIVE: The record is a civil asset forfeiture consent order, not a criminal conviction. Writers and researchers must NEVER refer to Bola Ahmed Tinubu as a "convicted drug dealer" or "convicted trafficker". Use precise legal terminology (civil in rem forfeiture, settlement without criminal indictment).',
    fullAnalysis: [
      'Civil asset forfeiture (18 U.S.C. § 981) proceeds directly against property rather than an individual person (in rem).',
      'The case was formally resolved by compromise and settlement, with the US retaining $460,000 and releasing remainder accounts.',
      'This distinction is vital for maintaining credible, fact-checked civic analysis that withstands legal scrutiny.'
    ]
  },
  {
    id: 'ev-004',
    claimTitle: 'INEC Presidential & National Assembly Election Calendar Verification for 2027',
    topic: 'electoral-integrity',
    summary: 'The Independent National Electoral Commission (INEC) published an indicative online calendar citing 16 January 2027 as the designated polling day for Presidential and National Assembly elections, whereas earlier draft timetables referenced February dates under Section 28(1) of the Electoral Act 2022.',
    sourceType: 'Electoral Commission Record',
    sourceName: 'INEC Nigeria Official Calendar Portal',
    directLink: 'https://inecnigeria.org/elections/calendar',
    publicationDate: '2026-03-12',
    timePeriod: '2027 General Election Preparation',
    evidenceStatus: 'under review',
    statusRationale: 'Operative polling date remains under legal verification awaiting formal gazetting of statutory Notice of Election (required not later than 360 days before polling day under Electoral Act 2022 Section 28).',
    counterPositionOrRebuttal: 'INEC officials have noted that online calendar displays are subject to the statutory Notice of Election published in the official gazette and at state offices.',
    editorialReviewer: 'Electoral Process & Legislation Unit',
    lastReviewedDate: '2026-10-18',
    legalNotes: 'Do not publish a live countdown widget or irreversible campaign deadlines until the statutory Notice of Election is officially gazetted by INEC.',
    fullAnalysis: [
      'Electoral Act 2022 Section 28(1) stipulates that INEC shall issue notice of general election not later than 360 days before polling.',
      'Section 29(1) governs submission of candidate lists within 180 days of polling day.',
      'Until gazetted, all dates should be qualified as indicative calendar listings.'
    ]
  },
  {
    id: 'ev-005',
    claimTitle: 'Constitutional Procedures for Executive Absence and Acting Presidency',
    topic: 'executive-accountability',
    summary: 'Sections 144 and 145 of the 1999 Constitution of the Federal Republic of Nigeria govern executive accountability during prolonged presidential medical absence or incapacity. Section 145 mandates written transmission of declaration to the Senate President and House Speaker for the Vice-President to act.',
    sourceType: 'Constitutional Statute',
    sourceName: 'Constitution of the Federal Republic of Nigeria 1999 (as amended)',
    directLink: 'https://nigerialaw.today/constitution-1999/',
    publicationDate: '1999-05-29',
    timePeriod: 'Constitutional Framework (Applicable 2026)',
    evidenceStatus: 'verified',
    statusRationale: 'Statutory text verified against certified constitutional publications and Supreme Court precedents.',
    counterPositionOrRebuttal: 'Presidency legal teams argue that brief foreign working visits and medical consultations do not meet the legal threshold for mandatory formal transmission under Section 145 if government business proceeds uninterrupted through technology and cabinet delegations.',
    editorialReviewer: 'Constitutional Law Group',
    lastReviewedDate: '2026-10-18',
    legalNotes: 'Any publication alleging constitutional violation regarding executive travel must specify exact absence dates, lack of transmission, and applicable constitutional threshold.',
    fullAnalysis: [
      'Under the 2010 First Alteration to Section 145, if the President does not transmit a declaration within 21 days, the National Assembly may by simple resolution mandate the Vice-President to act.',
      'Clear understanding of constitutional mechanics protects public discourse from unfounded rumours while demanding rigorous compliance from public office holders.'
    ]
  },
  {
    id: 'ev-006',
    claimTitle: 'National Assembly Oversight on 2024–2025 Supplementary Appropriations & Public Debt',
    topic: 'legislative-oversight',
    summary: 'The 10th National Assembly approved multiple supplementary appropriation bills and external borrowing requests totalling over $20 billion and N6.2 trillion between late 2023 and 2025, with parliamentary records indicating limited line-item committee debate.',
    sourceType: 'Parliamentary Hansard',
    sourceName: 'National Assembly Votes and Proceedings & Debt Management Office (DMO)',
    directLink: 'https://nass.gov.ng',
    publicationDate: '2025-07-20',
    timePeriod: '10th National Assembly (2023–2025)',
    evidenceStatus: 'verified',
    statusRationale: 'Confirmed through official Votes & Proceedings documents and Debt Management Office statistical bulletins.',
    counterPositionOrRebuttal: 'House and Senate leadership maintain that expedited approvals were necessary to fund urgent national security, road infrastructure, and social safety interventions following macroeconomic shocks.',
    editorialReviewer: 'Parliamentary Scrutiny Team',
    lastReviewedDate: '2026-10-18',
    legalNotes: 'Focus on documented parliamentary votes, committee reports, and statutory oversight requirements rather than speculative motives.',
    fullAnalysis: [
      'Section 80 of the 1999 Constitution vests public purse powers strictly in the National Assembly.',
      'Public debt service-to-revenue ratios reached historically elevated levels in 2024–2025, emphasizing the urgent need for robust parliamentary scrutiny.'
    ]
  }
];

export const CORRECTION_LOG_ENTRIES: CorrectionLogEntry[] = [
  {
    id: 'corr-001',
    entryDate: '2026-10-18',
    evidenceId: 'ev-004',
    title: 'Clarification of INEC 2027 Presidential Polling Date',
    originalText: 'Initial internal brief referred to 16 January 2027 as the confirmed constitutional polling date.',
    correctedText: 'Updated to clarify that 16 January 2027 is an indicative calendar listing pending the formal statutory Notice of Election published under Section 28(1) of the Electoral Act 2022.',
    reasonForCorrection: 'Preventing premature reliance on non-gazetted timetable drafts prior to statutory publication.',
    reviewedBy: 'Senior Editorial Director'
  },
  {
    id: 'corr-002',
    entryDate: '2026-10-15',
    evidenceId: 'ev-001',
    title: 'Precise Attribution of World Bank Poverty Line Definitions',
    originalText: 'Referenced general poverty rate without stating dollar benchmark.',
    correctedText: 'Specified lower-middle-income line ($4.20/day 2021 PPP: 69.6%) and extreme poverty threshold ($2.15/day: 50.8% / 123m).',
    reasonForCorrection: 'Adherence to editorial standard prohibiting vague or unsubstantiated poverty statistics.',
    reviewedBy: 'Economic Research & Data Desk'
  }
];

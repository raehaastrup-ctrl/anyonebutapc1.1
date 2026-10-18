import { MaslowLevel, OfficialInstitution } from '../types';

export const SITE_METADATA = {
  name: 'ANYONE BUT APC',
  tagline: 'UNITE OPPOSITION & ACTIVATE DIASPORA TO RESTORE DEMOCRACY',
  subheading: 'An independent Nigerian-led movement for accountable leadership, protected civic freedoms and credible elections.',
  introCopy: 'We are Nigerians at home and abroad, and people who care about Nigeria. We believe Nigeria deserves leadership that can be questioned, institutions that can act independently, and elections in which every eligible voter can participate safely and every lawful vote is counted. We are concerned about economic hardship, the treatment of peaceful dissent and public accountability. We will document concerns carefully, ask institutions questions and share practical civic resources.',
  phaseNotice: 'Phase One: information, registration and public accountability. Events and gatherings will be announced only after safety and legal review.',
  contactEmail: 'contact@anyonebutapc.org',
  pressEmail: 'press@anyonebutapc.org',
  correctionsEmail: 'corrections@anyonebutapc.org',
  privacyEmail: 'privacy@anyonebutapc.org',
  legalEntityNotice: 'Anyone But APC is a non-profit civic advocacy association established under privacy-first governance principles. Phase One focuses strictly on factual civic education, verifiable evidence compilation, and constitutional accountability.',
  copyrightYear: '2026'
};

export const CORE_PILLARS = [
  {
    id: 'accountability',
    title: 'Accountable Leadership',
    description: 'Holding executive authority to the 1999 Constitution, demanding transparency on public expenditures, foreign borrowings, and transparent declaration of presidential acting powers.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'freedoms',
    title: 'Protected Civil Liberties',
    description: 'Defending the constitutional right to peaceful assembly under Section 40, documenting protest policing, and opposing arbitrary detention or intimidation of civic voices.',
    iconName: 'Scale'
  },
  {
    id: 'elections',
    title: 'Credible, Transparent Elections',
    description: 'Demanding independent accreditation, real-time polling unit result collation, statutory calendar adherence, and robust domestic and international election observation.',
    iconName: 'Vote'
  },
  {
    id: 'evidence',
    title: 'Evidence-Based Public Debate',
    description: 'Combating misinformation with verified primary documentation, clear citations, official rights of reply, and an immutable public correction log.',
    iconName: 'FileText'
  }
];

export const MASLOW_EXPLAINER: {
  introduction: string;
  caveat: string;
  levels: MaslowLevel[];
  civicSynthesis: string;
} = {
  introduction: 'To understand why public policy failures erode democratic life, we examine Abraham Maslow\'s hierarchy of human needs. In political science and civic advocacy, this is used as a conceptual framework rather than a rigid universal law or five mechanical economic "forces". Human priorities are dynamic, interconnected, and culturally mediated.',
  caveat: 'CRITICAL CIVIC DISTINCTION: Experiencing economic deprivation or severe inflation restricts physical bandwidth and daily security, but it does NOT mean poor or struggling citizens lack civic agency, moral judgement, or the independent capacity to vote their conscience. Hardship magnifies the urgent duty of the state to serve its citizens.',
  levels: [
    {
      levelNumber: 1,
      name: 'Physiological Needs',
      needs: ['Affordable food & staple grains', 'Clean potable water', 'Secure shelter & roofing', 'Restorative sleep & healthcare'],
      civicImplication: 'When food inflation exceeds 35–40% and transport costs double due to sudden subsidy removal without safety nets, citizens are forced into survival mode, making daily civic engagement an exhausting struggle.',
      nuanceNote: 'Needs at this level are immediate, but community mutual-aid networks in Nigeria continually demonstrate immense resilience.'
    },
    {
      levelNumber: 2,
      name: 'Safety & Security Needs',
      needs: ['Physical security & freedom from extortion', 'Income predictability & stable currency', 'Predictable rule of law', 'Healthcare emergency protection'],
      civicImplication: 'Insecurity on farm roads, banditry, and unpredictability in currency exchange stifle micro-enterprises and smallholders. A state that cannot guarantee basic physical security loses legitimacy.',
      nuanceNote: 'Physical safety is both an individual human necessity and a direct constitutional responsibility under Section 14(2)(b).'
    },
    {
      levelNumber: 3,
      name: 'Belonging & Social Connection',
      needs: ['Family cohesion', 'Community solidarity', 'Faith & cultural networks', 'Civic groups & diaspora ties'],
      civicImplication: 'Economic migration ("Japa") fractures family units and drains domestic healthcare and educational institutions. Civic organizations bridge diaspora communities with home communities.',
      nuanceNote: 'Belonging is a major catalyst for civic solidarity; diaspora remittances sustain millions across Nigeria.'
    },
    {
      levelNumber: 4,
      name: 'Esteem, Agency & Respect',
      needs: ['Personal dignity', 'Being listened to by elected officials', 'Fair treatment by law enforcement', 'Professional recognition'],
      civicImplication: 'When peaceful demonstrators are met with water cannon, tear gas, or criminalization, their constitutional dignity is directly violated. Democracy requires that citizen voices command respect.',
      nuanceNote: 'Esteem thrives when citizens participate in community governance without fear of harassment.'
    },
    {
      levelNumber: 5,
      name: 'Self-Actualisation & Opportunity',
      needs: ['Higher learning & digital innovation', 'Creative expression & arts', 'Civic leadership & national reform', 'Fulfilling human potential'],
      civicImplication: 'A thriving democracy provides the institutional infrastructure for youth and entrepreneurs to innovate, build world-class industries, and govern with integrity.',
      nuanceNote: 'This level illustrates the limitless potential of Nigerian citizens when governance barriers and corruption are dismantled.'
    }
  ],
  civicSynthesis: 'Public policy that ignores basic physiological and safety baselines fails its citizens. Our advocacy demands economic stabilization, judicial fairness, and institutional integrity so every Nigerian can pursue their highest potential without state-imposed impediments.'
};

export const OFFICIAL_INSTITUTIONS: OfficialInstitution[] = [
  {
    name: 'Constitution of the Federal Republic of Nigeria 1999 (as amended)',
    acronym: 'CFRN 1999',
    role: 'The supreme legal authority binding all authorities and persons throughout Nigeria. Establishes fundamental human rights (Chapter IV) and structure of government.',
    constitutionalBasis: 'Section 1(1) – Supremacy of the Constitution',
    officialWebsite: 'https://nigerialaw.today/constitution-1999/',
    complaintMechanism: 'Judicial review via High Courts and Federal High Courts under Section 46.',
    lastVerifiedDate: '2026-10-18'
  },
  {
    name: 'Independent National Electoral Commission',
    acronym: 'INEC',
    role: 'Statutory body mandated to organise, undertake, and supervise all presidential, national assembly, and governorship elections.',
    constitutionalBasis: 'Third Schedule, Part I, Section F of 1999 Constitution; Electoral Act 2022',
    officialWebsite: 'https://inecnigeria.org',
    complaintMechanism: 'INEC Citizen Contact Centre (ICCC), Electoral Matters Division, Election Petition Tribunals under Section 285.',
    lastVerifiedDate: '2026-10-18'
  },
  {
    name: 'National Assembly of Nigeria',
    acronym: 'NASS (Senate & House of Representatives)',
    role: 'Bicameral federal legislative branch responsible for lawmaking, appropriation, and constitutional oversight of federal executive ministries.',
    constitutionalBasis: 'Chapter V, Sections 47–89 of 1999 Constitution',
    officialWebsite: 'https://nass.gov.ng',
    complaintMechanism: 'Public Petitions Committees in both Senate and House of Representatives.',
    lastVerifiedDate: '2026-10-18'
  },
  {
    name: 'National Human Rights Commission',
    acronym: 'NHRC',
    role: 'Independent statutory agency tasked with monitoring, investigating allegations of human rights violations, and assisting victims of abuses across Nigeria.',
    constitutionalBasis: 'National Human Rights Commission Act 1995 (amended 2010)',
    officialWebsite: 'https://nhrc.gov.ng',
    complaintMechanism: 'Online complaints portal, toll-free reporting hotlines, and state branch desks.',
    lastVerifiedDate: '2026-10-18'
  },
  {
    name: 'Police Complaint Response Unit & Police Service Commission',
    acronym: 'CRU / PSC',
    role: 'Official accountability mechanism for investigating police misconduct, brutality allegations, extortion, and unlawful use of firearms.',
    constitutionalBasis: 'Police Act 2020 & Police Service Commission (Establishment) Act 2001',
    officialWebsite: 'https://npf.gov.ng',
    complaintMechanism: 'NPF Complaint Response Unit via WhatsApp, Twitter/X (@PoliceNG_CRU), and PSC Oversight Unit.',
    lastVerifiedDate: '2026-10-18'
  }
];

export const DEMOCRACY_EXPLAINERS = [
  {
    id: 'elections-not-sufficient',
    title: 'Elections are Necessary, but Not Sufficient',
    summary: 'A country does not become a democracy merely by holding periodic ballots. True constitutional democracy requires institutional checks, free press, protected opposition, and rule of law between election cycles.',
    keyPoints: [
      'Periodic voting is an empty ritual if opposition campaigns face police harassment, selective bans, or media suppression.',
      'Electoral integrity relies upon independent vote collation, verifiable voter accreditation (BVAS), and prompt compliance with court orders.',
      'Civic oversight must be continuous, scrutinising public budgets, public procurement, and executive appointments every single week.'
    ]
  },
  {
    id: 'separation-of-powers',
    title: 'Separation of Powers & Checks and Balances',
    summary: 'The 1999 Nigerian Constitution divides state powers among three distinct branches: Executive (Presidency), Legislature (Senate & House), and Judiciary (Supreme Court & Federal Courts).',
    keyPoints: [
      'Executive power is constrained: the President cannot levy taxes, amend the budget, or borrow foreign funds without legislative approval.',
      'Legislative oversight: Section 88 empowers the National Assembly to expose corruption, inefficiency, or waste in public administration.',
      'Judicial independence: Courts possess the constitutional authority to nullify executive orders and legislative statutes that contravene Chapter IV rights.'
    ]
  },
  {
    id: 'freedom-of-assembly',
    title: 'Constitutional Freedom of Expression & Assembly',
    summary: 'Section 39 and Section 40 of the Constitution guarantee every citizen the right to freedom of expression, freedom of the press, and the right to assemble peacefully without police permission.',
    keyPoints: [
      'The Court of Appeal ruled in IGP v. ANPP (2007) that police permits are NOT required for peaceful protests, rallies, or assemblies.',
      'The primary duty of security agencies during protests is the protection of demonstrators and property, not intimidation or suppression.',
      'Silencing dissent through treason charges or prolonged detention without trial violates Section 35.'
    ]
  },
  {
    id: 'how-to-check-a-claim',
    title: 'How to Check a Political Claim in 60 Seconds',
    summary: 'A practical, evidence-based verification checklist before believing or sharing political news online.',
    keyPoints: [
      '1. Trace to the Primary Source: Did the claim come from a certified court document, an official gazette, or an unverified tweet?',
      '2. Check the Complete Date & Jurisdiction: Is an old video or 2015 statement being recirculated as current 2026 news?',
      '3. Separate Civil from Criminal: A civil lawsuit or asset forfeiture is not a criminal conviction. Exact legal wording matters.',
      '4. Look for the Right of Reply: Did the reporting source give the accused party or official body a genuine opportunity to respond?',
      '5. Beware Confirmation Bias: If an unverified claim sounds too sensational, pause and verify against accredited records.'
    ]
  }
];

export const ABOUT_DECLARATION = {
  standpoint: 'Independent and non-party-affiliated, but explicitly critical of the ruling All Progressives Congress (APC).',
  clarification: 'We are NOT a neutral election observation body. We are a civic advocacy initiative whose name expresses explicit criticism of APC\'s governance record, economic performance, and treatment of civil liberties. At the same time, we DO NOT endorse, fund, or affiliate with any opposition political party or candidate.',
  scopeBoundaries: [
    'We do NOT organise protests in Nigeria.',
    'We do NOT advocate, encourage, or tolerate violence, threats, or hate speech.',
    'We do NOT endorse or campaign for any opposition political party or individual candidate.',
    'We do NOT collect donations or money in Phase One.',
    'We do NOT claim to speak for or represent all Nigerians.'
  ],
  governance: 'Guided by an independent editorial and legal advisory panel comprising Nigerian legal practitioners, civic data analysts, and diaspora convenors dedicated to constitutional governance and data protection.',
  fundingPolicy: 'Phase One is self-funded by its volunteer founding working group without corporate, partisan, or state donations. Any future funding mechanisms will be publicly declared with strict transparency thresholds.',
  correctionsPolicy: 'We operate a rigorous, transparent public corrections policy. When a factual, date, or contextual error is identified, we correct the text promptly and log the revision on our public Evidence Library Correction Log.'
};

export const LAUNCH_CHECKLIST_DATA = [
  {
    week: 'Week 1: Foundation',
    items: [
      { text: 'Finalise founding charter, editorial principles, and code of conduct', done: true },
      { text: 'Confirm domain configuration, registrar locks, and Cloudflare Pages setup', done: true },
      { text: 'Implement visual design system with approved Anyone But APC logo', done: true },
      { text: 'Configure structured content files and content schema for CMS portability', done: true }
    ]
  },
  {
    week: 'Week 2: Build & Responsive Architecture',
    items: [
      { text: 'Build Home, About, Issues, Democracy, Evidence, and Correspondence pages', done: true },
      { text: 'Verify WCAG 2.2 AA contrast compliance and keyboard navigation focus states', done: true },
      { text: 'Implement 5 individual editable correspondence templates with export & mailto links', done: true },
      { text: 'Configure Maslow\'s Hierarchy of Needs interactive explainer with civic nuance', done: true },
      { text: 'Ensure 44px minimum tap target sizes on mobile and tablet displays', done: true }
    ]
  },
  {
    week: 'Week 3: Validation, Privacy & Security',
    items: [
      { text: 'Verify US Civil Forfeiture legal distinction (civil in rem forfeiture, not criminal conviction)', done: true },
      { text: 'Verify World Bank 2025–2026 poverty thresholds and Amnesty protest citations', done: true },
      { text: 'Audit UK GDPR and NDPR compliance for supporter updates and double opt-in', done: true },
      { text: 'Implement private moderation queue notice for party leadership contacts', done: true },
      { text: 'Publish public corrections log and editorial review policy', done: true }
    ]
  },
  {
    week: 'Week 4: Public Information Launch',
    items: [
      { text: 'Deploy static distribution on Cloudflare Pages with strict CSP and security headers', done: true },
      { text: 'Release verified research starter pack with public links', done: true },
      { text: 'Activate voluntary email updates sign-up via secure privacy-first backend webhook', done: true },
      { text: 'Publish weekly factual research briefing; zero protest dates until cleared', done: true }
    ]
  }
];

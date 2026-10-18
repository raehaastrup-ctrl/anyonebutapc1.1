import { CorrespondenceTemplate } from '../types';

export const CORRESPONDENCE_TEMPLATES: CorrespondenceTemplate[] = [
  {
    id: 'template-a',
    title: 'Template A: To a UK Member of Parliament (MP)',
    recipientCategory: 'UK Parliamentary Representatives',
    targetDescription: 'For UK residents and diaspora constituents writing to their local MP regarding British foreign policy, election observation support, and human rights benchmarks.',
    jurisdictionExplanation: 'UK MPs hold ministerial scrutiny power over the Foreign, Commonwealth & Development Office (FCDO) and UK diplomatic support for credible elections abroad.',
    defaultSubject: 'Request for information on UK support for credible Nigerian elections',
    defaultBody: `Dear [MP_NAME],

I am a constituent living in [CONSTITUENCY]. I am concerned about the protection of peaceful civic participation and the integrity of Nigeria's forthcoming elections. Amnesty International has reported serious concerns arising from the 2024 #EndBadGovernance protests, while World Bank figures describe substantial economic hardship. 

Could you please explain what steps the UK Government is taking to support credible election observation, transparency and the protection of civil liberties in Nigeria? Would you consider raising these questions with the FCDO? 

I would appreciate a written response and links to relevant parliamentary or government statements.

Yours sincerely,
[SENDER_NAME]
[SENDER_POSTAL_ADDRESS]`,
    placeholders: [
      { key: 'MP_NAME', label: 'MP Name', defaultValue: 'Rt Hon [Surname] MP', description: 'Find your MP at members.parliament.uk' },
      { key: 'CONSTITUENCY', label: 'Your Constituency', defaultValue: 'e.g. Manchester Central / Hackney South', description: 'UK parliamentary constituency where you reside' },
      { key: 'SENDER_NAME', label: 'Your Full Name', defaultValue: '[Your Name]' },
      { key: 'SENDER_POSTAL_ADDRESS', label: 'Postal Address', defaultValue: '[Your UK Postal Address & Postcode]', description: 'UK MPs strictly require a constituent postal address to reply' }
    ],
    tips: [
      'MPs are bound by parliamentary convention to respond only to their own constituents.',
      'Always include your full postal address and UK postcode.',
      'Keep your tone polite, factual, and focused on democratic accountability.'
    ]
  },
  {
    id: 'template-b',
    title: 'Template B: To a Local Newspaper or News Desk',
    recipientCategory: 'Journalists, Editors & Regional Press',
    targetDescription: 'For pitch letters to regional, national, or diaspora news editors seeking balanced, evidence-based reportage on Nigerian civic challenges.',
    jurisdictionExplanation: 'Media editors decide coverage priorities and have public interest remits to investigate diaspora impacts and international governance.',
    defaultSubject: 'Local Nigerian diaspora perspective on Nigeria\'s 2027 elections',
    defaultBody: `Dear Editor,

I am writing as a local resident interested in how developments in Nigeria affect families and communities with ties to the country. Recent World Bank poverty estimates and Amnesty International reporting on protest-related abuses raise important questions about economic security, civil liberties and electoral accountability. 

I hope your publication will consider a reported piece examining the concerns, the perspectives of local residents and the responses of Nigerian and UK institutions. I can share public sources and would welcome balanced reporting that includes official responses.

Kind regards,
[SENDER_NAME]
[SENDER_CONTACT_INFO]`,
    placeholders: [
      { key: 'SENDER_NAME', label: 'Your Name', defaultValue: '[Your Name]' },
      { key: 'SENDER_CONTACT_INFO', label: 'Your Contact Details', defaultValue: '[Your Phone / Email / City]' }
    ],
    tips: [
      'Personalise the opening sentence to explain your connection to your local area or community.',
      'Offer to connect journalists with primary reports (e.g. World Bank data, Amnesty findings).',
      'Encourage journalists to seek official right-of-reply from diplomatic or governmental offices.'
    ]
  },
  {
    id: 'template-c',
    title: 'Template C: To FCDO / EU / US Public Diplomatic Institutions',
    recipientCategory: 'Diplomatic & Multilateral Institutions',
    targetDescription: 'Formal public information request addressed to diplomatic bodies concerning election observation missions, civic space funding, and transparency benchmarks.',
    jurisdictionExplanation: 'Diplomatic missions (FCDO, EU External Action Service, US State Department) deploy observation missions and monitor multilateral commitments to democratic governance.',
    defaultSubject: 'Public information request concerning Nigeria election observation and civic freedoms',
    defaultBody: `Dear [OFFICE_DESK_NAME],

Please provide publicly available information on your institution's current plans for monitoring Nigeria's forthcoming elections, supporting independent observation and responding to documented threats to peaceful civic participation. 

We would also welcome details of any published benchmarks, statements or reporting mechanisms for electoral transparency and the protection of journalists and protesters. 

Please direct us to the appropriate office if this request falls outside your remit.

Sincerely,
[SENDER_OR_ORGANISATION_NAME]
[CONTACT_EMAIL]`,
    placeholders: [
      { key: 'OFFICE_DESK_NAME', label: 'Institution / Desk Name', defaultValue: 'Nigeria Desk Officer / Electoral Support Team' },
      { key: 'SENDER_OR_ORGANISATION_NAME', label: 'Your Name or Civic Group', defaultValue: '[Your Name / Group Name]' },
      { key: 'CONTACT_EMAIL', label: 'Contact Email', defaultValue: '[Your Email]' }
    ],
    tips: [
      'Keep diplomatic correspondence formal, concise, and focused on public information disclosure.',
      'Check whether the body has an existing FOI (Freedom of Information) portal.'
    ]
  },
  {
    id: 'template-d',
    title: 'Template D: To Nigerian Electoral Institutions (INEC)',
    recipientCategory: 'Independent National Electoral Commission',
    targetDescription: 'Direct civic enquiry to INEC requesting authoritative timetables, accreditation guidance, and polling transparency procedures.',
    jurisdictionExplanation: 'INEC is established under Section 153 of the 1999 Constitution and governed by the Electoral Act 2022 to organize, conduct, and supervise elections in Nigeria.',
    defaultSubject: 'Request for clarification on election transparency procedures',
    defaultBody: `Dear [INEC_OFFICE],

Please direct us to the latest authoritative timetable and published procedures for voter accreditation, result collation, public access to results, observer accreditation and complaints. 

Where procedures have changed, please identify the legal authority and date of implementation. We intend to publish accurate civic information with links to your official guidance.

Sincerely,
[SENDER_NAME]
[SENDER_CITY_OR_LOCATION]`,
    placeholders: [
      { key: 'INEC_OFFICE', label: 'INEC Office / Department', defaultValue: 'Director of Voter Education and Publicity, INEC Headquarters' },
      { key: 'SENDER_NAME', label: 'Your Full Name', defaultValue: '[Your Name]' },
      { key: 'SENDER_CITY_OR_LOCATION', label: 'State / City of Residence', defaultValue: '[City / State / Diaspora Location]' }
    ],
    tips: [
      'Reference Section 28 and Section 60 of the Electoral Act 2022 where relevant.',
      'Ask for certified links or official gazette numbers.',
      'Never use threatening or abusive language.'
    ]
  },
  {
    id: 'template-e',
    title: 'Template E: To Political Party Leadership',
    recipientCategory: 'Registered Political Parties',
    targetDescription: 'Invitation to political parties to submit documented electoral integrity concerns or factual evidence to the independent research desk.',
    jurisdictionExplanation: 'Political parties field candidates and deploy polling agents; they have first-hand documentation of procedural infractions.',
    defaultSubject: 'Invitation to share publicly documented electoral integrity concerns',
    defaultBody: `Dear [PARTY_OFFICIAL_NAME],

Our independent civic information project is collecting verifiable information about electoral procedures, access, transparency and lawful participation. We do not endorse or coordinate campaigning for any candidate or party. 

If your organisation wishes to submit a factual concern, please provide dates, documentary evidence, any action already taken and a contact for verification. Submissions will be reviewed independently and may not be published.

Sincerely,
[PROJECT_DESK_CONTACT]
[DESK_EMAIL]`,
    placeholders: [
      { key: 'PARTY_OFFICIAL_NAME', label: 'Party Official / National Secretary', defaultValue: 'National Secretary / National Publicity Secretary' },
      { key: 'PROJECT_DESK_CONTACT', label: 'Your Name / Civic Desk', defaultValue: 'Independent Civic Research Desk' },
      { key: 'DESK_EMAIL', label: 'Email', defaultValue: '[Your Contact Email]' }
    ],
    tips: [
      'Remind party leadership that ANYONE BUT APC is not an opposition coalition partner or endorsement vehicle.',
      'Only accept verifiable primary documentation subject to independent fact-checking.',
      'Maintain strict editorial neutrality when assessing submissions from any party.'
    ]
  }
];

# ANYONE BUT APC — Phase One Civic Platform

**Independent, Non-Party-Affiliated Political Advocacy Initiative**  
*Date of Specification:* 18 October 2026  
*Target Deployment:* Cloudflare Pages (Static Edge Distribution)

---

## 1. Executive Summary & Civic Position

**ANYONE BUT APC** is an independent, Nigerian-led movement advocating for accountable leadership, protected civil liberties, and credible elections.

- **Explicit Political Standpoint:** The initiative is explicitly critical of the governing All Progressives Congress (APC)—its economic record, currency devaluation, fuel subsidy removal without safety nets, and treatment of peaceful dissent.
- **Zero Opposition Endorsements:** The organisation does **not** endorse, fund, or affiliate with any opposition political party (PDP, LP, NNPP, SDP, etc.) or individual political candidate.
- **Phase One Strict Boundaries:**
  - ❌ **No protests organised in Nigeria.**
  - ❌ **No violent advocacy or threats.**
  - ❌ **No solicitation or collection of money/donations.**
  - ❌ **No public attendee lists or unverified live counters.**
  - ❌ **No fabricated claims, non-comparable statistics, or unsubstantiated allegations.**

All sensitive copy is maintained in structured content files (`src/data/content.ts` and `src/data/evidence.ts`) to enable rapid fact-checking and future CMS integration.

---

## 2. Approved Brand Reference & Visual Design System

The platform strictly uses the **approved Anyone But APC brand assets**:
- **Official Circular Badge Icon:** A circular black emblem (`#080808`) framed with a vivid red concentric ring (`#E30613`), featuring a large, bold white uppercase **A** crossed by an energetic red grunge brushstroke **X**. Below the **A**, the badge contains **ANYONE** in heavy white condensed sans, and **BUT** in white paired with **APC** in vivid signal red.
- **Horizontal Master Presentation:** The circular badge icon alongside a thin vertical divider, dominant **ANYONE**, smaller **BUT APC**, and the approved campaign tagline: `"UNITE OPPOSITION & ACTIVATE DIASPORA TO RESTORE DEMOCRACY"`.
- **Colour Palette:**
  - Black: `#080808`
  - Signal Red: `#E30613`
  - Neutral Grey: `#F4F4F4`
  - Charcoal: `#252525`
  - Pure White: `#FFFFFF`
- **Typography:** Heavy condensed sans for display headings (`Archivo Black`) and readable, high-legibility body sans (`Inter`).
- **Accessibility:** WCAG 2.2 AA compliant contrast ratios throughout; minimum 44px tap targets on all interactive components; keyboard focus rings with `#E30613` outline; respect for `prefers-reduced-motion`.

---

## 3. Paced-Out Navigation for Democratic Beginners

To eliminate cognitive overload for citizens who are new to democracy, the navigation has been structured into a calm, guided 5-step civic progression:

1. **Step 1: The Manifesto (`/manifesto`)** — Foundational charter, 6 core principles, clear statement of what we are and are not doing, vision for basic needs, and instant download center (high-res PNG poster, printable PDF, and plain text).
2. **Step 2: The Issues (`/issues`)** — Clear breakdown of economic hardship, inflation data, protest policing, 1993 US civil forfeiture facts, and Maslow's human needs model.
3. **Step 3: Democracy 101 (`/democracy`)** — Jargon-free, bite-sized explainers on separation of powers, judicial independence, assembly rights, and a 60-second claim-checking checklist.
4. **Step 4: Take Action (`/action`)** — Approaches to civic engagement: writing individual letters to MPs/media (`/write`), subscribing to verified briefings (`/updates`), and party leadership desk (`/party-contact`).
5. **Step 5: Evidence Library (`/evidence`)** — Searchable repository of primary court dockets, multilateral datasets, and public correction logs.

```text
/
├── index.html                   # HTML5 entry point with OpenGraph, JSON-LD Schema & Google Fonts
├── metadata.json                # AI Studio application metadata
├── package.json                 # Dependencies & build scripts
├── tsconfig.json                # TypeScript compiler configuration
├── vite.config.ts               # Vite bundler configuration
├── .env.example                 # Environment configuration template
├── README.md                    # Project documentation & Cloudflare deployment guide
├── public/
│   ├── favicon.svg              # Standalone black A / red brushstroke X SVG mark
│   ├── robots.txt               # Search engine crawl directives & sitemap reference
│   └── sitemap.xml              # XML Sitemap indexing all Phase One routes
└── src/
    ├── main.tsx                 # React 19 application entry point
    ├── App.tsx                  # Accessible hash-based page router & scroll management
    ├── index.css                # Tailwind CSS layers, font utilities & WCAG tap target rules
    ├── types/
    │   └── index.ts             # Evidence schema, correspondence types & institution types
    ├── data/
    │   ├── content.ts           # Master content file: mission, pillars, Maslow explainer, institutions
    │   ├── evidence.ts          # Structured evidence entries & public correction log
    │   └── templates.ts         # 5 factual, editable correspondence templates
    ├── components/
    │   ├── BrandLogo.tsx        # Vector SVG approved logo (full, compact, symbol, monochrome)
    │   ├── Header.tsx           # Responsive header, skip-link, active indicators, mobile drawer
    │   ├── Footer.tsx           # Civic footer, legal boundaries, Cloudflare badges & copyright
    │   ├── StatusBadge.tsx      # High-contrast WCAG AA evidence status badges
    │   ├── MaslowExplainer.tsx  # Section 4: Human needs & civic agency interactive explainer
    │   └── CorrectionModal.tsx  # Accessible modal for submitting factual oversight & primary sources
    └── pages/
        ├── HomePage.tsx         # Hero, 4 civic pillars, evidence highlights, scope safeguards
        ├── AboutPage.tsx        # Independent vs neutral, governance, funding disclosure
        ├── IssuesPage.tsx       # 6 documented issue areas + Maslow human needs module
        ├── DemocracyPage.tsx    # Interactive education centre, 60s claim checker, directory, glossary
        ├── EvidencePage.tsx     # Filterable library (search, topic, status) + public correction log
        ├── WritePage.tsx        # 5 individual editable correspondence templates (export/copy/mailto)
        ├── UpdatesPage.tsx      # Supporter double opt-in sign-up with privacy-by-design notice
        ├── PartyContactPage.tsx # Private channel for registered party leadership (non-endorsement)
        ├── ContactPage.tsx      # Dedicated desks: Press, General, Corrections, Privacy DPO
        ├── PrivacyPolicyPage.tsx# UK GDPR & NDPA privacy notice (special-category data handling)
        ├── EditorialPolicyPage.tsx # Factual standards, legal distinctions, public retraction log
        └── LaunchChecklistPage.tsx # 4-week delivery tracker & AI Studio acceptance criteria audit
```

---

## 4. Key Content Modules & Legal Precision

### A. Economic & Human Needs Explainer (Section 4)
- **Conceptual Model:** Maslow’s hierarchy of needs is analyzed as a conceptual framework, not a rigid universal law or five mechanical economic forces.
- **Five Levels:** (1) Physiological; (2) Safety; (3) Belonging; (4) Esteem & Agency; (5) Self-Actualisation.
- **Agency Protection:** Explicitly notes that economic hardship constrains civic bandwidth, but does *not* imply that low-income citizens lack independent agency or voting wisdom.

### B. Historical Court Records (1993 US Civil Forfeiture)
- **Legal Accuracy:** The 1993 US District Court for the Northern District of Illinois proceeding (Case 93 C 4483) is presented strictly as a **civil asset forfeiture *in rem*** resolved by negotiated settlement and consent decree.
- **Strict Prohibition:** Writers and contributors must never misstate the record by describing President Bola Tinubu as a "convicted narcotics trafficker" or "felon". Factual accuracy and legal distinctions are non-negotiable.

### C. 2027 Election Calendar Verification
- **INEC Notice:** Explains that while an indicative online calendar referenced 16 January 2027, the statutory Notice of Election under Section 28(1) of the Electoral Act 2022 (mandated 360 days before polling) must be gazetted before publishing countdowns.

---

## 5. Security & Privacy by Design

1. **No Client-Side Data Leaks:** Supporter emails and inquiries are never written to `localStorage`, browser session storage, or public Git commits.
2. **Special Category Data Protection (UK GDPR / NDPA):**
   - No questions concerning political party affiliation.
   - Explicit unticked opt-in checkboxes required for voluntary newsletters.
   - Double opt-in confirmation required before dispatching updates.
   - Immediate 1-click unsubscribe and right to erasure via `privacy@anyonebutapc.org`.
3. **No Fake Success State:** In strict accordance with the master prompt, forms do not claim to have registered users until a production backend webhook (`VITE_SUPPORTER_ENDPOINT`) is configured and live.

---

## 6. Build & Cloudflare Pages Deployment Instructions

### Prerequisites
- Node.js 20+
- npm or bun

### Local Development
```bash
# Install dependencies
npm install

# Run local development server
npm run dev
```

### Static Production Build
```bash
# Compile and package static assets into /dist
npm run build
```

### Cloudflare Pages Deployment
1. Connect your private GitHub repository to **Cloudflare Pages**.
2. Configure build settings:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
3. Environment variables (in Cloudflare Pages dashboard under **Settings > Environment variables**):
   - `VITE_SITE_URL`: `https://anyonebutapc.org`
   - `VITE_SUPPORTER_ENDPOINT`: (Optional) URL to your Cloudflare Worker or encrypted CRM webhook handling double opt-in.
4. Security Headers (create a `public/_headers` file for Cloudflare if desired):
   ```text
   /*
     X-Content-Type-Options: nosniff
     X-Frame-Options: DENY
     Referrer-Policy: strict-origin-when-cross-origin
     Permissions-Policy: geolocation=(), microphone=(), camera=()
   ```

---

## 7. Phase One Delivery Plan & Roadmap

- **Week 1: Foundation (Completed):** Finalise charter, editorial standards, logo design system, and structured content schema.
- **Week 2: Build (Completed):** Implement Home, About, Issues, Democracy, Evidence, and Correspondence pages with WCAG 2.2 AA compliance.
- **Week 3: Validation (Active):** Legal verification of citations, privacy audits, and domain setup.
- **Week 4: Public Launch:** Publish static distribution to Cloudflare Pages, activate verified weekly briefings, zero protest dates until cleared.

---

## 8. License & Editorial Copyright
© 2026 ANYONE BUT APC. All research citations reference primary public records, official gazettes, and multilateral data. Open for civic, non-commercial reproduction with appropriate attribution.

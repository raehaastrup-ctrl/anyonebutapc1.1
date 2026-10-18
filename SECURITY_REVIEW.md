# Security and UX review, 18 October 2026

Status: changes prepared for review. NOT READY TO COLLECT DATA.

Scope: raehaastrup-ctrl/anyonebutapc1.1, base commit aa6c86e80b1ec8d5f01083dbd47d7d4e6721158b.
The second supplied URL, anyonebutapc1., returned 404 and was not modified.

## Findings and fixes
- Original repository and supplied ZIP contained no PNGs. BrandLogo.tsx redrew the badge in SVG, and favicon.svg was another approximation.
- Replaced both with the two original, separately uploaded PNG files. No resampling, cropping, recolouring, filters or SVG recreations.
- Both copied assets are byte-identical to the originals:
  - official-logo.png SHA-256 ea87d0519f2db4e6370b86783c582b5d7c5f2524c7bc033a337c01373d467ca0
  - official-badge.png SHA-256 01f5f53a3a10dfe0b9f93bc3a93355a68b7f2c78d084f729a85e3444791a391e
- Get Involved now stays in the sticky header and opens the registration page. Navigation collapses before desktop links become crowded.
- Added wrapping, constrained media sizing, keyboard Escape handling, route focus management and reduced layout overflow.
- Contact and correction forms previously claimed successful submission without sending anything. All unconnected intake forms are now disabled with an availability notice. No information can be entered through these forms.
- Replaced the arbitrary frontend webhook with a same-origin /api/subscribe Cloudflare Pages Function using Brevo's real double opt-in endpoint. Only provider HTTP 201 leads to a pending-verification response, never an activated-subscription claim.
- Registration collects only email, explicit consent, a versioned consent record and spam token. Server controls consent timestamp. No affiliation, country, name, phone or address fields.
- Added mandatory server-side Turnstile validation, hostname/action checks, origin checks, streamed 4 KiB request limit, field allowlist, consent validation, timeouts, generic errors and atomic D1 rate limits for IP and email. Rate counters use keyed hashes and expire; no raw email or IP is stored in D1.
- Server fails closed unless enabled, privacy-approved, and all bindings are configured. Client collection is off by default.
- Added Cloudflare static deployment security headers. API sends no-store and security headers separately.
- Removed unused @google/genai, express, dotenv, motion, @types/express, autoprefixer, direct esbuild and tsx dependencies. Added a reproducible pnpm lockfile and Node requirement.
- Removed unused Gemini placeholder configuration and strengthened ignore rules for environment files and local runtime data.
- Fixed Vite native config compatibility warning.

## Verification completed
- Production Vite build: PASS.
- TypeScript noEmit: PASS.
- Backend security suite: 6 tests PASS, including disabled operation, consent/origin/body validation, spam failure, provider failure, pending verification contract, and rate limiting. Tests use mocks, not live email recipients.
- Dependency audit with pnpm: zero reported vulnerabilities across resolved 137-package graph. Peer check: no compatibility issues. This is advisory-database coverage on this date, not a guarantee.
- Browser: Chrome, all 14 routes at 320, 375, 768, 1024 and 1440 pixels, 70 page/width combinations: no document horizontal overflow and no JavaScript page errors.
- Every image decoded successfully on all 14 pages.
- Get Involved navigation and mobile menu open/Escape close: PASS.
- Updates, contact, party contact and correction forms: no enabled data fields in the default build. Registration correctly states it is not open.
- Current source inspected and scanned for common credential patterns; no live credential detected. .env.example contained placeholders, not a real Gemini key.
- Reachable Git history contained two commits; the older tree contains only an AI Studio README, inspected separately. No credential found in that earlier file. No history rewrite was needed.
- No campaign articles, evidence entries, correspondence templates, manifesto or political claims edited.

## Still required before launch
1. Supply AI_STUDIO_SECURITY_AND_UX_BRIEF.md. It is absent from both repository and ZIP. Compliance with an unseen brief cannot be certified.
2. Repository owner/deployment administrator: deploy the frontend AND functions to Cloudflare Pages. Static drag-and-drop hosting alone does not run this backend. Bind D1 as ABUSE_DB and apply migrations/0001_abuse_limits.sql.
3. Email service administrator: configure a Brevo account, authenticated sender/domain, dedicated confirmed-subscriber list and a genuine DOI template using the provider's confirmation link. Disable tracking; create text attributes CONSENT_VERSION and CONSENT_AT and boolean EXPLICIT_CONSENT.
4. Store server-only BREVO_API_KEY, TURNSTILE_SECRET_KEY and RATE_LIMIT_SECRET (at least 32 random characters) as encrypted deployment secrets. Never use VITE_ prefixes for these.
5. Set server SITE_ORIGIN to the exact HTTPS origin, BREVO_LIST_ID and BREVO_DOI_TEMPLATE_ID. Leave REGISTRATION_ENABLED=false and PRIVACY_APPROVED=false until checks below pass.
6. Create a Turnstile widget restricted to the real hostname; set the PUBLIC site key as VITE_TURNSTILE_SITE_KEY.
7. The responsible privacy lead must approve the actual controller/contact details, privacy notice, explicit consent wording, processors, retention, deletion, international transfers and access permissions. Assess special-category political data handling. Existing privacy page was not rewritten or certified.
8. With an isolated test list and controlled test inboxes, test confirmation delivery, before/after membership, expired/reused links, duplicate addresses, provider outages, actual D1 concurrency, unsubscribe suppression, deletion and retention. Confirm newsletter sends only to verified contacts. A redirect to the updates page alone is not proof of verification.
9. Configure daily deletion of expired D1 abuse counters, including periods without traffic; the API also removes expired counters on requests. Review hosting/email logs so raw form bodies, email addresses and secrets are not logged.
10. Verify headers on the deployed origin, HTTPS, CSP compatibility, mobile/keyboard use with real Turnstile and production error handling. Perform an accessibility review beyond these smoke checks.
11. Only after privacy approval and staging tests, enable PRIVACY_APPROVED=true and REGISTRATION_ENABLED=true server-side, and VITE_REGISTRATION_ENABLED=true at build time. Rebuild/redeploy. Never enable merely because the build passes.
12. Contact, corrections and party intake each need their own reviewed backend and retention workflow before enabling.
13. Confirm the published contact inboxes and existing claims about operational security/accessibility. Those editorial statements were not certified by this technical review.

## Content approval boundary
No political editorial changes are proposed in this branch.
User-visible operational changes: header CTA, registration page, explicit consent wording, unavailable-form notices and honest pending-verification messages. Registration page wording replaced the old simulated integration/demo UI and is identified here for privacy-owner review. Do not open registration until that review passes.
Existing editorial/privacy pages may require factual or operational amendments, but those were left for approval.

## Credential incident handling
No exposed live key was identified, so none was rotated. This review cannot inspect hosting/account secrets, deleted Git refs, forks or external logs. If a real key is later found, revoke/rotate it at its provider first, remove it from source, then assess history cleanup. Deleting a key from the latest file does not revoke it.

## Primary implementation references
- https://developers.brevo.com/reference/create-doi-contact
- https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
- https://developers.cloudflare.com/pages/functions/

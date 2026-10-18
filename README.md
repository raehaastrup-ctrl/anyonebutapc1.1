# Anyone But APC

React/Vite frontend with a gated Cloudflare Pages registration function.

Read [SECURITY_REVIEW.md](SECURITY_REVIEW.md) before deployment. Registration is disabled by default. A successful build is not launch approval.

## Local checks
Use Node 22.12 or newer and pnpm 11.25.0:
- pnpm install --frozen-lockfile
- pnpm build
- pnpm test
- pnpm test:security
- pnpm audit
- pnpm peers check

## Deployment
Cloudflare Pages: build command pnpm build, output dist. Deploy functions/ alongside the static site; create ABUSE_DB and apply migrations/0001_abuse_limits.sql. Follow the server and public variable setup in SECURITY_REVIEW.md. Do not put private keys in VITE_ variables.

The two public/brand PNGs are original uploaded artwork and must remain unchanged. The repository ZIP did not contain the requested AI_STUDIO_SECURITY_AND_UX_BRIEF.md; obtain it before declaring acceptance.

The security report contains verification results, open configuration tasks and approval boundaries.

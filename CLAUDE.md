# Portfolio Site — CLAUDE.md

## What this is
Interactive personal portfolio for Sindhuja KS — Engineering Manager / Tech Lead / MaidLink co-founder.
Not just a project list: visitors can ask an AI assistant questions about her real work, grounded only
in public, verified career stories. Booking a call is a direct CTA in the Connect section.

Migrated 2026-07 from a static HTML/CSS/S3 site to Next.js on AWS Amplify Hosting — the AI assistant and
a future tailored-CV generator need server-side LLM calls a static site can't do alone. See the
`project_portfolio_v2_interactive` memory (Personal Branding repo) for the full decision history.

## Stack
- Next.js 16 (App Router, TypeScript), no CSS framework — `src/app/globals.css` carries the original
  hand-written design system verbatim.
- Hosting: AWS Amplify Hosting, auto-deploy on push to `main`.
- AI assistant: `POST /api/ask` (`src/app/api/ask/route.ts`) → AWS Bedrock, Claude Haiku, via
  `src/lib/bedrock.ts`. Model ID and region are env-configurable (`BEDROCK_MODEL_ID`, `BEDROCK_REGION`);
  default is the `us.anthropic.claude-haiku-4-5-*` inference profile in `us-east-1` — Bedrock requires an
  inference-profile ID for this model family, not a bare model ID.

## The privacy boundary — do not weaken this
The assistant may only answer from `src/data/public-knowledge.json`, a flattened export of
`creating-me/experiences/` and `creating-me/reflections/` files tagged `sensitivity: public` in the
private Personal Branding repo. That repo also holds `internal`/`private` material (a PIP/lawsuit story,
layoff financial detail) that must never reach this public codebase or its runtime.

- The export script lives in the **other** repo:
  `Personal Branding/creating-me/scripts/export-public-knowledge.mjs`. Run it there, review the printed
  title list, then hand-copy the resulting JSON over `src/data/public-knowledge.json` here.
- This is a **one-way, manual** sync on purpose — no cross-repo access at runtime, no CI wiring, so a
  newly-added sensitive story in the knowledge base can never leak here by accident.
- The system prompt in `src/lib/bedrock.ts` also instructs the model to answer only from the supplied
  stories and to decline (not guess) anything outside them — verified working: it correctly refuses
  PIP/lawsuit questions and stays grounded on in-scope ones.
- Known content gap: the AI Estimator (MaidLink's customer-facing feature — Bedrock + Nova Lite,
  $0.0012/analysis, stated in the `Building` section copy) isn't yet captured as its own canonical story
  in `creating-me/`, so the assistant can't cite that cost figure — it correctly says so rather than
  guessing. Worth a `/capture-story` pass if that gap should close.

## Key content facts (keep in sync with `src/components/*.tsx`)

- 14 years software engineering experience
- Co-founder of MaidLink — two-sided cleaning marketplace, Calgary CA
- Open to: Staff AI Engineer, Applied AI Engineer, Forward Deployed Engineer, Engineering Manager (AI) — remote, Canada or US
- MaidLink tech: AWS Lambda + Amazon Bedrock (Nova Lite), scheduling agent in progress
- Booking link (Connect section): Google Calendar appointment page, hardcoded in `src/components/Connect.tsx`
- LinkedIn: https://www.linkedin.com/in/sindhujaks/
- GitHub: https://github.com/sindhujaIBM

## Working in this repo
- `npm run dev` to run locally; `npm run build` before pushing anything nontrivial.
- Section content lives in `src/components/{Hero,About,Building,Code,Leadership,Writing,Connect,Footer}.tsx`
  — edit copy there, not in `page.tsx`.
- Push to `main` deploys via Amplify automatically — no GitHub Actions step needed.
- Old S3/CloudFront static pipeline is retired but the AWS resources (S3 bucket, CloudFront distribution,
  `portfolio-github-deploy` IAM role, SSM params under `/portfolio/`) have **not** been deleted yet —
  confirm with Sindhuja before tearing those down.
- Deferred: tailored CV generator (reuses `/sindhu-resume` skill logic against `public-knowledge.json`).
  Not built yet — don't assume it exists.

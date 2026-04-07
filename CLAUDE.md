# Portfolio Site — CLAUDE.md

## What this is
Static personal portfolio for Sindhuja KS — Engineering Manager / Tech Lead open to work.
Deployed to AWS S3 + CloudFront via GitHub Actions.

## Stack
- Pure HTML + CSS (no build step, no framework)
- AWS: S3 (hosting), CloudFront (CDN), SSM Parameter Store (config)
- CI/CD: GitHub Actions → OIDC auth → S3 sync + CloudFront invalidation
- Region: `ca-west-1`

## Deploy pipeline
Push to `main` triggers `.github/workflows/deploy.yml`:
1. Authenticates via OIDC (IAM role `arn:aws:iam::946839354953:role/portfolio-github-deploy`)
2. Reads S3 bucket + CloudFront distribution ID from SSM (`/portfolio/s3_bucket`, `/portfolio/cloudfront_distribution_id`)
3. Syncs files to S3, invalidates CloudFront cache

## Key content facts (keep in sync with index.html)
- 14 years software engineering experience
- Co-founder of MaidLink — two-sided cleaning marketplace, Calgary CA
- Open to: Engineering Manager / Tech Lead roles, remote, US or Canada
- MaidLink tech: AWS Lambda + Amazon Nova Lite, scheduling agent in progress
- LinkedIn: https://www.linkedin.com/in/sindhujaks/
- GitHub: https://github.com/sindhujaIBM

## Working in this repo
- Edit `index.html` and `style.css` directly — no build process
- Test locally by opening `index.html` in a browser
- Push to `main` to deploy
- Do not add frameworks, bundlers, or dependencies without discussion

# Amethyst & Ash

*Sober women, fully lit.* Website for Amethyst & Ash: body-led sobriety coaching and the Fully Lit Method.

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Where things live

- `src/content/site.ts`: most copy (offers, prices, pillars, testimonials, quiz, fit list). Anything in `[BRACKETS]` still needs filling in.
- `src/app/`: one folder per page (`about`, `method`, `work-with-me`, `midlife`, `quiz`, `scholarship`, `contact`, `disclaimer`).
- `src/app/globals.css`: brand colors and fonts.
- `src/app/actions.ts`: form handling. Submissions are only logged for now; connect an email or booking tool here.
- `src/components/`: header, footer, logo, forms and shared building blocks.

## Hosting

The site runs on AWS (Lambda + CloudFront) and deploys on every push to `main`. One-time setup and everyday use are in [infra/README.md](infra/README.md).

## Before launch

- Prices, program lengths and session frequency
- About page photo
- Connect the contact and scholarship forms to email or a CRM
- Quiz embed (ScoreApp or Interact) and email platform
- Domain (update `site.url` in `src/content/site.ts`)
- Lawyer review of the disclaimer

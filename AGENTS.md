# Project Guidelines

## Overview

This repository is a Nuxt 3 personal portfolio deployed as a static site to
GitHub Pages. The application is server-rendered during generation, with
English and Arabic portfolio content loaded from JSON through a Nitro API
endpoint. Keep generated `.nuxt/` and `.output/` files out of source changes.

## Architecture

- `pages/index.vue` is the main page and owns portfolio loading, locale
  switching, theme switching, SEO metadata, and section observation.
- `components/portfolio/` contains presentational Vue components. Pass content
  and theme classes through props rather than duplicating page-level state.
- `composables/`, `controllers/`, and `services/` contain the client-side
  composition/state boundary:
  `usePortfolio()` exposes the `PortfolioController`, which uses
  `PortfolioService` to fetch locale data.
- `server/api/portfolio/[locale].get.js` validates locales and serves
  `server/data/portfolio/en.json` or `ar.json`.
- `constants/locales.js` is the shared source for supported locales and
  locale metadata.
- `nuxt.config.js` configures Tailwind, motion, SSR/static Nitro output, and
  prerendered locale API routes.
- `.github/workflows/deploy.yml` installs with pnpm, generates the static site,
  and publishes `.output/public` to GitHub Pages on pushes to `main`.

## Build and Run

Use Node.js 20 (the CI workflow uses Node 20) and pnpm 9:

```bash
pnpm install --frozen-lockfile
pnpm dev
pnpm build
pnpm generate
pnpm preview
```

`pnpm dev` starts the local server at `http://localhost:3000`.
`pnpm generate` is the deployment-oriented static build, and `pnpm preview`
builds and serves a production preview. The repository currently has no test
runner or lint/format script; at minimum, run `pnpm build` or `pnpm generate`
after application changes. The equivalent npm commands work when dependencies
are already installed, but pnpm is the canonical package manager because
`pnpm-lock.yaml` is committed and CI uses pnpm.

## Code Conventions

- Follow the existing Vue 3 `<script setup>` and Composition API patterns.
- Use Nuxt aliases such as `~/components/...` and Nuxt auto-imports where the
  surrounding file already does so.
- Keep reusable UI in components and keep content in the locale JSON files;
  do not hard-code translated portfolio copy in templates.
- Preserve both `en` and `ar` content, including `dir`, RTL behavior, and
  locale-aware document metadata, when changing portfolio data or UI.
- Use Tailwind utility classes and the existing `themeStyles` pattern for
  light/dark styling. Avoid introducing a second styling or state-management
  system without a clear need.
- Existing source is JavaScript with Nuxt-generated TypeScript configuration;
  preserve the current style and add types incrementally rather than
  converting unrelated files.
- Use four-space indentation in Vue and JavaScript files, single quotes in
  JavaScript, and semicolons only where the existing file requires them.
- Do not edit generated files under `.nuxt/` or `.output/`; update source,
  configuration, or content instead.

## Safe Validation

For locale or data changes, verify both `/api/portfolio/en` and
`/api/portfolio/ar` in a generated or development build. For UI changes,
check both themes and both locales, especially Arabic RTL layout and mobile
breakpoints. Keep deployment behavior compatible with the static Nitro preset
and GitHub Pages base path.

## Current Follow-up Areas

The tracked `TODO.md` identifies likely future work: add an experience
section, improve mobile responsiveness and social buttons, migrate source to
TypeScript, and investigate the deployed locale-switching failure. Treat the
locale deployment issue as higher risk than content-only changes and reproduce
it against a generated static build before changing routing or base paths.

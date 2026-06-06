# Axone Technical Reference Agent Instructions

You are working in the Axone technical reference repository.

This repository is no longer an editorial documentation portal. It hosts a Docusaurus site dedicated to deep, versioned technical reference material synchronized from Axone implementation repositories.

## Repository Purpose

- Publish <https://docs.axone.xyz>.
- Keep generated technical references versioned and searchable.
- Preserve synchronization with upstream Axone repositories.
- Avoid adding onboarding, tutorial, FAQ, whitepaper, marketing, or explanatory editorial content.

## Repository Structure

- `commands/`, `modules/`, `predicates/` -> synchronized from `axone-protocol/axoned`
- `contracts/` -> synchronized from `axone-protocol/contracts`
- `ontology/` -> synchronized from `axone-protocol/ontology`
- `*_versioned_docs/`, `*_versioned_sidebars/`, `*_versions.json` -> Docusaurus version snapshots for synchronized references
- `src/pages/index.js` -> root technical reference landing page
- `src/scss/` -> site styling
- `src/theme/` -> Docusaurus theme overrides
- `.github/sync-external-docs-sources.json` -> upstream source manifest
- `.github/scripts/sync-external-docs.mjs` -> synchronization script
- `docusaurus.config.js` -> Docusaurus configuration and technical docs plugin instances

There is intentionally no `docs/` content tree.

## Content Rules

- Do not hand-edit synchronized content unless explicitly asked to perform a generated-docs maintenance task.
- Prefer fixing upstream source repositories when generated reference content is wrong.
- Do not add editorial sections such as getting started, tutorials, FAQ, architecture primers, whitepaper pages, or contributor guides to this repository.
- Keep the five Docusaurus docs plugin ids stable: `commands`, `contracts`, `modules`, `ontology`, `predicates`.
- Keep the technical route families stable unless a user explicitly requests a breaking route migration:
  `/commands`, `/contracts`, `/modules`, `/ontology`, `/predicates`.

## Platform Rules

- Docusaurus runs with the default docs plugin disabled; technical references are served by separate docs plugin instances.
- The canonical URL is `https://docs.axone.xyz`.
- Removed legacy editorial URLs should 404 unless a future redirect map is explicitly requested with concrete destinations.
- Keep local search scoped to the technical reference sections.
- Preserve version dropdown behavior for technical docs pages.

## Development Commands

- Install dependencies with `yarn --frozen-lockfile`.
- Start local development with `yarn start`.
- Build with `yarn build`.
- Run local lint with `yarn lint`.
- Validate external sync with `yarn sync:external-docs:dry-run`.

## CI/CD Rules

- Keep build, lint, sync, screenshot, dependency, and notification workflows functional.
- Do not reintroduce documentation bundle generation for editorial exports.
- Markdown lint and auto-fix workflows must ignore synchronized/generated reference content.
- Every Docusaurus configuration change should be validated with `yarn build`.

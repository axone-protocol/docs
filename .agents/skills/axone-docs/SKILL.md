---
name: axone-docs
description: Work in the Axone technical reference Docusaurus site. Use when editing pages, styling, components, or Docusaurus configuration. Most content is synchronized from external repos—only the landing page and theme are authored here.
---

# Axone Technical Reference Site

This Docusaurus site publishes <https://docs.axone.xyz> with versioned technical reference material synchronized from Axone implementation repositories.

## What you CAN edit

- `src/pages/` — landing page and custom pages
- `src/scss/` — site styling
- `src/theme/` — Docusaurus theme overrides
- `src/components/` — React components
- `docusaurus.config.js` — Docusaurus configuration

## What you must NOT edit

These directories are **synchronized from upstream repos** — changes will be overwritten:

| Directory | Source |
|-----------|--------|
| `commands/`, `modules/`, `predicates/` | `axone-protocol/axoned` |
| `contracts/` | `axone-protocol/contracts` |
| `ontology/` | `axone-protocol/ontology` |
| `*_versioned_docs/`, `*_versioned_sidebars/` | Version snapshots (auto-generated) |

If synced content is wrong, fix it in the upstream source repository.

## Development commands

```bash
yarn --frozen-lockfile   # Install dependencies
yarn start               # Local dev server
yarn build               # Production build
yarn lint                # Run linter
yarn sync:external-docs:dry-run  # Validate sync config
```

Validate every Docusaurus config change with `yarn build`.

## Gotchas

- **No `docs/` directory** — The default docs plugin is disabled. Technical references are served by five separate docs plugin instances: `commands`, `contracts`, `modules`, `ontology`, `predicates`.
- **No editorial content** — Do not add getting-started guides, tutorials, FAQs, whitepapers, or contributor guides. This repo is technical reference only.
- **Keep route families stable** — `/commands`, `/contracts`, `/modules`, `/ontology`, `/predicates`. Do not change without explicit user request.
- **Keep plugin IDs stable** — The five docs plugin IDs must remain: `commands`, `contracts`, `modules`, `ontology`, `predicates`.
- **Sync pipeline** — `.github/sync-external-docs-sources.json` defines upstream sources; `.github/scripts/sync-external-docs.mjs` performs synchronization.
- **Markdown lint ignores synced content** — Auto-fix workflows skip synchronized directories.

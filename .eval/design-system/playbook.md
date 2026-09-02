# Design system playbook

This design system is built on a centralized token file (tokens.css) defining color, spacing, radius, shadow, and typography primitives. Components are organized into three tiers: reusable UI primitives (Button, Card, Select, TextArea), layout scaffolding (Navbar, Sidebar), and feature modules (chat, blog, captions, summarizer, translator) composed within page-level containers (Landing, Studio) under the App root. A legacy stats widget remains outside the current token conventions and should be migrated.

## Deviations

The deviation check scanned 43 file(s) for hardcoded colors bypassing tokens.

Found 4 hardcoded color literal(s):

- `client/src/styles/global.css`:136 — `#0b0b10` — duplicates `--color-bg`
- `client/src/styles/global.css`:379 — `#0b0b10` — duplicates `--color-bg`
- `client/src/components/LegacyStatsWidget.tsx`:30 — `#8b5cf6` — duplicates `--color-accent-a`
- `client/src/pages/Landing.tsx`:54 — `#fb7185`

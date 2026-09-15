# Design system playbook

This design system is driven by a central token catalog (tokens.css) covering color, spacing, radius, shadow, and typography primitives. Tokens are consumed by a layered component architecture: reusable UI primitives (Button, Card, Select, TextArea), layout shells (Navbar, Sidebar), feature modules (blog, captions, chat, summarizer, translator), and page-level compositions (Landing, Studio). The tokens are grouped below by semantic role so themes and refactors can target consistent axes.

## Deviations

The deviation check scanned 43 file(s) for hardcoded colors bypassing tokens.

Found 4 hardcoded color literal(s):

- `client/src/styles/global.css`:136 — `#0b0b10` — duplicates `--color-bg`
- `client/src/styles/global.css`:379 — `#0b0b10` — duplicates `--color-bg`
- `client/src/components/LegacyStatsWidget.tsx`:30 — `#8b5cf6` — duplicates `--color-accent-a`
- `client/src/pages/Landing.tsx`:54 — `#fb7185`

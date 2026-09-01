# Design system playbook

A design token catalog for an AI content studio application, organized into color, spacing, radius, shadow, and typography scales. Tokens are defined in a single tokens.css file and consumed across layout primitives (Navbar, Sidebar), reusable UI components (Button, Card, Select, TextArea), and feature modules (chat, blog, captions, summarizer, translator). Components are grouped by role: app shell, primitive UI kit, and feature panels.

## Deviations

The deviation check scanned 43 file(s) for hardcoded colors bypassing tokens.

Found 4 hardcoded color literal(s):

- `client/src/styles/global.css`:136 — `#0b0b10` — duplicates `--color-bg`
- `client/src/styles/global.css`:379 — `#0b0b10` — duplicates `--color-bg`
- `client/src/components/LegacyStatsWidget.tsx`:30 — `#8b5cf6` — duplicates `--color-accent-a`
- `client/src/pages/Landing.tsx`:54 — `#fb7185`

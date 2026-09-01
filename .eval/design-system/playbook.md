# Design system playbook

This design system is built on a CSS custom-property token catalog (client/src/styles/tokens.css) spanning color, spacing, radius, shadow, and typography. Tokens feed a set of primitive UI components (Button, Card, Select, TextArea), layout shells (Navbar, Sidebar), and AI feature modules (chat, blog, captions, summarizer, translator) composed into pages (Landing, Studio) under a root App. Tokens are organized into semantic surface/text colors, accent and status colors, a spacing scale, a radius scale, elevation shadows, and font/type-size definitions.

## Deviations

The deviation check scanned 43 file(s) for hardcoded colors bypassing tokens.

Found 4 hardcoded color literal(s):

- `client/src/styles/global.css`:136 — `#0b0b10` — duplicates `--color-bg`
- `client/src/styles/global.css`:379 — `#0b0b10` — duplicates `--color-bg`
- `client/src/components/LegacyStatsWidget.tsx`:30 — `#8b5cf6` — duplicates `--color-accent-a`
- `client/src/pages/Landing.tsx`:54 — `#fb7185`

# Design tokens

This design system is built on a centralized token file (tokens.css) defining color, spacing, radius, shadow, and typography primitives. Components are organized into three tiers: reusable UI primitives (Button, Card, Select, TextArea), layout scaffolding (Navbar, Sidebar), and feature modules (chat, blog, captions, summarizer, translator) composed within page-level containers (Landing, Studio) under the App root. A legacy stats widget remains outside the current token conventions and should be migrated.

_Values are extracted mechanically from the theme files (verbatim); grouping/descriptions are AI-organized._

## Surface & Background Colors

Base, raised, and sunken surface colors used for page backgrounds, cards, and inset areas.

| token | value | source |
| --- | --- | --- |
| `--color-bg` | `#0b0b10` | `client/src/styles/tokens.css`:4 |
| `--color-bg-raised` | `#16151d` | `client/src/styles/tokens.css`:5 |
| `--color-bg-sunken` | `#08070c` | `client/src/styles/tokens.css`:6 |

## Text & Border Colors

Foreground ink colors for primary and muted text, plus the standard border color.

| token | value | source |
| --- | --- | --- |
| `--color-ink` | `#f4f3f7` | `client/src/styles/tokens.css`:7 |
| `--color-ink-muted` | `#9b98a8` | `client/src/styles/tokens.css`:8 |
| `--color-border` | `#26242f` | `client/src/styles/tokens.css`:9 |

## Accent & Status Colors

Brand accent colors and semantic status colors for success and danger states.

| token | value | source |
| --- | --- | --- |
| `--color-accent-a` | `#8b5cf6` | `client/src/styles/tokens.css`:10 |
| `--color-accent-b` | `#22d3ee` | `client/src/styles/tokens.css`:11 |
| `--color-good` | `#34d399` | `client/src/styles/tokens.css`:12 |
| `--color-danger` | `#f87171` | `client/src/styles/tokens.css`:13 |

## Spacing Scale

Incremental spacing steps for padding, margins, and gaps across layouts and components.

| token | value | source |
| --- | --- | --- |
| `--space-1` | `4px` | `client/src/styles/tokens.css`:16 |
| `--space-2` | `8px` | `client/src/styles/tokens.css`:17 |
| `--space-3` | `12px` | `client/src/styles/tokens.css`:18 |
| `--space-4` | `16px` | `client/src/styles/tokens.css`:19 |
| `--space-5` | `24px` | `client/src/styles/tokens.css`:20 |
| `--space-6` | `32px` | `client/src/styles/tokens.css`:21 |
| `--space-8` | `48px` | `client/src/styles/tokens.css`:22 |
| `--space-10` | `64px` | `client/src/styles/tokens.css`:23 |

## Border Radius

Corner radius values from small to fully rounded for cards, inputs, and pills.

| token | value | source |
| --- | --- | --- |
| `--radius-sm` | `8px` | `client/src/styles/tokens.css`:26 |
| `--radius-md` | `14px` | `client/src/styles/tokens.css`:27 |
| `--radius-lg` | `20px` | `client/src/styles/tokens.css`:28 |
| `--radius-full` | `999px` | `client/src/styles/tokens.css`:29 |

## Elevation / Shadows

Shadow tokens for card elevation and accent glow effects.

| token | value | source |
| --- | --- | --- |
| `--shadow-card` | `0 1px 0 rgba(255, 255, 255, 0.04) inset, 0 20px 60px rgba(0, 0, 0, 0.45)` | `client/src/styles/tokens.css`:32 |
| `--shadow-glow` | `0 0 0 1px rgba(139, 92, 246, 0.35), 0 0 32px rgba(139, 92, 246, 0.25)` | `client/src/styles/tokens.css`:33 |

## Typography

Display and body font families plus small and large text scale tokens.

| token | value | source |
| --- | --- | --- |
| `--font-display` | `'Space Grotesk', 'Sora', ui-sans-serif, sans-serif` | `client/src/styles/tokens.css`:36 |
| `--font-body` | `'Inter', -apple-system, BlinkMacSystemFont, sans-serif` | `client/src/styles/tokens.css`:37 |
| `--text-sm` | `13px` | `client/src/styles/tokens.css`:38 |
| `--text-lg` | `19px` | `client/src/styles/tokens.css`:39 |

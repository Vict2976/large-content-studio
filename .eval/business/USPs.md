# Unique selling propositions

_Each USP is sourced to a business document (verbatim) and mapped to the components that deliver it._

## Five workflows in one studio

Otto lets a marketing team write, summarize, translate, caption and plan in one place, without switching tabs between five products.

- **Sources:**
  - `about-page.html` — "One studio, five workflows, zero context switching is the whole idea."
  - `company-overview.md` — "Our product bundles five workflows into one studio: a blog writer, a chat agent called Otto, a summarizer, a translator and a caption generator."
  - `positioning.md` — "Otto lets a marketing team write, summarize, translate, caption and plan in one place, without switching tabs between five products."
- **Delivered by:** `client/src/pages/Studio::Studio`

## Drafts in the team's own brand voice

The blog writer produces long-form drafts in the team's own brand voice from just a topic and a tone, so the first draft already sounds like the company instead of like a template.

- **Sources:**
  - `positioning.md` — "The blog writer produces long-form drafts in the team's own brand voice from just a topic and a tone, so the first draft already sounds like the company instead of like a template."
  - `company-overview.md` — "Every workflow runs on the same content-marketing persona, so a team gets one voice across everything it ships."
- **Delivered by:** `client/src/features/blog/BlogEditor::BlogEditor`

## Agent that plans before it acts

Chat with Otto is an agent that plans multi-step content tasks before it acts, so a user sees the plan and can stop it before anything is produced.

- **Sources:**
  - `positioning.md` — "Chat with Otto is an agent that plans multi-step content tasks before it acts, which means a user sees the plan and can stop it before anything is produced."
  - `content-rules.md` — "Otto, the agent, must always show its plan before acting on a multi-step task."
- **Delivered by:** `client/src/features/chat/ChatWindow::ChatWindow`

## Summaries a team will actually read

The summarizer turns any document into five bullets a team will actually read, instead of a summary as long as the source.

- **Sources:**
  - `positioning.md` — "The summarizer turns any document into five bullets a team will actually read, instead of a summary that is as long as the source."
- **Delivered by:** `client/src/features/summarizer/SummarizerPanel::SummarizerPanel`

## Tone- and idiom-aware translation

The translator is tone- and idiom-aware, so a caption keeps its punch in the target language instead of arriving word-for-word and flat.

- **Sources:**
  - `positioning.md` — "The translator is tone- and idiom-aware, so a caption keeps its punch in the target language instead of arriving word-for-word and flat."
  - `goals-2026.md` — "The aim for translation is fidelity of tone, not just of words."
- **Delivered by:** `client/src/features/translator/TranslatorForm::TranslatorForm`

## On-brand captions from a one-line description

The caption generator writes punchy, on-brand social captions from a one-line description, with one emoji and a call to action, so a social media manager can post from their phone.

- **Sources:**
  - `positioning.md` — "The caption generator writes punchy, on-brand social captions from a one-line description, with one emoji and a call to action, so a social media manager can post from their phone."
- **Delivered by:** `client/src/features/captions/CaptionGenerator::CaptionGenerator`

## Human-in-the-loop before anything leaves

Everything the studio produces is shown to a person before it leaves the tool; nothing is published automatically, because a wrong post is more expensive than a slow one.

- **Sources:**
  - `positioning.md` — "Everything the studio produces is shown to a person before it leaves the tool."
  - `positioning.md` — "Nothing is published automatically, because a wrong post is more expensive than a slow one."
- **Delivered by:** `client/src/features/blog/BlogPreview::BlogPreview`

## One voice across everything a team ships

Every workflow runs on the same content-marketing persona, so a team gets one voice across everything it ships.

- **Sources:**
  - `company-overview.md` — "Every workflow runs on the same content-marketing persona, so a team gets one voice across everything it ships."
  - `about-page.html` — "We help them ship more without sounding like more people wrote it."
- **Delivered by:** _no linked components_

## Gaps

_None — all material was sourced._

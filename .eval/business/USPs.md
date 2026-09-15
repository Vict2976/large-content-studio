# Unique selling propositions

_Each USP is sourced to a business document (verbatim) and mapped to the components that deliver it._

## Five workflows in one studio

Otto bundles a blog writer, chat agent, summarizer, translator and caption generator into one workspace, so a marketing team can write, summarize, translate, caption and plan in one place without switching between tabs or tools.

- **Sources:**
  - `about-page.html` — "One studio, five workflows, zero context switching is the whole idea."
  - `company-overview.md` — "We build one AI workspace for marketing teams who publish every week and are tired of switching between five tools to do it."
  - `company-overview.md` — "Our product bundles five workflows into one studio: a blog writer, a chat agent called Otto, a summarizer, a translator and a caption generator."
  - `positioning.md` — "Otto lets a marketing team write, summarize, translate, caption and plan in one place, without switching tabs between five products."
- **Delivered by:** `client/src/pages/Studio::Studio`, `client/src/features/blog/BlogEditor::BlogEditor`, `client/src/features/chat/ChatWindow::ChatWindow`, `client/src/features/summarizer/SummarizerPanel::SummarizerPanel`, `client/src/features/translator/TranslatorForm::TranslatorForm`, `client/src/features/captions/CaptionGenerator::CaptionGenerator`

## One brand voice across everything

Every workflow runs on the same content-marketing persona, set once per team and shared across all workflows, so a team gets one consistent voice across everything it ships.

- **Sources:**
  - `company-overview.md` — "Every workflow runs on the same content-marketing persona, so a team gets one voice across everything it ships."
  - `glossary.md` — "Voice refers to the brand persona every workflow writes in; it is set once per team and shared across all workflows."
- **Delivered by:** `client/src/features/blog/BlogEditor::BlogEditor`, `client/src/features/captions/CaptionGenerator::CaptionGenerator`

## Blog drafts in the team's own voice from a topic and tone

The blog writer produces long-form drafts in the team's own brand voice from just a topic and a tone, so the first draft already sounds like the company instead of like a template.

- **Sources:**
  - `positioning.md` — "The blog writer produces long-form drafts in the team's own brand voice from just a topic and a tone, so the first draft already sounds like the company instead of like a template."
- **Delivered by:** `client/src/features/blog/BlogEditor::BlogEditor`, `client/src/features/blog/BlogPreview::BlogPreview`

## An agent that plans before it acts

Chat with Otto is an agent that plans multi-step content tasks before acting, so a user sees the plan and can stop it before anything is produced or sent.

- **Sources:**
  - `positioning.md` — "Chat with Otto is an agent that plans multi-step content tasks before it acts, which means a user sees the plan and can stop it before anything is produced."
  - `content-rules.md` — "Otto, the agent, must always show its plan before acting on a multi-step task."
  - `content-rules.md` — "It cannot send, post or publish anything without a person confirming the plan."
- **Delivered by:** `client/src/features/chat/ChatWindow::ChatWindow`, `client/src/features/chat/MessageInput::MessageInput`, `client/src/features/chat/MessageList::MessageList`

## Summaries teams will actually read

The summarizer turns any document into five bullets a team will actually read, instead of a summary as long as the source.

- **Sources:**
  - `positioning.md` — "The summarizer turns any document into five bullets a team will actually read, instead of a summary that is as long as the source."
  - `content-rules.md` — "A summary must have no more than five bullet points, and each bullet must be under twenty words."
- **Delivered by:** `client/src/features/summarizer/SummarizerPanel::SummarizerPanel`

## Tone- and idiom-aware translation

The translator preserves tone and idiom, so a caption keeps its punch in the target language instead of arriving word-for-word and flat.

- **Sources:**
  - `positioning.md` — "The translator is tone- and idiom-aware, so a caption keeps its punch in the target language instead of arriving word-for-word and flat."
  - `content-rules.md` — "Translations should preserve tone and idiom, and must never add content that was not in the source."
- **Delivered by:** `client/src/features/translator/TranslatorForm::TranslatorForm`

## On-brand captions you can post from your phone

The caption generator writes punchy, on-brand social captions from a one-line description, with one emoji and a call to action, so a social media manager can post from their phone.

- **Sources:**
  - `positioning.md` — "The caption generator writes punchy, on-brand social captions from a one-line description, with one emoji and a call to action, so a social media manager can post from their phone."
  - `content-rules.md` — "A caption must include exactly one relevant emoji and must end with a call to action."
- **Delivered by:** `client/src/features/captions/CaptionGenerator::CaptionGenerator`

## Nothing leaves without a human seeing it

Everything the studio produces is shown to a person before it leaves the tool; nothing is published automatically, because a wrong post is more expensive than a slow one.

- **Sources:**
  - `positioning.md` — "Everything the studio produces is shown to a person before it leaves the tool."
  - `positioning.md` — "Nothing is published automatically, because a wrong post is more expensive than a slow one."
- **Delivered by:** _no linked components_

## Gaps

_None — all material was sourced._

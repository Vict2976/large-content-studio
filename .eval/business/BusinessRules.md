# Business rules

_Each rule is sourced verbatim, marked verifiable (yes/no), and linked to the components it governs._

### Rule 1

Every blog draft must be written as direct declarative or imperative sentences.

- **Verifiable:** ✅ yes
- **Sources:**
  - `content-rules.md` — "Every blog draft must be written as direct declarative or imperative sentences."
- **Components:** `client/src/features/blog/BlogEditor::BlogEditor`

### Rule 2

A blog draft, its headline and subheadings must never contain hedging words such as "might", "perhaps", "maybe" or "it depends".

- **Verifiable:** ✅ yes
- **Sources:**
  - `content-rules.md` — "The writer must never hedge, so words like "might", "perhaps", "maybe" and "it depends" cannot appear in a draft, its headline or its subheadings."
- **Components:** `client/src/features/blog/BlogEditor::BlogEditor`

### Rule 3

A draft must never contain placeholder text, square brackets, angle brackets or fill-in markers such as "[product name]".

- **Verifiable:** ✅ yes
- **Sources:**
  - `content-rules.md` — "A draft must never contain placeholder text."
  - `content-rules.md` — "Square brackets, angle brackets and fill-in markers such as "[product name]" are not allowed; the writer must commit to concrete wording."
- **Components:** `client/src/features/blog/BlogEditor::BlogEditor`

### Rule 4

A draft must never refer to itself or its own structure, and cannot mention the introduction, conclusion or call to action.

- **Verifiable:** ✅ yes
- **Sources:**
  - `content-rules.md` — "A draft must never refer to itself or its own structure."
  - `content-rules.md` — "It cannot mention the introduction, the conclusion or the call to action, and it should not announce what it is about to do."
- **Components:** `client/src/features/blog/BlogEditor::BlogEditor`

### Rule 5

Every blog draft should end with a direct instruction to the reader, without naming it as a call to action.

- **Verifiable:** ✅ yes
- **Sources:**
  - `content-rules.md` — "Every blog draft should end with a direct instruction to the reader, without naming it as a call to action."
- **Components:** `client/src/features/blog/BlogEditor::BlogEditor`

### Rule 6

A summary must have no more than five bullet points, and each bullet must be under twenty words.

- **Verifiable:** ✅ yes
- **Sources:**
  - `content-rules.md` — "A summary must have no more than five bullet points, and each bullet must be under twenty words."
- **Components:** `client/src/features/summarizer/SummarizerPanel::SummarizerPanel`

### Rule 7

A caption must include exactly one relevant emoji and must end with a call to action.

- **Verifiable:** ✅ yes
- **Sources:**
  - `content-rules.md` — "A caption must include exactly one relevant emoji and must end with a call to action."
- **Components:** `client/src/features/captions/CaptionGenerator::CaptionGenerator`

### Rule 8

Every request to the studio's API requires an API key in the x-api-key header.

- **Verifiable:** ✅ yes
- **Sources:**
  - `content-rules.md` — "Every request to the studio's API requires an API key in the x-api-key header."
- **Components:** _no linked components_

### Rule 9

A request without an API key must be refused with a 401 and must never reach a model.

- **Verifiable:** ✅ yes
- **Sources:**
  - `content-rules.md` — "A request without one must be refused with a 401 and must never reach a model."
- **Components:** _no linked components_

### Rule 10

Otto must always show its plan before acting on a multi-step task.

- **Verifiable:** ✅ yes
- **Sources:**
  - `content-rules.md` — "Otto, the agent, must always show its plan before acting on a multi-step task."
  - `goals-2026.md` — "Otto plans before it acts, and every plan is shown to the user before anything runs, in order to keep a person in control of what gets sent."
- **Components:** `client/src/features/chat/ChatWindow::ChatWindow`

### Rule 11

Otto cannot send, post or publish anything without a person confirming the plan.

- **Verifiable:** ✅ yes
- **Sources:**
  - `content-rules.md` — "It cannot send, post or publish anything without a person confirming the plan."
  - `positioning.md` — "Everything the studio produces is shown to a person before it leaves the tool."
  - `positioning.md` — "Nothing is published automatically, because a wrong post is more expensive than a slow one."
- **Components:** `client/src/features/chat/ChatWindow::ChatWindow`

### Rule 12

Translations must preserve tone and idiom, and must never add content that was not in the source.

- **Verifiable:** ✅ yes
- **Sources:**
  - `content-rules.md` — "Translations should preserve tone and idiom, and must never add content that was not in the source."
- **Components:** `client/src/features/translator/TranslatorForm::TranslatorForm`

## Gaps

_None — all material was sourced._

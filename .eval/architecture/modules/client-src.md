# Module: client/src

React-based frontend for Otto Content Studio, a multi-workflow AI application providing blog writing, chat, summarization, translation, and caption generation in a single unified workspace.

## Key files
- `client/src/App.tsx` — Root router component defining Landing and Studio page routes
- `client/src/pages/Studio.tsx` — Main studio interface housing all five content generation workflows with tab-based navigation
- `client/src/features/blog/useBlogGenerator.ts` — Hook managing blog generation via /api/blog/generate endpoint
- `client/src/features/chat/useChatSession.ts` — Hook managing multi-turn chat via /api/agent endpoint
- `client/src/features/summarizer/useSummarizer.ts` — Hook managing summarization via /api/summarize endpoint
- `client/src/features/translator/useTranslate.ts` — Hook managing translation via /api/translate endpoint
- `client/src/features/captions/useCaption.ts` — Hook managing caption generation via /api/caption endpoint
- `client/src/lib/api.ts` — Shared HTTP utility for POST requests to backend APIs

## Public interface
- App (default export)
- Landing
- Studio
- ChatWindow
- CaptionGenerator
- BlogEditor
- BlogPreview
- SummarizerPanel
- TranslatorForm
- Navbar
- Sidebar
- LegacyStatsWidget
- Button
- Card
- Select
- TextArea

## Dependencies
- react
- react-router-dom
- react-dom

## AI touchpoints [AI]
- `client/src/features/blog/useBlogGenerator.ts`
- `client/src/features/chat/useChatSession.ts`
- `client/src/features/summarizer/useSummarizer.ts`
- `client/src/features/translator/useTranslate.ts`
- `client/src/features/captions/useCaption.ts`

## Open questions
- What backend service implements /api/blog/generate, /api/agent, /api/summarize, /api/translate, and /api/caption endpoints?
- Is the hardcoded 'demo-key' for x-api-key header used in production or only for development?
- How does the /api/agent endpoint handle multi-step planning before execution?
- Are there rate limits or cost controls for the five generation workflows?
- Is the LegacyStatsWidget's hardcoded totalGenerations=128 a placeholder or connected to actual backend metrics?

# Module: client/src

React frontend for Otto, a multi-workflow AI content studio supporting blog writing, chat, summarization, translation, and image captioning

## Key files
- `client/src/App.tsx` — Root router component defining Landing and Studio pages
- `client/src/pages/Studio.tsx` — Main application shell with tab-based workflow switching
- `client/src/lib/api.ts` — HTTP client for backend API calls
- `client/src/types.ts` — TypeScript interfaces for chat messages

## Public interface
- App (default export from App.tsx)
- Landing (client/src/pages/Landing.tsx)
- Studio (client/src/pages/Studio.tsx)
- Navbar (client/src/components/layout/Navbar.tsx)
- Sidebar (client/src/components/layout/Sidebar.tsx)
- BlogEditor (client/src/features/blog/BlogEditor.tsx)
- ChatWindow (client/src/features/chat/ChatWindow.tsx)
- SummarizerPanel (client/src/features/summarizer/SummarizerPanel.tsx)
- TranslatorForm (client/src/features/translator/TranslatorForm.tsx)
- CaptionGenerator (client/src/features/captions/CaptionGenerator.tsx)
- Button, Card, Select, TextArea (client/src/components/ui/)
- LegacyStatsWidget (client/src/components/LegacyStatsWidget.tsx)

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
- What LLM model powers each endpoint (/api/blog/generate, /api/agent, /api/summarize, /api/translate, /api/caption)?
- How does the /api/agent endpoint implement multi-step planning before execution?
- What prompt engineering or system instructions are used for tone-aware translation versus generic translation?
- Is the demo-key hardcoded in production or replaced at deployment?
- How are user generations tracked and what is the backend implementation of the stats widget?

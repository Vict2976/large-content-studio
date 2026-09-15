# Module: client/src

React-based frontend UI for Otto, a multi-workflow AI content studio with five features: blog writing, chat agent, summarization, translation, and caption generation. Provides landing page and integrated studio workspace with tab-based navigation.

## Key files
- `client/src/App.tsx` — Root router component that renders Landing and Studio pages
- `client/src/pages/Studio.tsx` — Main studio workspace layout with tab-based feature switching
- `client/src/pages/Landing.tsx` — Marketing landing page showcasing the five Otto workflows
- `client/src/lib/api.ts` — HTTP client utility for POST requests to backend API endpoints

## Public interface
- App (default export from client/src/App.tsx)
- Landing (from client/src/pages/Landing.tsx)
- Studio (from client/src/pages/Studio.tsx)
- BlogEditor, BlogPreview (from client/src/features/blog/)
- ChatWindow (from client/src/features/chat/ChatWindow.tsx)
- SummarizerPanel (from client/src/features/summarizer/SummarizerPanel.tsx)
- TranslatorForm (from client/src/features/translator/TranslatorForm.tsx)
- CaptionGenerator (from client/src/features/captions/CaptionGenerator.tsx)
- Navbar, Sidebar (from client/src/components/layout/)
- Button, Card, Select, TextArea (from client/src/components/ui/)
- postJson (from client/src/lib/api.ts)

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
- What is the backend implementation and routing for /api/blog/generate, /api/agent, /api/summarize, /api/translate, and /api/caption endpoints?
- How does the chat agent at /api/agent handle multi-step planning before execution?
- What model(s) or LLM service(s) power each of the five workflows?
- What authentication/authorization scheme does the 'x-api-key: demo-key' header represent?
- Why is LegacyStatsWidget implemented as a class component while the rest of the app uses hooks?

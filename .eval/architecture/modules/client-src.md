# Module: client/src

React-based frontend for Otto, an AI content studio offering five workflows (blog writing, chat, summarizing, translation, captioning) in a unified workspace with tab-based navigation

## Key files
- `client/src/App.tsx` — Root router component defining Landing and Studio page routes
- `client/src/pages/Studio.tsx` — Main application shell with tab-based workflow switching and layout composition
- `client/src/lib/api.ts` — Shared HTTP client utility for POST requests to backend API endpoints

## Public interface
- App (default export from App.tsx)
- Landing (from pages/Landing.tsx)
- Studio (from pages/Studio.tsx)
- Navbar (from components/layout/Navbar.tsx)
- Sidebar (from components/layout/Sidebar.tsx)
- BlogEditor, BlogPreview (from features/blog/)
- ChatWindow (from features/chat/ChatWindow.tsx)
- SummarizerPanel (from features/summarizer/SummarizerPanel.tsx)
- TranslatorForm (from features/translator/TranslatorForm.tsx)
- CaptionGenerator (from features/captions/CaptionGenerator.tsx)
- Button, Card, Select, TextArea (from components/ui/)
- LegacyStatsWidget (from components/LegacyStatsWidget.tsx)
- useDebounce (from hooks/useDebounce.ts)

## Dependencies
- react
- react-router-dom
- react-dom

## AI touchpoints [AI]
- `client/src/features/blog/useBlogGenerator.ts`
- `client/src/features/chat/useChatSession.ts`
- `client/src/features/captions/useCaption.ts`
- `client/src/features/summarizer/useSummarizer.ts`
- `client/src/features/translator/useTranslate.ts`

## Open questions
- Where are the backend API implementations for /api/blog/generate, /api/agent, /api/caption, /api/summarize, and /api/translate?
- How is the 'demo-key' API key managed and validated on the backend?
- What is the full schema and validation for ChatMessage types and API request/response payloads?
- How does the agent in /api/agent perform multi-step planning before execution?
- Why is LegacyStatsWidget a class component when the rest of the app uses hooks?

# Module: client/src

Client-side React application for Otto, an AI content studio providing five workflows: blog writing, chat, summarization, translation, and caption generation. Routes between a landing page and a multi-tab studio interface with feature-specific components and API integration.

## Key files
- `client/src/App.tsx` — Root routing component that renders Landing and Studio pages
- `client/src/pages/Studio.tsx` — Main studio interface shell managing tab state and rendering workflow components
- `client/src/lib/api.ts` — HTTP utility for POST requests to backend API endpoints

## Public interface
- App (default export from App.tsx)
- Landing (from pages/Landing.tsx)
- Studio (from pages/Studio.tsx)
- BlogEditor, BlogPreview (from features/blog/)
- ChatWindow (from features/chat/)
- SummarizerPanel (from features/summarizer/)
- TranslatorForm (from features/translator/)
- CaptionGenerator (from features/captions/)
- Navbar, Sidebar (from components/layout/)
- Button, Card, Select, TextArea (from components/ui/)
- LegacyStatsWidget (from components/)

## Dependencies
- react
- react-router-dom
- client/src/types.ts (ChatMessage interface)

## AI touchpoints [AI]
- `client/src/features/blog/useBlogGenerator.ts`
- `client/src/features/chat/useChatSession.ts`
- `client/src/features/summarizer/useSummarizer.ts`
- `client/src/features/translator/useTranslate.ts`
- `client/src/features/captions/useCaption.ts`

## Open questions
- How are the backend API endpoints (/api/blog/generate, /api/agent, /api/summarize, /api/translate, /api/caption) implemented and what LLM providers do they use?
- What is the structure and purpose of the agent logic at /api/agent beyond multi-step planning mentioned in Landing.tsx?
- Why is LegacyStatsWidget a class component and what maintenance burden does it create?
- How is the demo-key in client/src/lib/api.ts managed in production environments?

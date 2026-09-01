# Module: server/src [AI]

Express server providing AI-powered content operations APIs (blog generation, summarization, translation, captioning, and agent-based task planning) via REST endpoints with API key authentication and error handling.

## Key files
- `server/src/index.ts` — Server entry point; instantiates Express app, mounts routers, applies middleware
- `server/src/lib/clients.ts` — Anthropic SDK client initialization and contentAgent wrapper for LangChain-compatible invoke interface
- `server/src/middleware/auth.ts` — API key validation middleware
- `server/src/middleware/errorHandler.ts` — Global error handler middleware

## Public interface
- /api/blog (POST /generate)
- POST /api/summarize
- POST /api/translate
- POST /api/caption (POST /)
- POST /api/agent (POST /)

## Dependencies
- @anthropic-ai/sdk
- @ai-sdk/anthropic
- ai
- express
- dotenv

## AI touchpoints [AI]
- `server/src/lib/clients.ts`
- `server/src/lib/prompts/blog.ts`
- `server/src/lib/prompts/captions.ts`
- `server/src/routes/blog.ts`
- `server/src/routes/caption.ts`
- `server/src/routes/summarize.ts`
- `server/src/routes/translate.ts`
- `server/src/lib/prompts/agent.ts`
- `server/src/lib/prompts/summarizer.ts`
- `server/src/routes/agent.ts`

## Open questions
- How are API keys validated beyond presence check; is there an allowlist or external validation service?
- Does the contentAgent in clients.ts support tool use or is it text-only?
- Are there rate limits or quota management for Anthropic API calls?
- What is the expected load and should streaming responses be implemented for summarize, translate, and caption endpoints?

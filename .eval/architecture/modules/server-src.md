# Module: server/src [AI]

Express server providing content-operations API endpoints with AI/LLM-powered features for blog generation, summarization, translation, caption creation, and agentic task planning. Requires API key authentication and handles errors globally.

## Key files
- `server/src/index.ts` — Application entry point; initializes Express server, mounts all routers, applies middleware
- `server/src/lib/clients.ts` — Anthropic SDK client initialization and contentAgent wrapper exposing .invoke() interface for LangChain compatibility
- `server/src/middleware/auth.ts` — API key validation middleware requiring x-api-key header
- `server/src/middleware/errorHandler.ts` — Global error handler middleware
- `server/src/routes/blog.ts` — POST /api/blog/generate endpoint using ai.streamText for streaming blog generation
- `server/src/routes/summarize.ts` — POST /api/summarize endpoint for document condensing with bullet points
- `server/src/routes/translate.ts` — POST /api/translate endpoint for multilingual text translation
- `server/src/routes/caption.ts` — POST /api/caption endpoint for social media caption generation
- `server/src/routes/agent.ts` — POST /api/agent endpoint for multi-step agentic task execution

## Public interface
- /api/blog/generate
- POST /api/summarize
- POST /api/translate
- POST /api/caption
- POST /api/agent

## Dependencies
- express
- dotenv
- @anthropic-ai/sdk
- @ai-sdk/anthropic
- ai

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
- How is the Anthropic API key provisioned and rotated in production?
- What is the intended behavior when ANTHROPIC_API_KEY is not set—does the placeholder key fail gracefully?
- How are streaming responses (blog endpoint) handled if the client disconnects mid-stream?
- Is there rate limiting or quota enforcement at the server or middleware level?
- What monitoring/logging exists beyond console.error in the error handler?

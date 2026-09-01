# Module: server/src [AI]

Express.js REST API server providing LLM-powered content operations (blog generation, summarization, translation, caption creation, and agentic task execution) via Claude Anthropic models with API key authentication and streaming support.

## Key files
- `server/src/index.ts` — Application entry point; instantiates Express server, loads environment, mounts routers, attaches middleware
- `server/src/lib/clients.ts` — Anthropic SDK client initialization and contentAgent wrapper implementing LangChain-compatible invoke interface
- `server/src/middleware/auth.ts` — API key validation middleware enforcing x-api-key header requirement
- `server/src/middleware/errorHandler.ts` — Global error handler middleware for catching and logging exceptions

## Public interface
- /api/blog (POST /generate)
- /api/summarize (POST /)
- /api/translate (POST /)
- /api/caption (POST /)
- /api/agent (POST /)

## Dependencies
- dotenv
- express
- @anthropic-ai/sdk
- @ai-sdk/anthropic
- ai (streamText)

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
- What is the source of image descriptions passed to the caption endpoint—are they manually provided or extracted separately?
- Does the agent (Otto) have tool use/function calling capabilities, or is it limited to text-in-text-out generation?
- How is the placeholder API key in lib/clients.ts used in production—is it replaced at runtime or is error handling sufficient?
- Are there rate limits, quotas, or billing considerations documented for the Anthropic API calls?

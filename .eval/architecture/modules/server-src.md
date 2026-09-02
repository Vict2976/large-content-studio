# Module: server/src [AI]

Express-based REST API server providing AI-powered content operations endpoints (blog generation, summarization, translation, captioning, and autonomous agent tasks) backed by Anthropic Claude models.

## Key files
- `server/src/index.ts` — Application entry point; configures Express app with API key authentication middleware, mounts routers for blog/summarize/translate/caption/agent endpoints, and error handling.
- `server/src/lib/clients.ts` — Anthropic SDK client initialization and wrapper exports; defines contentAgent invoke pattern for LangChain-compatible agent calls.
- `server/src/middleware/auth.ts` — API key validation middleware requiring x-api-key header.
- `server/src/middleware/errorHandler.ts` — Global error handler middleware returning 500 responses.
- `server/src/routes/blog.ts` — POST /api/blog/generate endpoint streaming blog content using ai library streamText.
- `server/src/routes/summarize.ts` — POST /api/summarize endpoint condensing documents via Claude.
- `server/src/routes/translate.ts` — POST /api/translate endpoint translating text to target languages.
- `server/src/routes/caption.ts` — POST /api/caption endpoint generating social media captions from image descriptions.
- `server/src/routes/agent.ts` — POST /api/agent endpoint invoking autonomous content agent with persona-based instructions.

## Public interface
- /api/blog/generate (POST)
- ​/api/summarize (POST)
- /api/translate (POST)
- /api/caption (POST)
- /api/agent (POST)

## Dependencies
- dotenv
- express
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
- How are API keys validated beyond presence check (format/rotation strategy)?
- Does the placeholder anthropic SDK key impact error handling or logging?
- Why does agent route use contentAgent wrapper while other routes use anthropicClient directly?
- Are streaming responses (blog) buffered client-side or are there memory/timeout constraints?
- Is there request validation/sanitization beyond express.json() parsing?
- How are Anthropic API errors surfaced to clients versus caught generically?
- Are prompt strings versioned or updated without endpoint redeployment?

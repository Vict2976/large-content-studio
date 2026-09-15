# Module: server/src [AI]

Express.js server providing a content-studio API with five main endpoints for blog generation, summarization, translation, image captioning, and autonomous agent tasks. All endpoints call Claude Sonnet 5 via Anthropic SDK, with API key authentication and centralized error handling.

## Key files
- `server/src/index.ts` — Application entry point; configures Express app, mounts all routers, applies middleware
- `server/src/lib/clients.ts` — Anthropic SDK client initialization and contentAgent wrapper for LangChain-compatible invoke shape
- `server/src/middleware/auth.ts` — API key validation middleware
- `server/src/middleware/errorHandler.ts` — Global error handler for all routes
- `server/src/routes/blog.ts` — Blog post generation endpoint using streaming
- `server/src/routes/summarize.ts` — Document summarization endpoint
- `server/src/routes/translate.ts` — Text translation endpoint
- `server/src/routes/caption.ts` — Image caption generation endpoint
- `server/src/routes/agent.ts` — Autonomous agent endpoint for multi-step task planning

## Public interface
- /api/blog/generate
- POST — generates blog post with topic and tone parameters
- /api/summarize
- POST — condenses document into bullet points
- /api/translate
- POST — translates text to target language
- /api/caption
- POST — generates social-media caption from image description
- /api/agent
- POST — runs instruction through Otto persona agent

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
- How is the Anthropic API key provisioned and rotated in production?
- What is the actual API key validation strategy — is x-api-key checked against a whitelist?
- Does the placeholder apiKey in clients.ts cause failures that are caught and logged, or do they propagate?
- Are there rate limits or quotas enforced per API key?
- Why does contentAgent wrap the Anthropic call in an invoke() shape — is there a planned integration with LangChain AgentExecutor?
- Should TRANSLATE_SYSTEM_PROMPT be moved to lib/prompts for consistency with other routes?

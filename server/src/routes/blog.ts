import { Router } from 'express';
import { streamText } from 'ai';
import { anthropic } from '../lib/clients';
import { BLOG_SYSTEM_PROMPT } from '../lib/prompts/blog';

const router = Router();

router.post('/generate', async (req, res, next) => {
  try {
    const { topic, tone } = req.body as { topic: string; tone: string };

    const result = streamText({
      model: anthropic('claude-sonnet-5'),
      system: BLOG_SYSTEM_PROMPT,
      prompt: `Write a blog post about "${topic}" in a ${tone} tone.`,
    });

    for await (const chunk of result.textStream) {
      res.write(chunk);
    }
    res.end();
  } catch (err) {
    next(err);
  }
});

export default router;

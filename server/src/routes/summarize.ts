import { Router } from 'express';
import { anthropicClient } from '../lib/clients';
import { SUMMARIZER_PROMPTS } from '../lib/prompts/summarizer';

const router = Router();

router.post('/', async (req, res, next) => {
  try {
    const { document } = req.body as { document: string };

    const response = await anthropicClient.messages.create({
      model: 'claude-sonnet-5',
      max_tokens: 800,
      system: SUMMARIZER_PROMPTS.condense,
      messages: [{ role: 'user', content: document }],
    });

    const summary = response.content
      .map((block: { type: string; text?: string }) => (block.type === 'text' ? (block.text ?? '') : ''))
      .join('');

    res.json({ summary });
  } catch (err) {
    next(err);
  }
});

export default router;

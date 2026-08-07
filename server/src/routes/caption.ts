import { Router } from 'express';
import { anthropicClient } from '../lib/clients';
import { captionPrompt } from '../lib/prompts/captions';

const router = Router();

router.post('/', async (req, res, next) => {
  try {
    const { imageDescription } = req.body as { imageDescription: string };

    const result = await anthropicClient.messages.create({
      model: 'claude-sonnet-5',
      max_tokens: 200,
      messages: [{ role: 'user', content: captionPrompt(imageDescription) }],
    });

    const caption = result.content
      .map((block: { type: string; text?: string }) => (block.type === 'text' ? (block.text ?? '') : ''))
      .join('');

    res.json({ caption });
  } catch (err) {
    next(err);
  }
});

export default router;

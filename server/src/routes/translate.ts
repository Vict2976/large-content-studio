import { Router } from 'express';
import { anthropicClient } from '../lib/clients';

const router = Router();

// Kept local (rather than under lib/prompts) because this is the only call site that sends it.
const TRANSLATE_SYSTEM_PROMPT = `You are a professional translator.
Preserve tone, idioms, and formatting. Never add commentary — output only the translation.`;

router.post('/', async (req, res, next) => {
  try {
    const { text, targetLanguage } = req.body as { text: string; targetLanguage: string };

    const response = await anthropicClient.messages.create({
      model: 'claude-sonnet-5',
      max_tokens: 500,
      system: TRANSLATE_SYSTEM_PROMPT,
      messages: [{ role: 'user', content: `Translate to ${targetLanguage}: ${text}` }],
    });

    const translation = response.content
      .map((block: { type: string; text?: string }) => (block.type === 'text' ? (block.text ?? '') : ''))
      .join('');

    res.json({ translation });
  } catch (err) {
    next(err);
  }
});

export default router;

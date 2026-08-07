import { Router } from 'express';
import { openaiClient } from '../lib/clients';

const router = Router();

// Kept local (rather than under lib/prompts) because this is the only call site that sends it.
const TRANSLATE_SYSTEM_PROMPT = `You are a professional translator.
Preserve tone, idioms, and formatting. Never add commentary — output only the translation.`;

router.post('/', async (req, res) => {
  const { text, targetLanguage } = req.body as { text: string; targetLanguage: string };

  const completion = await openaiClient.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: TRANSLATE_SYSTEM_PROMPT },
      { role: 'user', content: `Translate to ${targetLanguage}: ${text}` },
    ],
  });

  res.json({ translation: completion.choices[0]?.message?.content ?? '' });
});

export default router;

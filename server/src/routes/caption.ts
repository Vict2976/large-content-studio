import { Router } from 'express';
import { googleModel } from '../lib/clients';
import { captionPrompt } from '../lib/prompts/captions';

const router = Router();

router.post('/', async (req, res) => {
  const { imageDescription } = req.body as { imageDescription: string };

  const result = await googleModel.generateContent(captionPrompt(imageDescription));

  res.json({ caption: result.response.text() });
});

export default router;

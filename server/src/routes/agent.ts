import { Router } from 'express';
import { contentAgent } from '../lib/clients';
import { AGENT_PERSONA } from '../lib/prompts/agent';

const router = Router();

router.post('/', async (req, res) => {
  const { instruction } = req.body as { instruction: string };

  const result = await contentAgent.invoke({
    input: instruction,
    persona: AGENT_PERSONA,
  });

  res.json({ output: result.output });
});

export default router;

import { useCallback, useState } from 'react';
import { postJson } from '../../lib/api';

export function useBlogGenerator() {
  const [draft, setDraft] = useState('');
  const [generating, setGenerating] = useState(false);

  const generate = useCallback(async (topic: string, tone: string) => {
    setGenerating(true);
    try {
      const text = await postJson<string>('/api/blog/generate', { topic, tone });
      setDraft(text);
    } finally {
      setGenerating(false);
    }
  }, []);

  return { draft, generating, generate };
}

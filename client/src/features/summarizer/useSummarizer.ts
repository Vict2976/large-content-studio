import { useCallback, useState } from 'react';
import { postJson } from '../../lib/api';

export function useSummarizer() {
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const summarize = useCallback(async (document: string) => {
    setLoading(true);
    try {
      const result = await postJson<{ summary: string }>('/api/summarize', { document });
      setSummary(result.summary);
    } finally {
      setLoading(false);
    }
  }, []);

  return { summary, loading, summarize };
}

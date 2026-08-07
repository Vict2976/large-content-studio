import { useCallback, useState } from 'react';
import { postJson } from '../../lib/api';

export function useCaption() {
  const [caption, setCaption] = useState('');
  const [loading, setLoading] = useState(false);

  const generateCaption = useCallback(async (imageDescription: string) => {
    setLoading(true);
    try {
      const result = await postJson<{ caption: string }>('/api/caption', { imageDescription });
      setCaption(result.caption);
    } finally {
      setLoading(false);
    }
  }, []);

  return { caption, loading, generateCaption };
}

import { useCallback, useState } from 'react';
import { postJson } from '../../lib/api';

export function useTranslate() {
  const [translation, setTranslation] = useState('');
  const [loading, setLoading] = useState(false);

  const translate = useCallback(async (text: string, targetLanguage: string) => {
    setLoading(true);
    try {
      const result = await postJson<{ translation: string }>('/api/translate', { text, targetLanguage });
      setTranslation(result.translation);
    } finally {
      setLoading(false);
    }
  }, []);

  return { translation, loading, translate };
}

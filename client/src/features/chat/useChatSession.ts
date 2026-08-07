import { useCallback, useState } from 'react';
import { postJson } from '../../lib/api';
import type { ChatMessage } from '../../types';

export function useChatSession() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [sending, setSending] = useState(false);

  const sendMessage = useCallback(async (text: string) => {
    setSending(true);
    setMessages((prev) => [...prev, { role: 'user', content: text }]);
    try {
      const reply = await postJson<string>('/api/agent', { instruction: text });
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    } finally {
      setSending(false);
    }
  }, []);

  return { messages, sending, sendMessage };
}

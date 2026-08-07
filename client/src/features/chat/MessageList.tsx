import type { ChatMessage } from '../../types';

export function MessageList({ messages }: { messages: ChatMessage[] }) {
  return (
    <ul className="message-list">
      {messages.map((m, i) => (
        <li key={i} className={`message message-${m.role}`}>
          {m.content}
        </li>
      ))}
    </ul>
  );
}

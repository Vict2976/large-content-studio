import { useChatSession } from './useChatSession';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';

export function ChatWindow() {
  const { messages, sending, sendMessage } = useChatSession();

  return (
    <section className="chat-window">
      <MessageList messages={messages} />
      <MessageInput onSend={sendMessage} disabled={sending} />
    </section>
  );
}

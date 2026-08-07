import { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { TextArea } from '../../components/ui/TextArea';

interface Props {
  onSend: (text: string) => void;
  disabled: boolean;
}

export function MessageInput({ onSend, disabled }: Props) {
  const [text, setText] = useState('');

  const submit = () => {
    if (!text.trim()) return;
    onSend(text);
    setText('');
  };

  return (
    <div className="message-input">
      <TextArea
        aria-label="Message to Otto"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            submit();
          }
        }}
      />
      <Button onClick={submit} disabled={disabled}>
        Send
      </Button>
    </div>
  );
}

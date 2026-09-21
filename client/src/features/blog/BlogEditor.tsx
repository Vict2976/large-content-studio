import { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { TextArea } from '../../components/ui/TextArea';
import { Select } from '../../components/ui/Select';
import { useBlogGenerator } from './useBlogGenerator';

const TONES = [
  { value: 'friendly', label: 'Friendly' },
  { value: 'formal', label: 'Formal' },
  { value: 'punchy', label: 'Punchy' },
];

interface Props {
  onDraft: (draft: string) => void;
}

// @uxid client/src/features/blog/BlogEditor::BlogEditor
export function BlogEditor({ onDraft }: Props) {
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('friendly');
  const { draft, generating, generate } = useBlogGenerator();

  const submit = async () => {
    await generate(topic, tone);
    onDraft(draft);
  };

  return (
    <section className="blog-editor">
      <TextArea
        aria-label="Blog topic"
        placeholder="What's the post about?"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <Select value={tone} options={TONES} onChange={setTone} ariaLabel="Tone" />
      <Button onClick={() => void submit()} disabled={generating}>
        {generating ? 'Writing…' : 'Generate draft'}
      </Button>
    </section>
  );
}

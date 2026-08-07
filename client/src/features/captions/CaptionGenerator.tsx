import { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { useCaption } from './useCaption';

export function CaptionGenerator() {
  const [imageDescription, setImageDescription] = useState('');
  const { caption, loading, generateCaption } = useCaption();

  return (
    <section className="caption-generator">
      <input
        aria-label="Image description"
        placeholder="Describe the image…"
        value={imageDescription}
        onChange={(e) => setImageDescription(e.target.value)}
      />
      <Button onClick={() => void generateCaption(imageDescription)} disabled={loading || !imageDescription}>
        {loading ? 'Generating…' : 'Generate caption'}
      </Button>
      {caption && <p className="caption">{caption}</p>}
    </section>
  );
}

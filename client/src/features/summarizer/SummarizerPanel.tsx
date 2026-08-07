import { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { TextArea } from '../../components/ui/TextArea';
import { useSummarizer } from './useSummarizer';

export function SummarizerPanel() {
  const [document, setDocument] = useState('');
  const { summary, loading, summarize } = useSummarizer();

  return (
    <section className="summarizer-panel">
      <TextArea
        aria-label="Document to summarize"
        placeholder="Paste a document…"
        value={document}
        onChange={(e) => setDocument(e.target.value)}
      />
      <Button onClick={() => void summarize(document)} disabled={loading || !document}>
        {loading ? 'Summarizing…' : 'Summarize'}
      </Button>
      {summary && <p className="summary">{summary}</p>}
    </section>
  );
}

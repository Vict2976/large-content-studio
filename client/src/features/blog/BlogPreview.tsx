import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export function BlogPreview({ draft }: { draft: string }) {
  return (
    <Card>
      <p>{draft || 'Your generated draft will appear here.'}</p>
      <Button variant="ghost" onClick={() => navigator.clipboard.writeText(draft)} disabled={!draft}>
        Copy to clipboard
      </Button>
    </Card>
  );
}

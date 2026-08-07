export type Tab = 'blog' | 'chat' | 'summarizer' | 'translator' | 'captions';

const TABS: { id: Tab; label: string }[] = [
  { id: 'blog', label: 'Blog Writer' },
  { id: 'chat', label: 'Chat with Otto' },
  { id: 'summarizer', label: 'Summarizer' },
  { id: 'translator', label: 'Translator' },
  { id: 'captions', label: 'Captions' },
];

interface Props {
  active: Tab;
  onSelect: (tab: Tab) => void;
}

export function Sidebar({ active, onSelect }: Props) {
  return (
    <nav className="sidebar">
      {TABS.map((t) => (
        <button key={t.id} className={t.id === active ? 'active' : ''} onClick={() => onSelect(t.id)}>
          {t.label}
        </button>
      ))}
    </nav>
  );
}

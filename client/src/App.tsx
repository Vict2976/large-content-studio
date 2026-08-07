import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Sidebar, type Tab } from './components/layout/Sidebar';
import { LegacyStatsWidget } from './components/LegacyStatsWidget';
import { BlogEditor } from './features/blog/BlogEditor';
import { BlogPreview } from './features/blog/BlogPreview';
import { ChatWindow } from './features/chat/ChatWindow';
import { SummarizerPanel } from './features/summarizer/SummarizerPanel';
import { TranslatorForm } from './features/translator/TranslatorForm';
import { CaptionGenerator } from './features/captions/CaptionGenerator';

export default function App() {
  const [tab, setTab] = useState<Tab>('blog');
  const [draft, setDraft] = useState('');

  return (
    <div className="app-shell">
      <Navbar />
      <div className="app-body">
        <Sidebar active={tab} onSelect={setTab} />
        <main className="app-main">
          {tab === 'blog' && (
            <>
              <BlogEditor onDraft={setDraft} />
              <BlogPreview draft={draft} />
            </>
          )}
          {tab === 'chat' && <ChatWindow />}
          {tab === 'summarizer' && <SummarizerPanel />}
          {tab === 'translator' && <TranslatorForm />}
          {tab === 'captions' && <CaptionGenerator />}
          <LegacyStatsWidget totalGenerations={128} />
        </main>
      </div>
    </div>
  );
}

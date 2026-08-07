import { Link } from 'react-router-dom';

const FEATURES = [
  { title: 'Blog Writer', body: 'Long-form drafts in your brand voice, from a topic and a tone.' },
  {
    title: 'Chat with Otto',
    body: 'An agent that plans multi-step content tasks before it acts.',
    ribbon: true,
  },
  { title: 'Summarizer', body: 'Turn any document into five bullets your team will actually read.' },
  { title: 'Translator', body: 'Tone- and idiom-aware translation, not just word-for-word.' },
  { title: 'Captions', body: 'Punchy, on-brand social captions from a one-line description.' },
];

export function Landing() {
  return (
    <div>
      <nav className="site-nav container">
        <Link to="/" className="site-nav__logo">
          <span className="site-nav__mark" />
          Otto
        </Link>
        <Link to="/studio" className="btn btn-primary">
          Launch the studio
        </Link>
      </nav>

      <header className="hero container">
        <span className="hero__eyebrow">One studio, five workflows</span>
        <h1>
          Stop switching tabs. <span className="gradient-text">Start shipping content.</span>
        </h1>
        <p className="hero__lede">
          Otto bundles blog writing, chat, summarizing, translation, and captioning into one AI
          workspace — five workflows, one place to work.
        </p>
        <div className="hero__actions">
          <Link to="/studio" className="btn btn-primary">
            Launch the studio
          </Link>
        </div>
      </header>

      <section className="container">
        <div className="feature-grid">
          {FEATURES.map((f) => (
            <article className="feature-card" key={f.title}>
              <span className="feature-card__icon" />
              <h3>
                {f.title}
                {f.ribbon && (
                  // One-off "agent" tag from the launch deck; never migrated into the token set.
                  <span style={{ color: '#fb7185', fontSize: '0.65rem', fontWeight: 700, marginLeft: 6 }}>
                    AGENT
                  </span>
                )}
              </h3>
              <p>{f.body}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer container">
        <p style={{ margin: 0 }}>Otto Content Studio — five AI workflows, zero context switching.</p>
      </footer>
    </div>
  );
}

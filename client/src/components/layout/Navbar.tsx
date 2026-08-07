import { useState } from 'react';

export function Navbar() {
  const [query, setQuery] = useState('');

  return (
    <header className="navbar">
      <h1>Content Studio</h1>
      <input
        aria-label="Search generations"
        placeholder="Search…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </header>
  );
}

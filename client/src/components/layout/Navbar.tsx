import { useState } from 'react';
import { Link } from 'react-router-dom';

// @uxid client/src/components/layout/Navbar::Navbar
export function Navbar() {
  const [query, setQuery] = useState('');

  return (
    <header className="navbar">
      <Link to="/" className="site-nav__logo">
        <span className="site-nav__mark" />
        Otto
      </Link>
      <input
        aria-label="Search generations"
        placeholder="Search…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </header>
  );
}

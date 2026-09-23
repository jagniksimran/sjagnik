import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDesignClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname === '/') {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const links = [
    { path: '/about', label: 'About Me' },
    { path: '/', label: 'Design', handler: handleDesignClick },
    { path: '/arvrgames', label: 'AR/VR/Games' },
    { path: '/teaching', label: 'Teaching' },
    { path: '/contact', label: "Let's Talk", isExternal: true },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Simran Jagnik</Link>
      </div>
      <button
        className="navbar-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`hamburger ${menuOpen ? 'open' : ''}`} />
      </button>
      <ul className={`navbar-links ${menuOpen ? 'navbar-links--open' : ''}`}>
        {links.map((link) =>
          link.isExternal ? (
            <li key={link.path}>
              <a href="mailto:jagniksimran@gmail.com">{link.label}</a>
            </li>
          ) : link.handler ? (
            <li key={link.label}>
              <a href="#projects" onClick={link.handler}>
                {link.label}
              </a>
            </li>
          ) : (
            <li key={link.path}>
              <Link
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}

export default Navbar;

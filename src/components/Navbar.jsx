// src/Navbar.js
import React, { useState, useEffect } from 'react';

const Navbar = ({ onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        <div className="logo">
          <a href="/" className="logo-text">
            Contact Manager
          </a>
        </div>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li>
            <a href="/" className="nav-link" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="/contacts" className="nav-link" onClick={() => setMenuOpen(false)}>
              Contacts
            </a>
          </li>
          <li>
            <a href="/details" className="nav-link" onClick={() => setMenuOpen(false)}>
              Details
            </a>
          </li>
          <li>
            <button onClick={onLogout} className="logout-button">
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

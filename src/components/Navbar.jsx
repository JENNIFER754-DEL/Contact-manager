// src/Navbar.js
import React from 'react';

const Navbar = ({ onLogout }) => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <a href="#">Contact Manager</a>
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/contacts">Contacts</a></li>
          <li><a href="/details">Details</a></li>
          <li>
            <button onClick={onLogout} className="logout-button">Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
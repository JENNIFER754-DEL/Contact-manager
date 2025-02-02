// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content container">
        {/* About Section */}
        <section className="footer__section footer__about">
          <h3 className="footer__title">Contact Management</h3>
          <p className="footer__text">
            Easily manage your contacts with our intuitive interface. Add, edit, or delete contacts seamlessly.
          </p>
        </section>

        {/* Quick Links Section */}
        <nav className="footer__section footer__links" aria-label="Quick Links">
          <h3 className="footer__title">Quick Links</h3>
          <ul className="footer__list">
            <li className="footer__list-item">
              <Link className="footer__link" to="/add-contact">Add Contact</Link>
            </li>
            <li className="footer__list-item">
              <Link className="footer__link" to="/edit-contact">Edit Contact</Link>
            </li>
            <li className="footer__list-item">
              <Link className="footer__link" to="/delete-contact">Delete Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Social Media Section */}
        <section className="footer__section footer__social">
          <h3 className="footer__title">Follow Us</h3>
          <ul className="footer__social-list">
            <li className="footer__social-item">
              <a
                className="footer__social-link"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li className="footer__social-item">
              <a
                className="footer__social-link"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li className="footer__social-item">
              <a
                className="footer__social-link"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </section>
      </div>

      {/* Footer Bottom */}
      <div className="footer__bottom">
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} Contact Manager. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

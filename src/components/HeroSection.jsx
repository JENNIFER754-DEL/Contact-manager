// src/HeroSection.js
import React from 'react';
// import './HeroSection.css'; // Import your updated CSS

const HeroSection = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        {/* Main Title */}
        <h1 className="hero-title">
          Keep Your Contacts Organized, Effortlessly
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Add, search, and manage contacts by name, email, or phone number—instantly!
        </p>

        {/* Value Proposition / Tagline */}
        <div className="hero-tagline">
          <p>Perfect for professionals, small businesses, and anyone who values organization.</p>
        </div>

        {/* Call-to-Action Button */}
        <button className="cta-button" onClick={() => window.location.href = '/contacts'}>
          Get Started
        </button>

        {/* Testimonial */}
        <div className="testimonial">
          <p>"This is exactly what I needed to stay organized. Simple, intuitive, and powerful!"</p>
          <p>- John Doe, Entrepreneur</p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="hero-image">
        <img 
          src="https://images.pexels.com/photos/8526707/pexels-photo-8526707.jpeg?auto=compress&cs=tinysrgb&w=600" 
          alt="App Screenshot" 
        />
      </div>
    </section>
  );
};

export default HeroSection;

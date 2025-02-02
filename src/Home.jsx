// src/Home.js
import React from 'react';
// import './Home.css'; // Import the styling for Home component
import ContactForm from './components/ContactForm';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Content */}
      <div className="home-content">
        <h1 className="home-title">Manage Your Contacts with Ease</h1>
        <p className="home-subtitle">
          Organize and store your contacts effortlessly. Stay connected, stay organized.
        </p>
        
        <p className="home-description">
          Managing contacts efficiently is crucial for staying organized. Begin by storing essential details like names, phone numbers, email addresses, and physical addresses. Group contacts into categories such as family, friends, or colleagues to easily find them. Regularly update contact information to reflect any changes, like new phone numbers or job titles. Use labels or tags to prioritize or categorize contacts further. Sync your contacts across devices to ensure you have access wherever you go. Always back up your contact list to avoid losing data, and ensure privacy by securing sensitive information.
        </p>

        <ContactForm />
      </div>

      {/* Hero Image */}
      <div className="home-image">
        <img src="https://i.pinimg.com/736x/48/42/2e/48422e6e24470a94700f1e2f3046d208.jpg" alt="Contact Management" />
      </div>
    </div>
  );
}

export default Home;

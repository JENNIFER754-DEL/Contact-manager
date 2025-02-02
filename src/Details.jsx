// src/Details.js
import React from 'react';


function Details() {
  // The phone number for the contact
  const phoneNumber = '(+254) 708782';

  return (
    <div className="details-container">
      <div className="details-header">
        <h1>Contact Profile</h1>
      </div>

      <div className="details-content">
        <div className="details-image-container">
          <img 
            src="https://images.pexels.com/photos/5794559/pexels-photo-5794559.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Contact" 
            className="details-image"
          />
        </div>

        <div className="details-text">
          <h2>Brian Jasper</h2>
          <p><strong>Job Title:</strong> Senior Software Engineer</p>
          <p><strong>Location:</strong> San Francisco, CA</p>
          <p><strong>Email:</strong> johndoe@example.com</p>
          <p><strong>Phone:</strong> {phoneNumber}</p>
          
          <div className="details-section">
            <h3>About</h3>
            <p>Brian Jasper is a Senior Software Engineer with over 10 years of experience in the tech industry. He specializes in front-end development and has worked on numerous projects, ranging from web applications to mobile solutions. Outside of work, John is passionate about coding bootcamps and mentoring young developers.</p>
          </div>

          <div className="details-button">
            <h3>Address</h3>
            <p>1234 Main Street, San Francisco, CA 94101</p>
          </div>

          <div className="details-section">
            <h3>Company</h3>
            <p>Tech Solutions Inc.</p>
          </div>

          <div className="details-section">
            <h3>Social Links</h3>
            <ul className="social-links">
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i> Twitter</a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i> Facebook</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i> LinkedIn</a></li>
            </ul>
          </div>

          <div className="details-section">
            <a href={`tel:${phoneNumber}`} className="contact-btn">
              Contact Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;

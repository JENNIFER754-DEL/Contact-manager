import React, { useState } from "react";
import "../styles/styles.css"; // Ensure the correct case-sensitive import

const ContactForm = () => {
  // State to manage form inputs
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });

  // Function to handle input changes
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Validation to prevent empty fields
    if (!contact.name || !contact.email || !contact.phone) {
      alert("All fields are required!");
      return;
    }

    try {
      // Sending a POST request to save the contact in db.json
      await fetch("http://localhost:3000/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
      });

      // Show a success message
      alert("Contact saved successfully!");

      // ✅ Clear the input fields after submission
      setContact({ name: "", email: "", phone: "" });
      
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  // Rendering
  return (
    <div className="contact-form-container">
      <h2 className="form-title">Create New Contact Form</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={contact.name}
          onChange={handleChange}
          required
          className="form-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={contact.email}
          onChange={handleChange}
          required
          className="form-input"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={contact.phone}
          onChange={handleChange}
          required
          className="form-input"
        />
        <button type="submit" className="submit-button">
          Save Contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
// statevinitialized
const [contact, setContact] = useState({ name: "", email: "", phone: "" });
// useNavigate hook
const navigate = useNavigate();
// function to handle changes in input fields & update state
const handleChange = (e) => {
setContact({ ...contact, [e.target.name]: e.target.value });
};
// Function to handle form submission
const handleSubmit = async (e) => {
    e.preventDefault(); // prevent default form submission
// validation to prevent empty fields
if (!contact.name || !contact.email || !contact.phone) {
    alert("All fields are required!");
    return; // Stops form submission if any field is empty
}
try {
// Sending a POST request to save the contact in db.json
await fetch("http://localhost:3000/contacts", {
    method: "POST", // Specifies the HTTP request method
    headers: { "Content-Type": "application/json" }, // Defines JSON content type
    body: JSON.stringify(contact), // Converts contact object to JSON format
});
navigate("/"); // Redirect to ContactList (homepage) after submission
} catch (error) {
  console.error("Error adding contact:", error); // Logs any error in the console
}
};
// Rendering
return (
    <div className="contact-form-container">
      {/* Heading for the form */}
      <h2 className="form-title">Create New Contact</h2>

      {/* Form element with onSubmit event handler */}
      <form onSubmit={handleSubmit} className="contact-form">
        {/* Input field for Name */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={contact.name}
          onChange={handleChange}
          required
          className="form-input"
        />

        {/* Input field for Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={contact.email}
          onChange={handleChange}
          required
          className="form-input"
        />

        {/* Input field for Phone Number */}
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={contact.phone}
          onChange={handleChange}
          required
          className="form-input"
        />

        {/* Submit button to save the contact */}
        <button type="submit" className="submit-button">
          Save Contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
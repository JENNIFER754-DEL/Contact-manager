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
}
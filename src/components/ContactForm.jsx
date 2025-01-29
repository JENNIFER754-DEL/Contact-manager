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





}
import React from "react";

const ContactList = ({ contacts }) => {
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 2px 5px rgba(7, 133, 49, 0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <ul style={{ listStyleType: "none", padding: "0" }}>
        {contacts.map((contact) => (
          <li
            key={contact.id}
            style={{
              marginBottom: "15px",
              padding: "10px",
              borderBottom: "1px solid #ddd",
            }}
          >
            <h3 style={{ margin: "5px 0", color: "#333" }}>{contact.name}</h3>
            <p style={{ margin: "5px 0", color: "#555" }}>{contact.email}</p>
            <p style={{ margin: "5px 0", color: "#777" }}>{contact.mobileNo}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
import React from "react";

const ContactList = ({ contacts }) => {
  if (!contacts || contacts.length === 0) {
    return (
      <p style={{ textAlign: "center", fontSize: "18px", color: "gray" }}>
        No contacts data available.
      </p>
    );
  }

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
        Contact List
      </h2>
      <ul style={{ listStyle: "none", padding: "5px" }}>
        {contacts.map((contact) => (
          <li
            key={contact.id}
            style={{
              padding: "10px",
              borderBottom: "1px solid #ddd",
            }}
          >
            <h3 style={{ margin: "5px 0", color: "black" }}>{contact.name}</h3>
            <p style={{ margin: "5px 0", fontSize: "16px", color: "red" }}>
              📧 {contact.email}
            </p>
            <p style={{ margin: "5px 0", fontSize: "16px", color: "#555" }}>
              📞 {contact.phone}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

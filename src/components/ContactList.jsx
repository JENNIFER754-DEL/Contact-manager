import React from "react";

const ContactList = ({ contacts }) => {
  if (!contacts || contacts.length === 0) {
    return (
      <p style={{ textAlign: "center", fontSize: "18px", color: "gray" }}>
        No contacts available.
      </p>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "30px",
        padding: "70px",
      }}
    >
      {contacts.map((contact) => (
        <div
          key={contact.id}
          style={{
            width: "280px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "15px",
            boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            backgroundColor: "#fff",
          }}
        >
          <h3 style={{ margin: "10px 0", color: "#333" }}>{contact.name}</h3>
          <p style={{ margin: "5px 0", fontSize: "16px", color: "#555" }}>
            📧 {contact.email}
          </p>
          <p style={{ margin: "5px 0", fontSize: "16px", color: "#555" }}>
            📞 {contact.mobileNo}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ContactList;

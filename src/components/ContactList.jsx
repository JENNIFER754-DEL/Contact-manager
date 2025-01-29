import React, { useEffect, useState } from "react";

const ContactList = ({ contacts, deleteContact, setCurrentContact }) => {
  const [fetchedContacts, setFetchedContacts] = useState([]);

  // Fetch contacts from the backend when the component mounts
  useEffect(() => {
    fetch("http://localhost:4000/contacts") // Ensure your backend is running
      .then((response) => response.json())
      .then((data) => setFetchedContacts(data))
      .catch((error) => console.error("Error fetching contacts:", error));
  }, [contacts]); // Refresh when `contacts` changes

  // Handle deleting a contact from the backend
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/contacts/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete contact");
      }

      // Remove from local state after successful deletion
      setFetchedContacts((prevContacts) =>
        prevContacts.filter((contact) => contact.id !== id)
      );
      deleteContact(id); // Update parent state
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <div style={{ padding: "10px", maxWidth: "400px" }}>
      <h2 style={{ textAlign: "left" }}>Contact List</h2>
      <ul style={{ listStyle: "none", padding: "0" }}>
        {fetchedContacts.length > 0 ? (
          fetchedContacts.map((contact) => (
            <li
              key={contact.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "5px 0",
              }}
            >
              <span>
                <strong>{contact.name}</strong> - {contact.mobileNo} - {contact.email}
              </span>
              <div>
                <button
                  onClick={() => setCurrentContact(contact)}
                  style={{
                    background: "blue",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer",
                    marginRight: "5px",
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(contact.id)}
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <p>No contacts available.</p>
        )}
      </ul>
    </div>
  );
};

export default ContactList;

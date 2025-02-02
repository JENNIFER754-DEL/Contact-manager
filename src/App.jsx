import React, { useState, useEffect } from "react";
import ContactList from "./components/ContactList";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch contacts from the API
  useEffect(() => {
    fetch("http://localhost:3000/contacts")
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.log("Error fetching contacts:", error));
  }, []);

  // Filter contacts based on search query
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.mobileNo.includes(searchQuery)
  );

  return (
    <div style={{ textAlign: "center", padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "Green" }}>Contact Manager</h1>
      <button style={{ margin: "10px", padding: "10px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Add Contacts</button>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ContactList contacts={filteredContacts} />
      <button style={{ margin: "10px", padding: "10px", backgroundColor: "#f44336", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Delete</button>
      <br />
      <button style={{ margin: "10px", padding: "10px", backgroundColor: "#008CBA", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Edit</button>
    </div>
  );
};

export default App;

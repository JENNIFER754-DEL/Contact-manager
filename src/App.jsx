import React, { useState, useEffect } from 'react';
import ContactList from './components/ContactList';
import SearchBar from './components/searchBar';
const App = () => {
  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch contacts from server
  useEffect(() => {
    fetch("http://localhost:3000/contacts")
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error("Error fetching contacts:", error));
  }, []);
  // Filter contacts based on search query
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.mobileNo.includes(searchQuery) // You can adjust this to filter by mobile number or other fields as well
  );

  const deleteContact = async (id) => {
    // Delete from server
    fetch(`http://localhost:3000/contacts/${id}`, {
      method: "DELETE",
    }).then(() => {
      setContacts(contacts.filter((contact) => contact.id !== id));
    });
  };

  return (
    <>
    
      <h1>Contact Manager</h1>
      <button align-right> Add Contacts</button>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
        setCurrentContact={setCurrentContact}></ContactList>
        
      </>
    )};

export default App;

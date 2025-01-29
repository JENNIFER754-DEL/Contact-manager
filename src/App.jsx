import React, { useState, useEffect } from 'react';
import ContactList from './components/ContactList'; // Ensure correct file name

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [currentContact, setCurrentContact] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');

  // Fetch contacts when component mounts
  useEffect(() => {
    fetch("http://localhost:4000/contacts")
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error("Error fetching contacts:", error));
  }, []);

  // Add a new contact to the backend
  const addContact = async () => {
    if (!name || !email || !mobileNo) return;

    const newContact = { name, email, mobileNo };

    try {
      const response = await fetch("http://localhost:4000/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newContact),
      });

      if (!response.ok) {
        throw new Error("Failed to add contact");
      }

      const savedContact = await response.json();
      setContacts([...contacts, savedContact]); // Add to state
      setName('');
      setEmail('');
      setMobileNo('');
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  // Edit an existing contact
  const editContact = async () => {
    if (!name || !email || !mobileNo || !currentContact) return;

    const updatedContact = { ...currentContact, name, email, mobileNo };

    try {
      const response = await fetch(`http://localhost:4000/contacts/${currentContact.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedContact),
      });

      if (!response.ok) {
        throw new Error("Failed to update contact");
      }

      setContacts(
        contacts.map((contact) =>
          contact.id === currentContact.id ? updatedContact : contact
        )
      );
      setCurrentContact(null);
      setName('');
      setEmail('');
      setMobileNo('');
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  // Delete a contact
  const deleteContact = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/contacts/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete contact");
      }

      setContacts(contacts.filter((contact) => contact.id !== id));
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <h1>Contact Manager</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          style={{ padding: '8px', width: '100%' }}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          style={{ padding: '8px', width: '100%' }}
        />
        <input
          type="text"
          value={mobileNo}
          onChange={(e) => setMobileNo(e.target.value)}
          placeholder="Mobile Number"
          style={{ padding: '8px', width: '100%' }}
        />
        <button 
          onClick={currentContact ? editContact : addContact} 
          style={{ padding: '10px', background: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          {currentContact ? 'Update' : 'Add'} Contact
        </button>
      </div>

      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
        setCurrentContact={setCurrentContact}
      />
    </div>
  );
};

export default App;

<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import ContactList from "./components/ContactList";
import SearchBar from   "./components/SearchBar"

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
    <div>
      <h1>Contact Manager</h1>
      <button>Add Contacts</button>
       <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ContactList contacts={filteredContacts} /> 
      <button>Delete</button> <br/> <button>Edit</button>
    

    </div>
  );
};

export default App;
=======
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Contacts from './Contacts'
import Details from './Details'
import Navbar from './Navbar';
import { useState } from 'react';
function App({contacts}) {
  const [isloggedin,seisloggedin]=useState(false)
  return (
    <Router>
      {isloggedin ? <Navbar /> : <h1>We login kwanza</h1> }
      
      
      
    {/* Define the Routes for navigation  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/Details" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;  
>>>>>>> 0e7e2a736e616c38ee66998fffe786bf70689308

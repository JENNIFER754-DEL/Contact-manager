import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contacts from './Contacts';
import Details from './Details';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import ContactList from "./components/ContactList";
import SearchBar from "./components/SearchBar"; // Assuming this is defined somewhere

function App({ contacts }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.mobileNo.includes(searchQuery)
  );

  useEffect(() => {
    fetch("http://localhost:3000/contacts")
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.log("Error fetching contacts:", error));
  }, []);

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    if (storedLoginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    if (username && password) {
      const userData = { username, password };

      try {
        const response = await fetch('http://localhost:3000/contacts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });

        if (response.ok) {
          setIsLoggedIn(true);
          localStorage.setItem('isLoggedIn', 'true');
          setUsername('');
          setPassword('');
        } else {
          console.error('Failed to add user');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <Router>
      {isLoggedIn ? (
        <>
          <Navbar onLogout={handleLogout} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts contacts={contacts} />} />
            <Route path="/details" element={<Details />} />
            <Route path="/contact-form" element={<ContactForm />} />
            {/* You can include ContactList inside the Contacts component */}
            <Route path="/contact-list" element={<ContactList contacts={filteredContacts} />} />
          </Routes>
        </>
      ) : (
        <div className="login-container">
          <h1>Please Log In</h1>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </Router>
  );
}

export default App;

// import React, { useState, useEffect } from "react";
// import ContactList from "./components/ContactList";
// import SearchBar from   "./components/SearchBar";
// import "./App.css"; // css style

// const App = () => {
//   const [contacts, setContacts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   // Fetch contacts from the API
//   useEffect(() => {
//     fetch("http://localhost:3000/contacts")
//       .then((response) => response.json())
//       .then((data) => setContacts(data))
//       .catch((error) => console.log("Error fetching contacts:", error));
//   }, []);

//   // Filter contacts based on search query
//   const filteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     contact.mobileNo.includes(searchQuery)
//   );

//   return (
//     <div>
//       <h1>Contact Manager</h1>
//       <button>Add Contacts</button>
//        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
//       <ContactList contacts={filteredContacts} /> 
//       <button>Delete</button> <br/> <button>Edit</button>
    

//     </div>
//   );
// };



import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contacts from './Contacts';
import Details from './Details';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer'; 
import HeroSection from './components/HeroSection';


function App() {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    fetch("http://localhost:3000/contacts")
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.log("Error fetching contacts:", error));

    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    if (storedLoginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Check if username and password are filled
    if (username && password) {
      // Simulate a login request (replace with actual authentication endpoint)
      try {
        const response = await fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
          setIsLoggedIn(true);
          localStorage.setItem('isLoggedIn', 'true');
          setUsername('');
          setPassword('');
        } else {
          console.error('Login failed');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  // Filter contacts based on search query
  const filteredContacts = contacts?.filter((contact) =>
    contact?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact?.phone.includes(searchQuery)
  );

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn'); // Remove login status from local storage
  };

  return (
    <Router>
      {isLoggedIn ? (
        <>
          <Navbar onLogout={handleLogout} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={
              <>
                 <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                 <Contacts contacts={filteredContacts} />
              </>
              
              } />
            <Route path="/details" element={<Details />} />
            <Route path="/contact-form" element={<ContactForm />} />
          </Routes>
          <HeroSection />
          <Footer />
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
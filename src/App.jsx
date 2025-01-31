import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contacts from './Contacts';
import Details from './Details';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';

function App({ contacts }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Check local storage for logged in status when the component mounts
  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    if (storedLoginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Check if username and password are filled
    if (username && password) {
      // Create a user object to send
      const userData = { username, password };

      try {
        // Send a POST request to the JSON server
        const response = await fetch('http://localhost:3000/contacts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });

        if (response.ok) {
          setIsLoggedIn(true); // Set logged in state
          localStorage.setItem('isLoggedIn', 'true'); // Store login status in local storage
          // Optionally reset the form fields
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
    localStorage.removeItem('isLoggedIn'); // Remove login status from local storage
  };

  return (
    <Router>
      {isLoggedIn ? (
        <>
          <Navbar onLogout={handleLogout} />
          {/* Define the Routes for navigation */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts contacts={contacts} />} />
            <Route path="/details" element={<Details />} />
            <Route path="/contact-form" element={<ContactForm />} /> {/* Add this route */}
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

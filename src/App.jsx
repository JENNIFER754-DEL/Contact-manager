import './App.css';
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

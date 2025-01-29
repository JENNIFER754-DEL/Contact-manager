import React from 'react'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="bar">
      <h1 className="logo">Contact Manager</h1>
      <div className="navigator">
        <Link className="Home" to="/">Home</Link>
        <Link className="Contacts" to="/Contacts">Contacts</Link>
        <Link className="Details" to="/Details">< Details></Link>
        
    </div>
    </nav>
    
 );
};


export default Navbar

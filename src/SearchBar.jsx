import React, { useState } from 'react';
import { Search } from 'lucide-react';

function SearchBar({ contacts }) {
  const [searchQuery, setSearchQuery] = useState([]);
  
  // Filter contacts based on search query
  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or email"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          padding: '8px',
          width: '300px',
          marginBottom: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />
      
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact, index) => (
          <div key={index} style={{ padding: '5px 0' }}>
            <strong>{contact.name}</strong> - <span>{contact.email}</span>
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}

export default SearchBar;

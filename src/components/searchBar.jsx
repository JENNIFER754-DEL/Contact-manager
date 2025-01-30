import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {

  return (
    <div style={{ margin: "20px 0", textAlign: "center" }}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search Contacts"
        style={{
          padding: "5px",
          fontSize: "16px",
          width: "200px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
};

export default SearchBar;

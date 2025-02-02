import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search Contacts"
        style={{
          padding: "10px",
          width: "80%",
          maxWidth: "400px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          fontSize: "16px"
        }}
      />
    </div>
  );
};

export default SearchBar;

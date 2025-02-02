import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) =>
             setSearchQuery(e.target.value)}
             style ={{
                padding: "10px",
                marginBottom: "20px",
                width: "100%",
                fontSize: "16px",
             }}
        placeholder="Search Contacts"
      />
    </div>
  );
};

export default SearchBar;
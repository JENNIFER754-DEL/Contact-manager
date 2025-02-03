import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "flex-middle", marginBottom: "20px" }}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="🔍 Search Contacts..."
        style={{
          padding: "12px",
          width: "100%",
          maxWidth: "400px",
          border: "2px solidrgb(0, 26, 255)",
          borderRadius: "8px",
          fontSize: "16px",
          outline: "none",
          transition: "border-color 0.3s ease-in-out",
        }}
      />
    </div>
  );
};

export default SearchBar;

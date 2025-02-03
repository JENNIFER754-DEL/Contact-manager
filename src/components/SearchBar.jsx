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
          border: "2px solid #007bff",
          borderRadius: "8px",
          fontSize: "16px",
          outline: "none",
          transition: "border-color 0.3s ease-in-out",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#0056b3")}
        onBlur={(e) => (e.target.style.borderColor = "#007bff")}
      />
    </div>
  );
};

export default SearchBar;

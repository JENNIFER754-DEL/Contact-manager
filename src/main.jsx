import React from "react"; // ✅ Add this line
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

console.log("main.jsx is rendering App.jsx..."); // Debugging log

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

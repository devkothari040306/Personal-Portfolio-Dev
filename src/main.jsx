import React from "react";
import ReactDOM from "react-dom/client";
import smoothscroll from "smoothscroll-polyfill";

import App from "./App";
import "./index.css";

// Enable smooth scrolling support
smoothscroll.polyfill();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
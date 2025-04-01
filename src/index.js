/**
 * Main entry point for the React application
 * Loads React, Tailwind CSS, and NextUI in WordPress admin
 */
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./styles/index.css";

// Basic error handler
window.addEventListener("error", function (event) {
  console.error("React App Error:", event.error);

  // If the error occurs during component rendering, create a visible error display
  const appContainer = document.getElementById("my-react-app");
  if (appContainer && appContainer.innerHTML.includes("Loading")) {
    appContainer.innerHTML = `
      <div style="padding: 20px; background-color: #fee2e2; border: 1px solid #ef4444; border-radius: 6px;">
        <h3 style="color: #b91c1c; font-size: 18px; margin-bottom: 10px;">React Error</h3>
        <p style="margin-bottom: 10px;">${
          event.message || "An error occurred while loading the application."
        }</p>
        <details>
          <summary style="cursor: pointer; color: #b91c1c;">Technical Details</summary>
          <pre style="margin-top: 10px; white-space: pre-wrap; font-size: 12px;">${
            event.error?.stack || "No stack trace available"
          }</pre>
        </details>
      </div>
    `;
  }
});

// Once DOM is loaded, try to mount React
document.addEventListener("DOMContentLoaded", function () {
  try {
    console.log("Mounting React app with NextUI...");

    // Find container
    const appContainer = document.getElementById("my-react-app");
    if (!appContainer) {
      console.error("React container #my-react-app not found in the DOM");
      return;
    }

    // Create root and render
    const root = createRoot(appContainer);
    root.render(<App />);
    console.log("React app mounted successfully");
  } catch (error) {
    console.error("Error mounting React app:", error);
  }
});

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ContextProvider } from "./context/userContext.jsx";
import { IdeasContextProvider } from "./context/ideasContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <IdeasContextProvider>
        <App />
      </IdeasContextProvider>
    </ContextProvider>
  </React.StrictMode>
);

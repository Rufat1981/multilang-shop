import React from "react";
import ReactDOM from "react-dom/client";
import MainApp from "./App";
import "./i18n";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element with ID 'root' not found in index.html");

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
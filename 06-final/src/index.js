import React from "react";
import "./index.css";
import "./styles/responsive.css";
import App from "./App";
import { ToggleNavigationProvider } from "./hooks/useToggleNavigation";
import { HashRouter } from "react-router-dom";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <HashRouter>
      <ToggleNavigationProvider>
        <App />
      </ToggleNavigationProvider>
    </HashRouter>
  </React.StrictMode>
);

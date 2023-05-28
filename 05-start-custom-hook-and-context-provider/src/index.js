import React from "react";
import "./index.css";
import App from "./App";
import { ToggleNavigationProvider } from "./hooks/useToggleNavigation";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");

const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
      <ToggleNavigationProvider>
        <App />
      </ToggleNavigationProvider>
  </React.StrictMode>
);

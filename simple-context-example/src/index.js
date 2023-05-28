import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles/responsive.css";
import App from "./App";
import { ToggleNavigationProvider } from "./hooks/useToggleNavigation";
import { HashRouter } from "react-router-dom";
import { PriceProvider } from "./contexts/PriceContext";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <PriceProvider>
        <ToggleNavigationProvider>
          <App />
        </ToggleNavigationProvider>
      </PriceProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("Should see the logo in the Dom", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const appLogo = screen.getByTestId("app-logo");
  expect(appLogo).toBeInTheDocument();
});

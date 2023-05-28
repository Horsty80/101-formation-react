import { render, screen } from "@testing-library/react";
import App from "./App";

test("Should see the logo in the Dom", () => {
  render(<App />);
  const appLogo = screen.getByTestId("app-logo");
  expect(appLogo).toBeInTheDocument();
});

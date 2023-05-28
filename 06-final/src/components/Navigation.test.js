import { render, screen } from "@testing-library/react";
import { ToggleNavigationProvider } from "../hooks/useToggleNavigation";
import Navigation from "./Navigation";

describe("Navigation with all items", () => {
  test("Should be collapse", () => {
    render(
      <ToggleNavigationProvider initialValue={true}>
        <Navigation />
      </ToggleNavigationProvider>
    );
    const navigation = screen.getByTestId("navigation");
    expect(navigation).toHaveClass("w-[80px]");
  });

  test("Should be expand", () => {
    render(
      <ToggleNavigationProvider initialValue={false}>
        <Navigation />
      </ToggleNavigationProvider>
    );
    const navigation = screen.getByTestId("navigation");
    expect(navigation).toHaveClass("w-[300px]");
  });

  test("Should return a good number of li element", () => {
    render(<Navigation />);
    const listItem = screen.getAllByRole("listitem");
    expect(listItem.length).toBe(8);
  });

  test("Should return a good navElement element", () => {
    render(<Navigation />);
    expect(screen.getByText("Dashboard")).toBeDefined();
    expect(screen.getByText("Dashboard").textContent).toBe("Dashboard");
    expect(screen.getByText("Customers")).toBeDefined();
    expect(screen.getByText("Customers").textContent).toBe("Customers");
    expect(screen.getByText("Messages")).toBeDefined();
    expect(screen.getByText("Messages").textContent).toBe("Messages");
    expect(screen.getByText("Help")).toBeDefined();
    expect(screen.getByText("Help").textContent).toBe("Help");
    expect(screen.getByText("Settings")).toBeDefined();
    expect(screen.getByText("Settings").textContent).toBe("Settings");
    expect(screen.getByText("Password")).toBeDefined();
    expect(screen.getByText("Password").textContent).toBe("Password");
    expect(screen.getByText("Signout")).toBeDefined();
    expect(screen.getByText("Signout").textContent).toBe("Signout");
  });
});

import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Navigation with all items", () => {
  test("Should return a good number of li element", () => {
    render(<Navigation />);
    const listItem = screen.getAllByRole("listitem");
    expect(listItem.length).toBe(8);
  });

  //   { icon: HomeIcon, title: "Dashboard" },
  //   { icon: UserGroupIcon, title: "Customers" },
  //   { icon: ChatIcon, title: "Messages" },
  //   { icon: SupportIcon, title: "Help" },
  //   { icon: CogIcon, title: "Settings" },
  //   { icon: LockClosedIcon, title: "Password" },
  //   { icon: LogoutIcon, title: "Signout" },
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

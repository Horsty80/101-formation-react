import { render, screen } from "@testing-library/react";
import NavItem from "./NavItem";
import { ChatIcon, HomeIcon } from "@heroicons/react/outline";

describe("NavItem with dynamic svg and title", () => {
  test("Should return a component with <li> html element defined", () => {
    const title = "Dashboard";
    render(<NavItem Icon={HomeIcon} title={title} />);
    const listItem = screen.getByRole("listitem");
    expect(listItem).toBeDefined();
  });
  test("Should see svg and title Dashboard in the Dom", () => {
    const title = "Dashboard";
    render(<NavItem Icon={HomeIcon} title={title} />);
    const titleElement = screen.getByText(title);
    expect(titleElement.textContent).toBe(title);
    const svg = screen.queryByTestId("svg");
    expect(svg).toBeDefined();
  });

  test("Should see svg and custom title in the Dom", () => {
    const title = "customTitle";
    render(<NavItem Icon={ChatIcon} title={title} />);
    const titleElement = screen.getByText(title);
    expect(titleElement.textContent).toBe(title);
    const svg = screen.queryByTestId("svg");
    expect(svg).toBeDefined();
  });
});

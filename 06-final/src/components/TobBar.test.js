import { render, screen } from "@testing-library/react";
import TopBar from "./TopBar";

describe("TopBar rendering", () => {
  test("Should find input, img and menu toggle", () => {
    render(<TopBar />);
    const toggle = screen.getByTestId("toggle");
    const toggleIcon = screen.getByTestId("toggleIcon");
    const search = screen.getByTestId("search");
    const avatar = screen.getByTestId("avatar");
    expect(toggle).toBeDefined();
    expect(toggleIcon).toBeDefined();
    expect(search).toBeDefined();
    expect(avatar).toBeDefined();
  });
});

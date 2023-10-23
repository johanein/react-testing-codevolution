import { logRoles, render, screen } from "@testing-library/react";
import { Skills } from "./Skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "javascript"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });
  test("renders to have a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length);
  });
  test("renders login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", {
      name: "Login"
    });
    expect(loginButton).toBeInTheDocument();
  });
  test("renders button Start learning", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.queryByRole("button", {
      name: "Start learning"
    });
    expect(loginButton).not.toBeInTheDocument();
  });
  test("renders button Start learning eventually", async () => {
    const view = render(<Skills skills={skills} />);
    // logRoles(view.container);
    // screen.debug();
    const loginButton = await screen.findByRole(
      "button",
      {
        name: "Start learning"
      },
      {
        timeout: 2000
      }
    );
    // screen.debug();
    expect(loginButton).toBeInTheDocument();
  });
});

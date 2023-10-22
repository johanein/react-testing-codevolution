import { render, screen } from "@testing-library/react";
import { Counter } from "./counter";
import userEvent from "@testing-library/user-event";

describe("Counter block", () => {
  test("renders counter component", () => {
    render(<Counter />);
    const headerElement = screen.getByRole("heading");
    expect(headerElement).toBeInTheDocument();
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementButton).toBeInTheDocument();
  });

  test("should renders count as 1 after clicking", async () => {
    userEvent.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    await userEvent.click(incrementButton);
    const headerElement = screen.getByRole("heading");
    expect(headerElement).toHaveTextContent("1");
  });
  test("renders a count 10 after clicking the set button", async () => {
    userEvent.setup();
    render(<Counter />);
    const inputElement = screen.getByRole("spinbutton");
    await userEvent.type(inputElement, "10");
    expect(inputElement).toHaveValue(10);
    const buttonElement = screen.getByRole("button", {
      name: "Set",
    });
    await userEvent.click(buttonElement);
    const headerElement = screen.getByRole("heading");
    expect(headerElement).toHaveTextContent("10");
  });
});

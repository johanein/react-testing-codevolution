import { render, screen } from "@testing-library/react";
import { Application } from ".";

describe("Application", () => {
  test("should render", () => {
    render(<Application />);
    const headingOne = screen.getByRole("heading", {
      //   name: "Job application form",
      level: 1,
    });
    expect(headingOne).toBeInTheDocument();

    const headingTwo = screen.getByRole("heading", {
      //   name: "Section 1",
      level: 2,
    });
    expect(headingTwo).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();
  });
  test("should render disabled button", () => {
    render(<Application />);
    const textElem = screen.getByRole("button");
    expect(textElem).toBeDisabled();
  });
});

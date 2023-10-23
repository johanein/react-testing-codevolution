import { render, screen } from "@testing-library/react";
import { Application } from ".";

describe("Application", () => {
  test("should render", () => {
    render(<Application />);
    // getByRole
    const headingOne = screen.getByRole("heading", {
      //   name: "Job application form",
      level: 1
    });
    expect(headingOne).toBeInTheDocument();

    const headingTwo = screen.getByRole("heading", {
      //   name: "Section 1",
      level: 2
    });
    expect(headingTwo).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name"
    });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio"
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    // getByLabelText
    const elementUsingLabel = screen.getByLabelText("Name", {
      selector: "input" // This is optional and can be values "input" and 'select". Used for specificity while having duplicates
    });
    expect(elementUsingLabel).toBeInTheDocument();

    const wrapperElementLabel = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(wrapperElementLabel).toBeInTheDocument();

    // getByPlaceholderText
    const elementUsingPlaceholder = screen.getByPlaceholderText("Fullname");
    expect(elementUsingPlaceholder).toBeInTheDocument();

    // getByText
    const elementUsingText = screen.getByText("All fields are mandatory");
    expect(elementUsingText).toBeInTheDocument();

    //getByDisplayValue
    const elementUsingGetByDisplayValue = screen.getByDisplayValue("Vishwas");
    expect(elementUsingGetByDisplayValue).toBeInTheDocument();

    // getByAltText
    const elementUsingAltText = screen.getByAltText("a person with a laptop");
    expect(elementUsingAltText).toBeInTheDocument();

    // getByTitle
    const elementUsingTitle = screen.getByTitle("close");
    expect(elementUsingTitle).toBeInTheDocument();

    // getByTestId
    const elementByTestId = screen.getByTestId("custom-element");
    expect(elementByTestId).toBeInTheDocument();
  });
  test("should render disabled button", () => {
    render(<Application />);
    const textElem = screen.getByRole("button");
    // expect(textElem).not.toBeEnabled(); // by the use of eslint-plugin-jest-dom package error will be shown for this statement
    expect(textElem).toBeDisabled();
  });
});

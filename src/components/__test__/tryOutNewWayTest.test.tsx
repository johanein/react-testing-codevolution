/* Greet should render the text hello and if a name is passed to the component,
it should render hello followed by the name */

import { render, screen } from "@testing-library/react";
import Greet from "../TDDGreet";

describe("Greet", () => {
  // describe.only and describe.skip is also possible
  test("Renders Greet correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });
  // test.only and test.skip is also possible
  //   if we are using it, then for "only" we have to use 'fit' and for "skip" we can use 'xit'
  describe("Nested", () => {
    test("Greet renders with property", () => {
      render(<Greet name="Albert" />);
      const textElement = screen.getByText("Hello Albert");
      expect(textElement).toBeInTheDocument();
    });
  });
});

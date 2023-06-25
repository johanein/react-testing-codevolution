import { render, screen } from "@testing-library/react";
import Greet from ".";

describe("Greet", () => {
  test("render Greet component", () => {
    render(<Greet name="Lify" />);
    const textElemet = screen.getByText("Hello Lify");
    expect(textElemet).toBeInTheDocument();
  });
});

import { MuiMode } from "./mui-mode";
// import { AppProviders } from "../providers/app-providers";
import { render, screen } from "../../test-utils";

describe("Muimode", () => {
  //   test("renders text correctly", () => {
  //     render(<MuiMode />, {
  //       wrapper: AppProviders,
  //     });
  //     screen.debug();
  //     const headingElement = screen.getByRole("heading");
  //     expect(headingElement).toHaveTextContent("dark mode");
  //   });
  test("renders text correctly", () => {
    render(<MuiMode />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});

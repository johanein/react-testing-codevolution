import { render, screen } from "@testing-library/react";
import { Users } from "./Users";
import { server } from "../../mocks/server";
import { rest } from "msw";

describe("Users", () => {
  test("should render correctly", () => {
    render(<Users />);
    const headingElement = screen.getByText("Users");
    expect(headingElement).toBeInTheDocument();
  });
  test("should render the list", async () => {
    render(<Users />);
    const listOfUsers = await screen.findAllByRole("listitem");
    expect(listOfUsers).toHaveLength(3);
  });

  test("renders error", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    render(<Users />);
    const error = await screen.findByText("Error fetching users");
    expect(error).toBeInTheDocument();
  });
});

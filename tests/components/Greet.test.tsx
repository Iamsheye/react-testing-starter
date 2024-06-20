import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";

describe("Greet Component", () => {
  it("renders greeting when name is provided", () => {
    render(<Greet name="John" />);
    const greetingElement = screen.getByText(/Hello John/i);
    expect(greetingElement).toBeInTheDocument();
  });

  it("renders login button when name is not provided", () => {
    render(<Greet />);
    const loginButton = screen.getByRole("button", { name: /Login/i });
    expect(loginButton).toBeInTheDocument();
  });
});

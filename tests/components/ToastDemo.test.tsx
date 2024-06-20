import { render, screen } from "@testing-library/react";
import ToastDemo from "../../src/components/ToastDemo";
import userEvent from "@testing-library/user-event";
import { Toaster } from "react-hot-toast";

describe("ToastDemo component", () => {
  beforeAll(() => {
    render(
      <>
        <ToastDemo />
        <Toaster />
      </>
    );
  });

  it("should render button", async () => {
    const button = screen.getByRole("button", { name: /show toast/i });
    expect(button).toBeInTheDocument();

    const user = userEvent.setup();
    await user.click(button);

    const toastElement = await screen.findByText(/success/i);
    expect(toastElement).toBeInTheDocument();
  });
});

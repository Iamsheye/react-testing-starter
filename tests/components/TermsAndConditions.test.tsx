import { render, screen } from "@testing-library/react";
import TermsAndConditions from "../../src/components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

describe("Terms & Conditions component", () => {
  it("renders terms and conditions component", () => {
    render(<TermsAndConditions />);

    const termsAndConditionsElement = screen.getByText(/Terms & Conditions/i);
    expect(termsAndConditionsElement).toBeInTheDocument();
  });

  it("checkbox toggles when clicked", async () => {
    render(<TermsAndConditions />);

    const checkboxElement = screen.getByLabelText(
      /I accept the terms and conditions/i
    );
    expect(checkboxElement).not.toBeChecked();

    const user = userEvent.setup();
    await user.click(checkboxElement);

    expect(checkboxElement).toBeChecked();
  });

  it("submit button is disabled when checkbox is unchecked", async () => {
    render(<TermsAndConditions />);

    const submitButtonElement = screen.getByRole("button", { name: /Submit/i });
    expect(submitButtonElement).toBeDisabled();

    const checkboxElement = screen.getByLabelText(
      /I accept the terms and conditions/i
    );

    const user = userEvent.setup();
    await user.click(checkboxElement);

    expect(submitButtonElement).toBeEnabled();
  });
});

import { render, screen } from "@testing-library/react";
import OrderStatusSelector from "../../src/components/OrderStatusSelector";
import { Theme } from "@radix-ui/themes";
import userEvent from "@testing-library/user-event";

describe("OrderStatusSelector component", () => {
  it("has correct options", async () => {
    const onChange = vi.fn();
    render(
      <Theme>
        <OrderStatusSelector onChange={onChange} />
      </Theme>
    );
    const status = screen.getByRole("combobox");
    const user = userEvent.setup();
    await user.click(status);
    const options = await screen.findAllByRole("option");
    expect(options).toHaveLength(3);
    const labels = options.map((option) => option.textContent);
    expect(labels).toEqual(["New", "Processed", "Fulfilled"]);
  });

  it.each([
    { label: /processed/i, value: "processed" },
    { label: /fulfilled/i, value: "fulfilled" },
    { label: /new/i, value: "new" }, 
  ])("calls onChange when status is $value", async ({ label, value }) => {
    const onChange = vi.fn();
    render(
      <Theme>
        <OrderStatusSelector onChange={onChange} />
      </Theme>
    );

    const trigger = screen.getByRole("combobox");
    const user = userEvent.setup();
    await user.click(trigger);

    const option = await screen.findByText(label);
    await user.click(option);
    expect(onChange).toHaveBeenCalledWith(value);
  });

});

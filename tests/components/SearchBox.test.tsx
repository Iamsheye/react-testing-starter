import { render, screen } from "@testing-library/react";
import SearchBox from "../../src/components/SearchBox";
import userEvent from "@testing-library/user-event";

describe("SearchBox component", () => {
  it("renders the input element", () => {
    render(<SearchBox onChange={() => {}} />);
    const inputElement = screen.getByPlaceholderText("Search...");
    expect(inputElement).toBeInTheDocument();
  });

  it("calls the onChange function when Enter key is pressed with a non-empty search term", async () => {
    const onChangeMock = vi.fn();
    render(<SearchBox onChange={onChangeMock} />);
    const inputElement = screen.getByPlaceholderText("Search...");
    const user = userEvent.setup();
    await user.type(inputElement, "test");
    await user.keyboard("{enter}");

    expect(onChangeMock).toHaveBeenCalledWith("test");
  });

  it("does not call the onChange function when Enter key is pressed with an empty search term", async () => {
    const onChangeMock = vi.fn();
    render(<SearchBox onChange={onChangeMock} />);
    const user = userEvent.setup();
    await user.keyboard("{enter}");

    expect(onChangeMock).not.toHaveBeenCalled();
  });
});

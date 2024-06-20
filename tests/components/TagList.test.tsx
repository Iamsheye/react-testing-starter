import { render, screen } from "@testing-library/react";
import TagList from "../../src/components/TagList";

describe("TagList component", () => {
  it("renders the list of tags", async () => {
    render(<TagList />);
    const tagElements = await screen.findAllByRole("listitem");
    expect(tagElements).toHaveLength(3);
    expect(tagElements[0]).toHaveTextContent("tag1");
    expect(tagElements[1]).toHaveTextContent("tag2");
    expect(tagElements[2]).toHaveTextContent("tag3");
  });
});

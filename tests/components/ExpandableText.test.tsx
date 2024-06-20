import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ExpandableText from "../../src/components/ExpandableText";

const longText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nihil aspernatur voluptatibus, iusto porro accusamus ducimus? Veritatis dolor magnam id, laboriosam voluptatibus adipisci, maiores consectetur deleniti minus porro tenetur dolorem. This is a long text.";

describe("Expandable Text component", () => {
  it("renders the text when it is within the limit", () => {
    const text = "This is a short text.";
    render(<ExpandableText text={text} />);
    const articleElement = screen.getByText(text);
    expect(articleElement).toBeInTheDocument();
  });

  it("renders the truncated text and 'Show More' button when the text is longer than the limit", () => {
    render(<ExpandableText text={longText} />);
    const truncatedText = longText.substring(0, 255) + "...";
    const truncatedArticleElement = screen.getByText(truncatedText);
    const showMoreButton = screen.getByText("Show More");
    expect(truncatedArticleElement).toBeInTheDocument();
    expect(showMoreButton).toBeInTheDocument();
  });

  it("expands the text and changes the button text when 'Show More' button is clicked", async () => {
    render(<ExpandableText text={longText} />);
    const showMoreButton = screen.getByText("Show More");

    const user = userEvent.setup();
    await user.click(showMoreButton);

    const expandedArticleElement = screen.getByText(longText);
    const showLessButton = screen.getByText("Show Less");
    expect(expandedArticleElement).toBeInTheDocument();
    expect(showLessButton).toBeInTheDocument();
  });
});

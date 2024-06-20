import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("Product image Gallery component", () => {
  it("renders product images", () => {
    const imageUrls = ["image1.jpg", "image2.jpg", "image3.jpg"];
    render(<ProductImageGallery imageUrls={imageUrls} />);

    const imageElements = screen.getAllByRole("img");
    expect(imageElements).toHaveLength(imageUrls.length);

    imageElements.forEach((element, index) => {
      expect(element).toHaveAttribute("src", imageUrls[index]);
    });
  });

  it("does not render anything when imageUrls array is empty", () => {
    render(<ProductImageGallery imageUrls={[]} />);

    const imageElements = screen.queryAllByRole("img");
    expect(imageElements).toHaveLength(0);
  });
});
 
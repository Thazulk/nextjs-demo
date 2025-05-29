import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../page";

// Mock the Next.js Image component
vi.mock("next/image", () => ({
  default: ({
    src,
    alt,
    className,
  }: {
    src: string;
    alt: string;
    className?: string;
  }) => {
    // Using a div instead of img to avoid ESLint warnings about not using Next.js Image component
    return (
      <div
        data-src={src}
        data-alt={alt}
        className={className}
        data-testid={`image-${alt.replace(/\s+/g, "-").toLowerCase()}`}
      />
    );
  },
}));

describe("Home Page", () => {
  it("renders the page correctly", () => {
    const { container } = render(<Home />);

    // Check if the Next.js logo is rendered
    expect(screen.getByTestId("image-next.js-logo")).toBeDefined();

    // Check if the "Get started" text is present
    expect(screen.getByText(/Get started by editing/i)).toBeDefined();

    // Check if the "Deploy now" button is present
    expect(screen.getByText(/Deploy now/i)).toBeDefined();

    // Check if the "Read our docs" link is present
    expect(screen.getByText(/Read our docs/i)).toBeDefined();

    // Check footer links
    expect(screen.getByText(/Learn/i)).toBeDefined();
    expect(screen.getByText(/Examples/i)).toBeDefined();
    expect(screen.getByText(/Go to nextjs.org/i)).toBeDefined();

    // Check if the component rendered without errors
    expect(container.firstChild).not.toBeNull();
  });
});

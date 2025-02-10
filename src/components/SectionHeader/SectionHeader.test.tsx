import { render, screen, fireEvent } from "@testing-library/react";
import SectionHeader from "./SectionHeader";
import { vi } from "vitest";

describe("SectionHeader", () => {
  it("renders the section header", () => {
    render(<SectionHeader title="Test Title" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByTestId("chevron-icon")).toHaveClass(
      "lucide-chevron-right"
    );
  });

  it("renders with default props", () => {
    render(<SectionHeader />);
    expect(screen.getByText("Absent")).toBeInTheDocument();
  });

  it("call onToggle when clicked", () => {
    const onToggle = vi.fn();
    render(<SectionHeader onToggle={onToggle} title="Toggle Test" />);
    const header = screen.getByText("Toggle Test");
    fireEvent.click(header);
    expect(onToggle).toHaveBeenCalledTimes(1);
  });

  it("toggles expanded state on click", () => {
    render(<SectionHeader title="Expanded Test" isExpanded={true} />);
    const header = screen.getByText("Expanded Test");
    fireEvent.click(header);
    expect(header).toBeInTheDocument(); // Ensures it still exists.
    expect(screen.getByTestId("chevron-icon")).toHaveClass(
      "lucide-chevron-down"
    );
  });
});

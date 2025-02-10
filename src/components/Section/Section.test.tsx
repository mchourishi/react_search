import { render, screen, fireEvent } from "@testing-library/react";
import Section from "./Section";

const mockItems = [
  {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    thumbnail: "https://test/40",
  },
  {
    name: "John Smith",
    email: "john.smith@example.com",
    thumbnail: "https://test/40",
  },
];

describe("Section Component", () => {
  it("renders the component", () => {
    render(<Section items={mockItems} isExpanded={true} />);
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    expect(screen.getByText("John Smith")).toBeInTheDocument();
  });

  it("renders correct number of ContactListITem components", () => {
    render(<Section items={mockItems} isExpanded={true} />);
    const contactListItems = mockItems.map((item) =>
      screen.getByText(item.name)
    );
    expect(contactListItems.length).toBe(mockItems.length);
  });

  it("does not render when isExpanded is false", () => {
    render(<Section items={mockItems} isExpanded={false} />);
    expect(screen.queryByText("Jane Doe")).not.toBeInTheDocument();
    expect(screen.queryByText("John Smith")).not.toBeInTheDocument();
  });

  it("renders correctly with an empty items array", () => {
    render(<Section items={[]} isExpanded={true} />);
    expect(screen.queryByText("Jane Doe")).not.toBeInTheDocument();
    expect(screen.queryByText("John Smith")).not.toBeInTheDocument();
  });
});

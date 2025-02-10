import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import ContactListItem from "./ContactListItem";

describe("ContactListItem", () => {
  const defaultProps = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    thumbnail: "path/to/thumbnail.jpg",
  };

  it("renders name and email correctly", () => {
    render(<ContactListItem {...defaultProps} />);
    expect(screen.getByText(defaultProps.name)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.email)).toBeInTheDocument();
  });

  it("renders without email correctly", () => {
    const name = "Andrew Gonsalves";
    render(<ContactListItem name={name} />);
    expect(screen.getByText(name)).toBeInTheDocument();
  });

  it("renders thumbnail with correct alt text", () => {
    render(<ContactListItem {...defaultProps} />);
    const thumbnail = screen.getByAltText(defaultProps.name);
    expect(thumbnail).toBeInTheDocument();
    expect(thumbnail).toHaveAttribute("src", defaultProps.thumbnail);
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<ContactListItem {...defaultProps} onClick={handleClick} />);

    fireEvent.click(screen.getByText(defaultProps.name));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

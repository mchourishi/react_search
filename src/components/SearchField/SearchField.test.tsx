import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import SearchField from "./SearchField";

describe("SearchField", () => {
  it("renders with default props", () => {
    render(<SearchField />);
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
  });

  it("renders with custom placeholder"),
    () => {
      render(<SearchField placeholder="Custom placeholder" />);
      expect(
        screen.getByPlaceholderText("Custom placeholder")
      ).toBeInTheDocument();
    };

  it("calls onSearch callback when input changes", () => {
    const onSearch = vi.fn();
    render(<SearchField onSearch={onSearch} />);

    const input = screen.getByTestId("search-input");
    fireEvent.change(input, { target: { value: "test" } });

    expect(onSearch).toHaveBeenCalledWith("test");
  });

  it("displays initial value when provided", () => {
    const initialValue = "initial value";
    render(<SearchField initialValue={initialValue} />);
    expect(screen.getByDisplayValue(initialValue)).toBeInTheDocument();
  });
});

import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import SearchableList from "./SearchableList";
import userEvent from "@testing-library/user-event";
import { ListItem } from "../../types";

const items: ListItem[] = [
  {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    status: "attended",
  },
  {
    name: "Sam Lot",
    email: "sam.lot@example.com",
    status: "attended",
  },
  {
    name: "John Smith",
    email: "john.smith@example.com",
    status: "absent",
  },
  {
    name: "Johnny Walker",
    email: "johnny.walker@example.com",
    status: "absent",
  },
];

describe("SearchableList", () => {
  // Test that the component renders without crashing
  test("renders SearchableList component", () => {
    render(<SearchableList items={items} />);
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
    expect(screen.getByText("Attended")).toBeInTheDocument();
    expect(screen.getByText("Absent")).toBeInTheDocument();
  });

  // Test the search functionality
  test("filters items based on search query", async () => {
    render(<SearchableList items={items} />);

    const searchInput = screen.getByPlaceholderText("Search");

    // Search for "jane"
    userEvent.type(searchInput, "jane");

    await waitFor(() => {
      // Assert that only "Jane Doe" appears
      expect(screen.getByText("Jane Doe")).toBeInTheDocument();

      // Assert that "Sam Lot" does NOT appear
      expect(screen.queryByText("Sam Lot")).not.toBeInTheDocument();

      // Assert that "John Smith" does NOT appear
      expect(screen.queryByText("John Smith")).not.toBeInTheDocument();

      // Assert that "Johnny Walker" does NOT appear
      expect(screen.queryByText("Johnny Walker")).not.toBeInTheDocument();
    });
  });

  // Test the section toggling functionality
  test("toggles sections when clicking on the headers", () => {
    render(<SearchableList items={items} />);

    const attendedHeader = screen.getByText("Attended");

    // Initially, attended section should be expanded and absent should be expanded
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    expect(screen.getByText("Sam Lot")).toBeInTheDocument();
    expect(screen.getByText("John Smith")).toBeInTheDocument();
    expect(screen.getByText("Johnny Walker")).toBeInTheDocument();

    // Click on the "Attended" header to toggle its section
    fireEvent.click(attendedHeader);
    expect(screen.queryByText("Jane Doe")).not.toBeInTheDocument();
    expect(screen.queryByText("Sam Lot")).not.toBeInTheDocument();

    // Click on the "Attended" header again to expand it back
    fireEvent.click(attendedHeader);
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    expect(screen.getByText("Sam Lot")).toBeInTheDocument();
  });

  // Test the absence of items when no items match the search
  test("shows no items when search does not match any name or email", async () => {
    render(<SearchableList items={items} />);

    const searchInput = screen.getByPlaceholderText("Search");

    // Search for a non-matching query
    userEvent.type(searchInput, "no-match");

    // Check that no items are shown
    await waitFor(() => {
      expect(screen.queryByText("Jane Doe")).not.toBeInTheDocument();
      expect(screen.queryByText("Sam Lot")).not.toBeInTheDocument();
      expect(screen.queryByText("John Smith")).not.toBeInTheDocument();
      expect(screen.queryByText("Johnny Walker")).not.toBeInTheDocument();
    });
  });

  // Test that both sections can be collapsed
  test("can collapse both sections", () => {
    render(
      <SearchableList
        items={items}
        initialExpandedSections={{ attended: true, absent: true }}
      />
    );

    const attendedHeader = screen.getByText("Attended");
    const absentHeader = screen.getByText("Absent");

    // Initially both sections are expanded
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    expect(screen.getByText("Sam Lot")).toBeInTheDocument();

    // Collapse the "Attended" section
    fireEvent.click(attendedHeader);
    expect(screen.queryByText("Jane Doe")).not.toBeInTheDocument();
    expect(screen.queryByText("Sam Lot")).not.toBeInTheDocument();

    // Collapse the "Absent" section
    fireEvent.click(absentHeader);
    expect(screen.queryByText("John Smith")).not.toBeInTheDocument();
    expect(screen.queryByText("Johnny Walker")).not.toBeInTheDocument();
  });
});

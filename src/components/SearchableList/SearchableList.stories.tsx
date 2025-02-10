import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";
import userEvent from "@testing-library/user-event";

import SearchableList from "./SearchableList";

const SearchableListMeta = {
  title: "Components/SearchableListWithHeaders",
  component: SearchableList,
  tags: ["autodocs"],
  argTypes: {
    items: [],
  },
} satisfies Meta<typeof SearchableList>;

export default SearchableListMeta;

type Story = StoryObj<typeof SearchableList>;

// Default Searchable List with Email
export const DefaultSearchableListWithEmail: Story = {
  args: {
    items: [
      {
        name: "Jane Doe",
        email: "jane.doe@example.com",
        status: "attended",
        thumbnail: `https://ui-avatars.com/api/?name=Jane+Doe&background=random`,
      },
      {
        name: "Sam Lot",
        email: "sam.lot@example.com",
        status: "attended",
        thumbnail: `https://ui-avatars.com/api/?name=Sam+Lot&background=random`,
      },
      {
        name: "John Smith",
        email: "john.smith@example.com",
        status: "absent",
        thumbnail: `https://ui-avatars.com/api/?name=John+Smith&background=random`,
      },
      {
        name: "Johnny Walker",
        email: "johnny.walket@example.com",
        status: "absent",
        thumbnail: `https://ui-avatars.com/api/?name=Johnny+Walker&background=random`,
      },
    ],
  },
};

// Default Searchable List without Email
export const DefaultSearchableListWithoutEmail: Story = {
  args: {
    items: [
      {
        name: "Jane Doe",
        status: "attended",
        thumbnail: `https://ui-avatars.com/api/?name=Jane+Doe&background=random`,
      },
      {
        name: "Sam Lot",
        status: "attended",
        thumbnail: `https://ui-avatars.com/api/?name=Sam+Lot&background=random`,
      },
      {
        name: "John Smith",
        status: "absent",
        thumbnail: `https://ui-avatars.com/api/?name=John+Smith&background=random`,
      },
      {
        name: "Johnny Walker",
        status: "absent",
        thumbnail: `https://ui-avatars.com/api/?name=Johnny+Walker&background=random`,
      },
    ],
  },
};

// Absent section collapsed
export const AbsentSectionIsCollapsed: Story = {
  args: {
    items: [
      {
        name: "Jane Doe",
        status: "attended",
        thumbnail: `https://ui-avatars.com/api/?name=Jane+Doe&background=random`,
      },
      {
        name: "Sam Lot",
        status: "attended",
        thumbnail: `https://ui-avatars.com/api/?name=Sam+Lot&background=random`,
      },
      {
        name: "John Smith",
        status: "absent",
        thumbnail: `https://ui-avatars.com/api/?name=John+Smith&background=random`,
      },
      {
        name: "Johnny Walker",
        status: "absent",
        thumbnail: `https://ui-avatars.com/api/?name=Johnny+Walker&background=random`,
      },
    ],
    initialExpandedSections: {
      attended: true, // Attended section remains open
      absent: false, // Absent section is collapsed
    },
  },
};

// Both sections are collapsed
export const BothSectionsAreCollapsed: Story = {
  args: {
    items: [
      {
        name: "Jane Doe",
        status: "attended",
        thumbnail: `https://ui-avatars.com/api/?name=Jane+Doe&background=random`,
      },
      {
        name: "John Smith",
        status: "absent",
        thumbnail: `https://ui-avatars.com/api/?name=John+Smith&background=random`,
      },
    ],
    initialExpandedSections: {
      attended: false,
      absent: false,
    },
  },
};

// Filtering the List
export const FilteredSearchableList: Story = {
  args: {
    items: [
      {
        name: "Johnny Doe",
        email: "johnny.doe@example.com",
        status: "attended",
        thumbnail: `https://ui-avatars.com/api/?name=Johnny+Doe&background=random`,
      },
      {
        name: "Sam Lot",
        email: "sam.lot@example.com",
        status: "attended",
        thumbnail: `https://ui-avatars.com/api/?name=Sam+Lot&background=random`,
      },
      {
        name: "John Smith",
        email: "john.smith@example.com",
        status: "absent",
        thumbnail: `https://ui-avatars.com/api/?name=John+Smith&background=random`,
      },
      {
        name: "Jane Walker",
        email: "jane.walker@example.com",
        status: "absent",
        thumbnail: `https://ui-avatars.com/api/?name=Johnny+Walker&background=random`,
      },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const searchField = await canvas.findByPlaceholderText("Search");
    await userEvent.type(searchField, "john"); // Simulate typing 'john' to filter
  },
};

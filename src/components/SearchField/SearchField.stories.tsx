import type { Meta, StoryObj } from "@storybook/react";
import SearchField from "./SearchField";

const searchFieldMeta = {
  title: "Components/SearchField",
  component: SearchField,
  tags: ["autodocs"],
  argTypes: {
    onSearch: { action: "searched" },
    placeholder: {
      control: "text",
      description: "Placeholder text for search input",
    },
    initialValue: {
      control: "text",
      description: "Initial value for search input",
    },
  },
} satisfies Meta<typeof SearchField>;

export default searchFieldMeta;
type Story = StoryObj<typeof SearchField>;

export const Default: Story = {
  args: {
    placeholder: "Search",
    initialValue: "",
  },
};

export const CustomWidth: Story = {
  args: {
    placeholder: "Search",
    initialValue: "",
  },
};
export const CustomValue: Story = {
  args: {
    placeholder: "Search",
    initialValue: "Hello World",
  },
};

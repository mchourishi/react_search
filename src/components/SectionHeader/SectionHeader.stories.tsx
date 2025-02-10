import type { Meta, StoryObj } from "@storybook/react";
import SectionHeader from "./SectionHeader";

const sectionHeaderMeta = {
  title: "Components/SectionHeader",
  component: SectionHeader,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text", description: "Title for header" },
    defaultExpanded: { control: "boolean" },
    onToggle: { action: "toggled" },
  },
} satisfies Meta<typeof SectionHeader>;

export default sectionHeaderMeta;
type Story = StoryObj<typeof SectionHeader>;

// Default Story
export const StoryWithoutTitle: Story = {
  args: {},
};

// Story with custom title
export const Default: Story = {
  args: {
    title: "Default Section Header",
    defaultExpanded: false,
  },
};

// Expanded Section
export const Expanded: Story = {
  args: {
    title: "Expanded Section Header",
    defaultExpanded: true,
  },
};

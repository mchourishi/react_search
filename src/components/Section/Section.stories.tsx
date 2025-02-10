import type { Meta, StoryObj } from "@storybook/react";
import Section from "./Section";

const sectionMeta = {
  title: "Components/Section",
  component: Section,
  tags: ["autodocs"],
  argTypes: {
    isExpanded: { control: "boolean" },
  },
} satisfies Meta<typeof Section>;
export default sectionMeta;

type Story = StoryObj<typeof Section>;

// Default Section
export const Default: Story = {
  args: {
    isExpanded: true,
    items: [
      {
        name: "Jane Doe",
        thumbnail: `https://ui-avatars.com/api/?name=Jane+Doe&background=random`,
      },
      {
        name: "John Smith",
        thumbnail: `https://ui-avatars.com/api/?name=John+Smith&background=random`,
      },
    ],
  },
};

// Default Story with Email
export const SectionWithEmail: Story = {
  args: {
    isExpanded: true,
    items: [
      {
        name: "Jane Doe",
        email: "jane.doe@example.com",
        thumbnail: `https://ui-avatars.com/api/?name=Jane+Doe&background=random`,
      },
      {
        name: "John Smith",
        email: "john.smith@example.com",
        thumbnail: `https://ui-avatars.com/api/?name=John+Smith&background=random`,
      },
    ],
  },
};

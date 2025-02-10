import type { Meta, StoryObj } from "@storybook/react";
import ContactListItem from "./ContactListItem";

const contactlistMeta = {
  title: "Components/ContactListItem",
  component: ContactListItem,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      description: "Name of contact.",
    },
    email: {
      control: "text",
      description: "Email of contact.",
    },
    thumbnail: {
      control: "text",
      description: "URL of the contact thumbnail.",
    },
    onClick: {
      action: "clicked",
    },
  },
} satisfies Meta<typeof ContactListItem>;

export default contactlistMeta;
type Story = StoryObj<typeof ContactListItem>;

// Default Story
export const Default: Story = {
  args: {
    name: "John Doe",
    email: "john.doe@example.com",
    thumbnail: "assets/thumbnail.jpg",
  },
};
// Story with another user
export const AnotherUser: Story = {
  args: {
    name: "Will Smith",
    email: "will.smith@example.com",
    thumbnail: `https://ui-avatars.com/api/?name=Will+Smith&background=random`,
  },
};
// Story with long text
export const LongText: Story = {
  args: {
    name: "Queen Victoria Winchester-Huntingdale IV",
    email: "queen.victoria.winchester-huntingdale.iv@example.com",
    thumbnail: `https://ui-avatars.com/api/?name=Queen+Victoria+Winchester`,
  },
};

// Story without email
export const WithoutEmail: Story = {
  args: {
    name: "Jonny Bravo",
    thumbnail: `https://ui-avatars.com/api/?name=Jonny+Bravo&background=random`,
  },
};

// Story without thumbnail
export const WithoutThumbnail: Story = {
  args: {
    name: "Maria Stewart",
    email: "maria.stewart@example.com",
  },
};

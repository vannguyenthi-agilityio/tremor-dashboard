import type { Meta, StoryObj } from "@storybook/react";

// Mocks
import { PROFILE_INFO } from "../../mocks/card";

// Components
import ContactCard from "./ContactCard";

export default { component: ContactCard };
const meta = {
  title: "Components/ContactCard",
  component: ContactCard,
  tags: ["autodocs"],
} as Meta<typeof ContactCard>;

type Story = StoryObj<typeof meta>;

export const ContactCardInfo: Story = {
  render: () => (
    <ContactCard
      title="Profile Information"
      description={PROFILE_INFO.description}
      info={PROFILE_INFO.info}
    />
  ),
};

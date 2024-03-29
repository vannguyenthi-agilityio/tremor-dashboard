import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "..";

const meta = {
  title: "Components/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Button />,
};

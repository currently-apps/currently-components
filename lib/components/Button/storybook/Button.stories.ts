import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../";

const meta = {
  title: "Core/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "btn-lg",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "btn-sm",
    label: "Button",
  },
};

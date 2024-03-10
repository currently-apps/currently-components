import type { Meta, StoryObj } from "@storybook/react";
import { Toolbar } from "../";

const meta = {
  title: "Writing/Toolbar",
  component: Toolbar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Toolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    textAreaRef: { current: null },
    lastStartPos: 0,
    lastEndPos: 0,
  },
};

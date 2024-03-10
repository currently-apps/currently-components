import type { Meta, StoryObj } from "@storybook/react";
import { Editor } from "../";

const meta = {
  title: "Writing/Editor",
  component: Editor,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Editor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {},
};

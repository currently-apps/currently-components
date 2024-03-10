import type { Meta, StoryObj } from "@storybook/react";
import { MarkdownRenderer } from "../";

const meta = {
  title: "Writing/MarkdownRenderer",
  component: MarkdownRenderer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof MarkdownRenderer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    content: "# Hello, world!",
  },
};

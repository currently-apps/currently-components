import type { Meta, StoryObj } from '@storybook/react';

import { Header } from '../../';

const meta = {
  title: 'Universal/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderStory: Story = {
  args: {
    user: {
      name: 'Jane Doe',
      imgUrl: 'https://api.dicebear.com/7.x/notionists/svg?seed=Sheba',
    },
      appName: 'My App',
  },
};

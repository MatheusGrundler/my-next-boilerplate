import type { Meta, StoryObj } from '@storybook/react';

import Button from '.';

export default {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: () => <Button />,
};

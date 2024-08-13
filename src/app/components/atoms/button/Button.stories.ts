import type { Meta, StoryObj } from '@storybook/react';
import type { IButton } from './Button.type';
import { Button as ButtonComponent } from './Button';

const meta = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<IButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Button: Story = {
  args: {
    children: 'Test Button',
  },
};

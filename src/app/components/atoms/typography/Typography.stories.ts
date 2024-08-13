import type { Meta, StoryObj } from '@storybook/react';
import type { ITypography } from './Typography.type';
import { Typography as TypographyComponent } from './Typography';

const meta = {
  title: 'Components/Typography',
  component: TypographyComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<ITypography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Typography: Story = {
  args: {
    children: 'Test Typography Item',
  },
};

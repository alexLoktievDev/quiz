import type { Meta, StoryObj } from '@storybook/react';
import type { ITypography } from '../typography/Typography.type';

import { HighlightedTypography as HighlightedTypographyComponent } from './HighlightedTypography';

const meta = {
  title: 'Components/HighlightedTypography',
  component: HighlightedTypographyComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<ITypography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HighlightedTypography: Story = {
  args: {
    children: 'Test HighlightedTypography Item',
  },
};

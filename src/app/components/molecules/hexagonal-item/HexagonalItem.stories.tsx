import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import type { IHexagonalItem } from './HexagonalItem.type';
import { HexagonalItem as HexagonalItemComponent } from './HexagonalItem';

const StyledStoryWrapper = styled.div`
  display: flex;
  min-width: 420px;

  > * {
    flex: 1;
  }
`;

const meta = {
  title: 'Components/Hexagonal Item',
  component: HexagonalItemComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <StyledStoryWrapper>
        <Story />
      </StyledStoryWrapper>
    ),
  ],
} satisfies Meta<IHexagonalItem>;

export default meta;

type Story = StoryObj<IHexagonalItem>;

export const HexagonalItem: Story = {
  args: {
    label: 'Test Hexagonal Item',
  },
};

import styled from 'styled-components';
import { Box } from '@components/atoms';
import { resolutionSizes } from '@helpers/styles';
import { HexagonalItem } from '@components/molecules';

export const StyledSidebarWrapper = styled(Box)<{
  isMobileMenuOpen?: boolean;
}>`
  overflow: hidden;
  display: flex;
  align-items: center;

  @media (max-width: ${resolutionSizes.tablet}) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? 'flex' : 'none')};
    background: ${({ theme }) => theme.colors.black.black5};
    overflow: auto;
    z-index: 3;
  }

  @media (min-width: ${resolutionSizes.tablet}) {
    padding: 69px;
  }
`;

export const StyledSidebarContent = styled(Box)`
  gap: 15px;

  @media (min-width: ${resolutionSizes.tablet}) {
    gap: 8px;
  }
`;

export const StyledSidebarContentNavHexagonalItem = styled(HexagonalItem)`
  min-width: 240px;
  width: 100%;

  @media (max-width: ${resolutionSizes.tablet}) {
    max-width: 240px;
    max-height: 40px;
  }
`;

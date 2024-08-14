import styled from 'styled-components';
import { Typography } from '@components/atoms';
import { resolutionSizes } from '@helpers/styles';

export const StyledFinalScreenTypography = styled(Typography)`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.black.black100};
  font-weight: ${({ theme }) => theme.fonts.weights.regular};
  opacity: 0.5;

  @media (max-width: ${resolutionSizes.tablet - 1}px) {
    text-align: center;
  }
`;

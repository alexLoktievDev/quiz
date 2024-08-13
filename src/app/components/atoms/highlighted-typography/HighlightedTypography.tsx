import styled from 'styled-components';
import { Typography } from '../typography';

export const HighlightedTypography = styled(Typography)`
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.orange.orange100};
`;

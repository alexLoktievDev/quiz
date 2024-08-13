import styled from 'styled-components';
import { resolutionSizes } from '@helpers/styles';

export const StyledButton = styled.button`
  min-width: 296px;
  min-height: 64px;
  padding: 15px;
  border: none;
  background-color: ${({ theme }) => theme.colors.orange.orange100};
  color: ${({ theme }) => theme.colors.white.white100};
  border-radius: 12px;
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  cursor: pointer;
  transition: background-color 0.5s;

  @media (max-width: ${resolutionSizes.tablet}) {
    min-height: 48px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.orange.orange80};
  }
`;

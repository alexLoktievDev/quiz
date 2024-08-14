import styled from 'styled-components';
import { resolutionSizes } from '@helpers/styles';

export const StyledStepperLayout = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black.black5};
`;

export const StyledStepperLayoutContent = styled.div`
  width: 73.89%;
  padding: 9.2% 0 8.5%;

  @media (min-width: ${resolutionSizes.tablet}px) {
    padding: 9.2% 10% 8.5% 5.5%;
  }

  @media (max-width: ${resolutionSizes.tablet - 1}px) {
    width: 100%;
  }
`;

export const StyledStepperLayoutSidebar = styled.div`
  display: flex;
  width: 26.11%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white.white100};

  @media (max-width: ${resolutionSizes.tablet - 1}px) {
    width: 0;
  }
`;

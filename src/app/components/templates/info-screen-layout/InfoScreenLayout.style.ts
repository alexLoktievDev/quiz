import styled, { css } from 'styled-components';
import { Box, Button, HandSvg, Typography } from '@components/atoms';
import { resolutionSizes } from '@helpers/styles';
import { TInfoScreenLayout } from './InfoScreenLayout.type';

export const StyledInfoScreenWithTriangle = styled.section<
  Pick<TInfoScreenLayout, 'hasTriangleBackground'>
>`
  display: flex;
  align-items: center;
  height: 100%;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;

    ${({ hasTriangleBackground, theme }) =>
      hasTriangleBackground &&
      css`
        background: ${theme.colors.orange.orange5};
        clip-path: polygon(100% 0, 0 100%, 100% 100%);
      `}
  }
`;

export const StyledInfoScreen = styled(StyledInfoScreenWithTriangle)`
  > * {
    position: relative;
  }
`;

export const StyledInfoScreenHandSvg = styled(HandSvg)`
  position: relative;
`;

export const StyledInfoScreenTypography = styled(Typography)`
  @media (max-width: ${resolutionSizes.tablet - 1}px) {
    font-size: 32px;
    text-align: center;
  }
`;

export const StyledInfoScreenButton = styled(Button)`
  @media (max-width: ${resolutionSizes.tablet - 1}px) {
    width: 100%;
    font-size: 14px;
  }
`;

export const StyledInfoScreenContentRight = styled(Box)`
  width: 50%;

  @media (max-width: ${resolutionSizes.tablet - 1}px) {
    width: 100%;
    align-items: center;
  }
`;

export const StyledInfoScreenContentLeft = styled(
  StyledInfoScreenContentRight,
)``;

export const StyledInfoScreenContent = styled(Box)`
  padding: 0 80px;
  max-width: 1440px;
  display: flex;
  margin: auto;
  align-items: center;
  flex-direction: row;
  line-height: 64.96px;

  svg {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: ${resolutionSizes.tablet - 1}px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
    text-align: center;
    line-height: 37.12px;
  }
`;

import { FC } from 'react';
import { Box } from '@components/atoms';
import { useTheme } from 'styled-components';
import {
  StyledInfoScreen,
  StyledInfoScreenButton,
  StyledInfoScreenContent,
  StyledInfoScreenContentLeft,
  StyledInfoScreenContentRight,
  StyledInfoScreenHandSvg,
  StyledInfoScreenTypography,
} from './InfoScreenLayout.style';
import { TInfoScreenLayout } from './InfoScreenLayout.type';

export const InfoScreenLayout: FC<TInfoScreenLayout> = ({
  text,
  buttonProps,
  header,
  hasTriangleBackground,
}) => {
  const theme = useTheme();
  const { children: buttonChildren, ...restButtonProps } = buttonProps || {};

  return (
    <StyledInfoScreen hasTriangleBackground={hasTriangleBackground}>
      <StyledInfoScreenContent>
        <StyledInfoScreenContentLeft>
          <StyledInfoScreenHandSvg />
        </StyledInfoScreenContentLeft>

        <StyledInfoScreenContentRight
          flexDirection="column"
          display="flex"
          alignItems="flex-start"
          gap="64px"
        >
          <Box display="flex" flexDirection="column" gap="8px">
            {header?.()}

            <StyledInfoScreenTypography
              fontSize="56px"
              fontWeight={theme.fonts.weights.semibold}
            >
              {text}
            </StyledInfoScreenTypography>
          </Box>

          <StyledInfoScreenButton {...restButtonProps}>
            {buttonChildren}
          </StyledInfoScreenButton>
        </StyledInfoScreenContentRight>
      </StyledInfoScreenContent>
    </StyledInfoScreen>
  );
};

import type { Preview } from '@storybook/react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '../src/app/helpers/configs/styles/registry'; // Adjust the path to your theme
import React from 'react';
import { GlobalStyle } from '../src/app/global-styles';

// Type for the decorator function
const withThemeProvider = (Story: React.FC) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Story />
  </ThemeProvider>
);

// Apply the decorator globally
export const decorators = [withThemeProvider];

const preview: Preview = {
  decorators,
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

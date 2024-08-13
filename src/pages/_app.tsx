import type { AppProps } from 'next/app';
import StyledComponentsRegistry, {
  theme,
} from '@helpers/configs/styles/registry';
import { ThemeProvider } from 'styled-components';
import RootLayout from '../app/layout';
import { GlobalStyle } from '../app/global-styles';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RootLayout>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </StyledComponentsRegistry>
    </RootLayout>
  );
};

export default MyApp;

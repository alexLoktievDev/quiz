import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html, body, #__next,  #__next > *, #root, main {
        height: 100%;
    }
    
    
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      
      &, & * {
          box-sizing: border-box;
      }
  }
`;

import { createGlobalStyle } from 'styled-components';
import '@fontsource/roboto';
import '@fontsource/open-sans';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    background: linear-gradient(135deg, #ff7e5f, #feb47b);
    color: #333;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Open Sans', sans-serif;
  }
`;


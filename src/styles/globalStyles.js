import { createGlobalStyle } from 'styled-components';
import '@fontsource/roboto';
import '@fontsource/open-sans';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    background: #f4f4f9; // Neutral background color
    color: #333;
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Open Sans', sans-serif;
  }
`;

export default GlobalStyle;

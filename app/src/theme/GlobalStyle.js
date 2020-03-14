import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap&subset=latin-ext');

 *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Montserrat', sans-serif;
  }

body {
    background: #F7F7F7;
}
`;

export default GlobalStyle;
import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local(''),
        url('/fonts/montserrat-v15-latin-300.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('/fonts/montserrat-v15-latin-regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local(''),
        url('/fonts/montserrat-v15-latin-600.woff2') format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-size: ${theme.font.sizes.medium};
      background-color: ${theme.colors.background_project};
      height: 100vh;
      width: 100vw;
    }

    body,
    input,
    textarea,
    button {
      font-family: ${theme.font.family};
    }
  `}

  button {
    cursor: pointer;
    background-color:initial;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

`;

export default GlobalStyles;

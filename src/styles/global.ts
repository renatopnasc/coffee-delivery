import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  :focus {
    outline: none;
  }

  body, input, button, textarea {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background: ${(props) => props.theme.BACKGROUND};
  }

`;

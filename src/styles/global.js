import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: all 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.8);
  }

  body, input, button, textarea {
    font-family: 'Poppins', serif;
    font-size: 16px;
    outline: none;
  }
`
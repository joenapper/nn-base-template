import { createGlobalStyle } from "styled-components";
import { colors, fontSize, deviceBelow, spacing } from "./theme";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    color: ${colors.black};
    font-family: "Montserrat", sans-serif;
    font-size: ${fontSize.sm};

    @media ${deviceBelow.mobile} {
        font-size: ${fontSize.base};
    }
  }

  ul {
    list-style: none;
    margin-left: ${spacing.none};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
  }

  a,
  input,
  button,
  textarea,
  select {
    font-family: inherit;
  }
`;

export default GlobalStyles;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, html, * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 140%;
  }
  body {
    background-color: ${(props) => props.theme.colors.gray600};
  }
`;

export default GlobalStyle;

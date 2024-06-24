import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, html, * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inter, sans-serif;

    &::-webkit-scrollbar-track
    {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
      background-color: ${(props) => props.theme.colors.white};
    }

    &::-webkit-scrollbar{
      background-color: ${(props) => props.theme.colors.white};
      width: ${(props) => props.theme.space.xxs};
    }
    
    &::-webkit-scrollbar-thumb{
      background-color: ${(props) => props.theme.colors.gray600};
      border-radius: ${(props) => props.theme.borderRadius.md};
    }
  }
  body {
    background-color: ${(props) => props.theme.colors.gray150};
  }
`;

export default GlobalStyle;

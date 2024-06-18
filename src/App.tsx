import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes";
import { Router } from "./Router";
import GlobalStyle from "./styles/globalStyles";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router />
      <GlobalStyle />
    </ThemeProvider>
  );
};

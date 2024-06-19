import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes";
import { Router } from "./Router";
import { CompanyContextProvider } from "./context/CompanyContextProvider";
import GlobalStyle from "./styles/globalStyles";

export const App = () => {
  return (
    <CompanyContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </CompanyContextProvider>
  );
};

import { ThemeProvider } from "styled-components";
import theme from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";
import { Routes } from "./routes";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyles />
    </ThemeProvider>
  );
}

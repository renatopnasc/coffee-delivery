import { ThemeProvider } from "styled-components";
import theme from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";
import { Routes } from "./routes";
import { OrderContextProvider } from "./contexts/OrderContext";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <OrderContextProvider>
        <Routes />
        <GlobalStyles />
      </OrderContextProvider>
    </ThemeProvider>
  );
}

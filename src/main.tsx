import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";

const colors = {
  colors: {
    brand: {
      900: "#2d2e37", // Cinza Escuro
      700: "#c4c4c4", // Cinza Claro
      500: "#3c3abe", // Azul Vibrante
      100: "#fcfcff", // Branco
    },
  },
  styles: {
    global: {
      body: {
        bg: "#2d2e37",
        color: "#fcfcff",
      },
    },
  },
};

const theme = extendTheme({ colors });

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

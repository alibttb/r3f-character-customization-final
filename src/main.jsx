import { MantineProvider, MantineColorsTuple } from '@mantine/core';
//import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CharacterAnimationsProvider } from "./contexts/CharacterAnimations";
import { CharacterCustomizationProvider } from "./contexts/CharacterCustomizationContext";


const myColor = [
  '#faedff',
  '#edd9f7',
  '#d8b1ea',
  '#c186dd',
  '#ae62d2',
  '#a34bcb',
  '#9d3fc9',
  '#8931b2',
  '#7a2aa0',
  '#6b218d'
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        globalStyles: (_theme) => ({
          body: {
            width: "100vw",
            height: "100vh",
          },
          "#root": {
            width: "100%",
            height: "100%",
          },
          colors: {
            myColor,
          }
        }),
      }}
    >
      <CharacterCustomizationProvider>
        <CharacterAnimationsProvider>
          <App />
        </CharacterAnimationsProvider>
      </CharacterCustomizationProvider>
    </MantineProvider>
  </React.StrictMode>
);

import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const fonts = {
  heading: "var(--font-syne), sans-serif",
  body: "var(--font-syne), sans-serif",
  sans: "var(--font-syne), sans-serif",
};

const colors = {
  primary: {
    _: "#1D79F2",
    900: "#1D79F2",
    800: "#1D79F2",
    700: "#1D79F2",
    600: "#1D79F2",
    500: "#1D79F2",
    400: "#1D79F2",
    300: "#1D79F2",
    200: "#1D79F2",
    100: "#1D79F2",
    50: "#1D79F2",
  },
  secondary: {
    _: "#98A9DC",
    900: "#98A9DC",
    800: "#98A9DC",
    700: "#98A9DC",
    600: "#98A9DC",
    500: "#98A9DC",
    400: "#98A9DC",
    300: "#98A9DC",
    200: "#98A9DC",
    100: "#98A9DC",
    50: "#98A9DC",
  },
  black: "#000000",
  white: "#ffffff",
};

export const theme = extendTheme({
  colors,
  fonts,
  config,
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("#ffffff", "black")(props),
      },
    }),
  },
});

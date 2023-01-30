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
    _: "#123087",
    900: "#123087",
    800: "#123087",
    700: "#123087",
    600: "#123087",
    500: "#123087",
    400: "#123087",
    300: "#123087",
    200: "#123087",
    100: "#123087",
    50: "#123087",
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

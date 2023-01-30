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
  brand: {
    _: "#00CCC0",
    900: "#003a37",
    800: "#00514c",
    700: "#005f5a",
    600: "#00766f",
    500: "#008c84",
    400: "#00a69c",
    300: "#00b9af",
    200: "#46dad1",
    100: "#a6ede9",
    50: "#eafbfa",
  },
  black: "#000000",
  white: "#ffffff",
  text: {
    accent: "#A4A4A4",
    placeholder: "#8E8E93",
  },
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

import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Outfit', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  colors: {
    gray: {
      50: "#f9f9fb",
      100: "#ededf2",
      200: "#d3d3dc",
      300: "#b3b3c2",
      400: "#a0a0b3",
      500: "#8989a0",
      600: "#6c6c82",
      700: "#1e1e2e",
      800: "#141422",
      900: "#0e0e1a",
    },
    brand: {
      50: "#f3e8ff",
      100: "#ddd0f9",
      200: "#c4b5f0",
      300: "#ab99e8",
      400: "#9b7de0",
      500: "#8B5CF6",
      600: "#7C3AED",
      700: "#6d28d9",
      800: "#5b21b6",
      900: "#4c1d95",
    },
    accent: {
      50: "#e0fcff",
      100: "#b3f5ff",
      200: "#81edfa",
      300: "#4de4f7",
      400: "#22d3ee",
      500: "#06B6D4",
      600: "#0891b2",
      700: "#0e7490",
      800: "#155e75",
      900: "#164e63",
    },
  },
  styles: {
    global: (props: Record<string, unknown>) => ({
      body: {
        bg: mode("gray.50", "gray.900")(props),
        color: mode("gray.800", "gray.50")(props),
      },
    }),
  },
  components: {
    Card: {
      baseStyle: (props: Record<string, unknown>) => ({
        container: {
          bg: mode("white", "rgba(255, 255, 255, 0.04)")(props),
          backdropFilter: "blur(12px)",
          border: mode(
            "1px solid rgba(0, 0, 0, 0.06)",
            "1px solid rgba(255, 255, 255, 0.06)"
          )(props),
          borderRadius: "16px",
          overflow: "hidden",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: mode(
            "0 4px 20px rgba(0, 0, 0, 0.06)",
            "none"
          )(props),
          _hover: {
            transform: "translateY(-6px) scale(1.02)",
            boxShadow: mode(
              "0 20px 40px rgba(124, 58, 237, 0.12), 0 0 30px rgba(124, 58, 237, 0.06)",
              "0 20px 40px rgba(139, 92, 246, 0.15), 0 0 30px rgba(139, 92, 246, 0.08)"
            )(props),
            border: "1px solid rgba(139, 92, 246, 0.25)",
          },
        },
      }),
    },
    Button: {
      defaultProps: {
        colorScheme: "brand",
      },
    },
    Menu: {
      baseStyle: (props: Record<string, unknown>) => ({
        list: {
          bg: mode("white", "rgba(20, 20, 34, 0.95)")(props),
          backdropFilter: "blur(16px)",
          border: mode(
            "1px solid rgba(0, 0, 0, 0.08)",
            "1px solid rgba(255, 255, 255, 0.08)"
          )(props),
          borderRadius: "12px",
          boxShadow: mode(
            "0 16px 48px rgba(0, 0, 0, 0.12)",
            "0 16px 48px rgba(0, 0, 0, 0.4)"
          )(props),
        },
        item: {
          bg: "transparent",
          _hover: {
            bg: mode(
              "rgba(124, 58, 237, 0.08)",
              "rgba(139, 92, 246, 0.15)"
            )(props),
          },
          borderRadius: "8px",
          mx: 1,
        },
      }),
    },
    Switch: {
      defaultProps: {
        colorScheme: "brand",
      },
    },
  },
});

export default theme;
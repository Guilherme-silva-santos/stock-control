declare module "../src/theme/theme" {
  export const colors = {
    white: "#FFFFFF",
    black: "#000000",
    red: "#D23C3C",
    pink: "#F96D91",
    purple: "#A765FB",
    yellow: "#F0AC5C",
    inputBorder: "#D4D4D4",
    placeholder: "#A3A3A3",

    green: {
      500: "#50C25C",
      300: "#189D3E",
      200: "#00D9D9",
    },

    gray: {
      900: "#151519",
      700: "#5B696D",
      500: "#818181",
      300: "#A3A3A3",
      200: "#E8E8E8",
      100: "#F3F5F9",
    },
  };

  export const fontFamily = {
    cooper: "Cooper",
    barlow: {
      black: "BarlowBlack",
      bold: "BarlowBold",
      extrabold: "BarlowExtrabold",
      extralight: "BarlowExtraLight",
      semiBold: "BarlowSemiBold",
      medium: "BarlowMedium",
      regular: "BarlowRegular",
      light: "BarlowLight",
    },
  };

  export const fontSizes = {
    xsmall: 8,
    small: 11,
    medium: 12,
    large: 14,
    xlarge: 16,
    xxlarge: 18,
    xxxlarge: 20,
    xxxxlarge: 24,
    xxxxxlarge: 30,
  };

  export const margins = {
    none: 0,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
  };

  export const paddings = {
    xsm: 2,
    none: 0,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
  };

  export const radius = {
    none: 0,
    sm: 12,
    full: 9999,
  };
}

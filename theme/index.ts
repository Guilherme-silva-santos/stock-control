export const colors = {
  white: "#fafafa",
  black: "#000000",
  primary: "#FFD500",
  red: "#D23C3C",
  inputBorder: "#D4D4D4",
  placeholder: "#A3A3A3",
  offWhite: "#FAFAFA",
  yellow: "#FFB651",

  green: {
    200: "#00D9D9",
    300: "#189D3E",
    500: "#50C25C",
  },

  gray: {
    100: "#F3F5F9",
    200: "#E8E8E8",
    300: "#A3A3A3",
    400: "#F0F3F7",
    500: "#818181",
    700: "#5B696D",
    900: "#151519",
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
} as const satisfies Record<string, number>;

export const margins = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
} as const satisfies Record<string, number>;

export const paddings = {
  none: 0,
  xsm: 2,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
} as const satisfies Record<string, number>;

export const radius = {
  none: 0,
  sm: 12,
  xxl: 32,
} as const satisfies Record<string, number>;

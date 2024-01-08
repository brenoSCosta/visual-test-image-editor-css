export default {
  grid: {
    container: "120rem",
    gutter: "2.8rem",
  },
  border: {
    radius: "0.6rem",
  },
  box: {
    shadow: "0 10px 10px rgba(0, 0, 0, 0.1)",
  },
  font: {
    family:
      "Roboto, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 700,
    sizes: {
      xxxxsmall: "0.7rem",
      xxxsmall: "1rem",
      xxsmall: "1.2rem",
      xsmall: "1.8rem",
      small: "2.2rem",
      medium: "2.8rem",
      large: "3.6rem",
      xlarge: "4.4rem",
      xxlarge: "5.2rem",
      xxxlarge: "6rem",
      huge: "7rem",
    },
  },
  colors: {
    primary: "#4CAF50",
    white: "#f7f7f7",
    gray_50: "#e0e0e0",
    gray_300: "#555",
    yellow_300: "#FFD700",
    purple_100: "#9C27B0",
    purple_300: "#673AB7",
    red_300: "#E57373",
    black: "#333",
  },
  spacings: {
    xxxsmall: "0.6rem",
    xxsmall: "0.8rem",
    xsmall: "1.2rem",
    small: "2rem",
    medium: "2.8rem",
    large: "3.6rem",
    xlarge: "4.4rem",
    xxlarge: "5.2rem",
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  transition: {
    default: "0.4s ease-in-out",
    fast: "0.2s ease-in-out",
  },
} as const;

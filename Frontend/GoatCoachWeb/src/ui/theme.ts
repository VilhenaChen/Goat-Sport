import { createTheme } from "@mui/material";

let themeTemp = createTheme({
  palette: {
    primary: {
      main: "#33658A",
      dark: "#040F0F",
      light: "#ABB6C4",
    },
    error: {
      main: "#A54343",
    },
  },
});

themeTemp = createTheme(themeTemp, {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Rubik Mono One",
          fontSize: "16px",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.title": {
            color: themeTemp.palette.primary.main,
            fontFamily: "Rubik Mono One",
            fontSize: "24px",
          },
          "&.label": {
            color: themeTemp.palette.primary.dark,
            fontFamily: "Rubik",
            fontSize: "20px",
            textAlign: "start",
            fontWeight: 500,
          },
          "&.value": {
            color: themeTemp.palette.primary.main,
            fontFamily: "Rubik",
            fontSize: "24px",
            textAlign: "start",
            marginLeft: "16px",
            fontWeight: 400,
          },
        },
      },
    },
  },
});

export const theme = themeTemp;

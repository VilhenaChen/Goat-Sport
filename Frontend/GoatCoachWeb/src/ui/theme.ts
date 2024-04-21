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
    success: {
      main: "#51B267",
    },
  },
});

themeTemp = createTheme(themeTemp, {
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: "Rubik Mono One",
          fontSize: "20px",
        },
      },
    },
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
            fontSize: "20px",
          },
          "&.subtitle": {
            color: themeTemp.palette.primary.main,
            fontFamily: "Rubik Mono One",
            fontSize: "20px",
            textAlign: "start",
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
          "&.tab": {
            fontFamily: "Rubik",
            fontSize: "24px",
            textAlign: "start",
            marginLeft: "16px",
            fontWeight: 400,
            color: themeTemp.palette.primary.light,
            padding: "8px",
            boxSizing: "border-box",
            "&&.selected": {
              color: themeTemp.palette.primary.main,
              backgroundColor: "rgba(51, 101, 138, 0.1)",
            },
          },
        },
      },
    },
  },
});

export const theme = themeTemp;

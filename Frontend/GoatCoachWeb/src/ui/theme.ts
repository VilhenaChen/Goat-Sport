import { createTheme } from "@mui/material";

let themeTemp = createTheme({
  palette: {
    primary: {
      main: "#33658A",
      dark: "#040F0F",
      light: "#ABB6C4"
    },
  },
});

themeTemp = createTheme(themeTemp, {
  components: {
    MuiButton: {
      styleOverrides : {
        root: {
          fontFamily: "Rubik Mono One",
          fontSize: "16px",
        }        
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.title": {
            color: themeTemp.palette.primary.main,
            fontFamily: "Rubik Mono One",
            fontSize: "24px",
          },
        },
      },
    },
  },
});

export const theme = themeTemp;

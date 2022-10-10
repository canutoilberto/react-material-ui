import { background } from "@chakra-ui/react";
import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: "#42a5f5",
      dark: "#0077c2",
      light: "#80d6ff",
      contrastText: "#000000",
    },
    secondary: {
      main: "#eeeeee",
      dark: "#bcbcbc",
      light: "#ffffff",
      contrastText: "#000000",
    },
    background: {
      default: "#F7F6F3",
      paper: "#FFFFFF",
    }
  }
});

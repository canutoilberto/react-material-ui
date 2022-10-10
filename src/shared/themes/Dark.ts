import { createTheme } from '@mui/material';

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: '#42a5f5',
      dark: '#0077c2',
      light: '#80d6ff',
      contrastText: '#000000',
    },
    secondary: {
      main: '#eeeeee',
      dark: '#bcbcbc',
      light: '#ffffff',
      contrastText: '#000000',
    },
    background: {
      default: '#202124',
      paper: '#303134',
    }
  }
});

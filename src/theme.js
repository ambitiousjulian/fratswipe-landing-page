// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff7e5f', // Your current primary color
    },
    secondary: {
      main: '#feb47b', // Your current secondary color
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'Open Sans',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#283593', // Setting a specific color for AppBar
        },
      },
    },
  },
});

export default theme;

import * as React from 'react';
import { createTheme , responsiveFontSizes  } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
let theme = createTheme({
  
  palette: {
    primary: {
      main: '#807AAC',
    },
    secondary: {
      main: '#9DEF5C',
    },
    background: {
        default: '#ECD5F1',
        },
    typography: {
          fontFamily: [
            // '-apple-system',
            // 'BlinkMacSystemFont',
            // '"Segoe UI"',
            // 'Roboto',
            // '"Helvetica Neue"',
            'Arial',
            // 'sans-serif',
            // '"Apple Color Emoji"',
            // '"Segoe UI Emoji"',
            // '"Segoe UI Symbol"',
            'Bebas Neue',
          ].join(','),
        },
    error: {
      main: red.A400,
    },
  },
 
});
theme = responsiveFontSizes(theme)

export default theme;
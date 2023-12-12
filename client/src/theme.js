import * as React from 'react';
import { createTheme , responsiveFontSizes  } from '@mui/material/styles';
import { red } from '@mui/material/colors';


// Create a theme instance.
let theme = createTheme({
  
  palette: {
    primary: {
      main: '#376F6F ',
    },
    secondary: {
      main: '#908a99',
    },
    background: {
        default: '#A6D6D6',
        },
    
    error: {
      main: red.A400,
    },
  },

  typography: {
    fontFamily: [
      // '-apple-system',
      // 'BlinkMacSystemFont',
      // '"Segoe UI"',
      // 'Roboto',
      // '"Helvetica Neue"',
      // '"Arial"',
      // 'sans-serif',
      // '"Apple Color Emoji"',
      // '"Segoe UI Emoji"',
      // '"Segoe UI Symbol"',
      'Bebas Neue',
      'DM Sans',
      'Varela Round',
    ].join(','),
  },
 
});
// theme = responsiveFontSizes(theme)

export default theme;
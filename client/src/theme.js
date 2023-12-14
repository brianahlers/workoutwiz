import * as React from 'react';
import { createTheme , responsiveFontSizes  } from '@mui/material/styles';
import { red } from '@mui/material/colors';


// Create a theme instance.
let theme = createTheme({
  
  palette: {
    primary: {
      main: '#708090 ',
    },
    secondary: {
      main: '#E6E6FA',
    },
    background: {
        default: '#E5E8E8',
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
      // 'Bebas Neue',
      // 'DM Sans',
      // 'Varela Round',
      'Public Sans',
    ].join(','),
  },
 
});

export default theme;
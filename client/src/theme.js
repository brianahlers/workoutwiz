import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#D656F0',
    },
    secondary: {
      main: '#55335B',
    },
    background: {
        default: '#ECD5F1',
        },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
// theme.js

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#bac964', // Customize primary color
    },
    secondary: {
      main: '#bac964', // Customize secondary color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Customize default font family
  },
});

export default theme;

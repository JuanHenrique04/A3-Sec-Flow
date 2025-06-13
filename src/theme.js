'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    cssVariables: true,
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
        background: {
            default: '#121212',
            paper: '#1d1d1d',
        },
    },
    typography: {
    fontFamily: 'var(--font-roboto)',
  },
});

export default theme;

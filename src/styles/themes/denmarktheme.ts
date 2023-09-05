import { createTheme } from '@mui/material/styles';

export const DenmarkDefaultTheme = {
  typography: {
    fontFamily: '"Source Sans 3", "Open Sans", sans-serif',
    color: '#818181',
    inputLabel: {
      color: '#818181',
      fontSize: 12,
    },
  },
  palette: {
    primary: {
      main: '#0F89FF',
      contrastText: '#818181',
    },
  },
  components: {
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          color: '#818181',
          fontSize: '14px',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#818181',
        },
        body1: {
          fontSize: '14px',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: '#818181',
          fontSize: '14px',
        },
        input: {
          color: '#4D4D4D',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: '#4D4D4D',
        },
      },
    },
  },
};
export const DenmarkDefault = createTheme(DenmarkDefaultTheme);

export default DenmarkDefault;

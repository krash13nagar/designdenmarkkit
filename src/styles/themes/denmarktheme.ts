import { createTheme } from '@mui/material/styles';

export const DenmarkDefaultTheme = {
  typography: {
    fontFamily: '"Source Sans 3", "Open Sans", sans-serif',
    inputLabel: {
      color: '#818181',
      fontSize: 12,
    },
  },
  palette: {
    primary: {
      main: '#0F89FF',
      // contrastText: '#818181',
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
    MuiSelect: {
      styleOverrides: {
        select: {
          padding: '6px 12px',
          padddingRight: '32px',
          minWidth: '85px',
          display: 'inline-flex',
        },
      },
    },
  },
};

export const ImageAuthoringThemeOptions = {
  palette: {
    primary: {
      main: '#0E88FF',
    },
    secondary: {
      main: '#4D4D4D',
    },
  },
  typography: {
    fontFamily: '"Source Sans 3", "Open Sans", sans-serif',
    htmlFontSize: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none' as any,
          fontSize: '12px',
          lineHeight: 'auto',
        },
      },
    },
  },
}
export const DenmarkDefault = createTheme(DenmarkDefaultTheme);
export const ImageAuthoringTheme = createTheme(ImageAuthoringThemeOptions)

export default DenmarkDefault;

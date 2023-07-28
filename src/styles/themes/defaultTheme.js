import { createTheme } from '@mui/material/styles';

export const DenDefaultThemeOptions = {
  typography: {
    fontFamily: '"Source Sans 3", "Open Sans", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontFamily: '"Source Sans 3", "Open Sans", sans-serif',
        },
      },
    },
  },
};
export const DenThemeDefault = createTheme(DenDefaultThemeOptions);

export default DenThemeDefault;

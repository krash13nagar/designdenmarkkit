import { createTheme } from '@mui/material/styles';

export const DenmarkDefaultTheme = {
  typography: {
    fontFamily: '"Source Sans 3", "Open Sans", sans-serif',
  },
  //   components: {
  //     MuiCssBaseline: {
  //       styleOverrides: `
  //             @font-face {
  //               font-family: "Source Sans 3";
  //               font-style: normal;
  //               font-weight: 400;
  //               }
  //           `,
  //     },
  //   },
};
export const DenmarkDefault = createTheme(DenmarkDefaultTheme);

export default DenmarkDefault;

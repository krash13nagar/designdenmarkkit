/*
theme overide documents
https://www.headway.io/blog/global-styling-with-material-ui-theme-overrides-and-props
*/
import { createTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#1596d1',
    },
    secondary: {
      // main: "#43425D",
      main: '#3bb1a4',
    },
    error: {
      main: '#c0392b',
    },
    background: {
      default: '#ecf0f1',
    },
    toolTip: {
      main: '#43425D',
    },
  },

  spacing: 2,

});

theme.props = {
  MuiButton: {
    // disableElevation: true,
  },

  // MuiInputLabel: {
  //   shrink: true, // <---------
  // },

  // MuiInput: {
  //   disableUnderline: true, // <---------
  // },
  MuiTooltip: {
    arrow: true,
  },
  MuiAutocomplete: {},

};
theme.overrides = {
  typography: {
    fontFamily: '"Lato", "Open Sans", "sans-serif"',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  MuiButton: {
    root: {
      borderRadius: '4px',
      textTransform: 'none',
      lineHeight: 'inherit',
    },
    containedPrimary: {
      '&:hover': {
      },
    },
    containedSecondary: {
      fontWeight: 700,
    },
  },

  MuiInputLabel: {
    root: {
      textTransform: 'capitalize',
      color: 'rgba(0,0,0,0.54)',
      font: 'normal normal 500 1rem/1.286rem "Lato", "Open Sans", "sans-serif"',
    },
  },

  // MuiOutlinedInput :{
  //       root: {
  //             background:"#F1F1F3",
  //             color:"#333",
  //             //borderRadius: "8px",

  //             "&$notchedOutline": {
  //               padding:theme.spacing(0, 0),
  //               background:"#F1F1F3",
  //               color:"#333",
  //               borderColor:'#F1F1F3',
  //             },

  //             "&:hover $notchedOutline": {
  //               color:"#333",
  //               background:"transparent",
  //               borderColor:'#1596d1',
  //             },

  //             "&$focused $notchedOutline": {
  //               border:"1px solid rgba(0, 0, 0, 0)",
  //               background:"transparent",
  //               color:"#333",
  //               borderColor:'#1596d1',
  //               borderWidth:'1px',
  //               color:'#333'
  //             },

  //             "&&& $input": {
  //               border:'1px solid rgba(0, 0, 0, 0)',
  //               padding:theme.spacing(2, 2),
  //               color:"#333",
  //             },

  //             "&&& $fieldset": {
  //               color:"#333",
  //               //borderColor:'rgba(0, 0, 0, 0)',
  //             },

  //             "&&& $adornedEnd":{
  //               padding:"0 !important",
  //               color:"#333"
  //             }
  //           },

  //           // "&$notchedOutline": {
  //           //   borderColor:'#F1F1F3',
  //           // },
  // },

  MuiTooltip: {
    tooltip: {
      // backgroundColor: '#fff',
      // border: `1px solid ${theme.palette.toolTip.main}`,
      // color: theme.palette.toolTip.main,
      fontSize: '0.75rem',
    },
    // arrow: {
    //   color: theme.palette.toolTip.main,
    // },
  },

  MuiCircularProgress: {
    root: {

    },
  },

  MuiAccordion: {
    root: {
      backgroundColor: 'transparent',
      padding: '0 10px',
      margin: '0 10px',
      '&$expanded': {
        margin: '5px 10px',
        minHeight: 'max-content',
      },
    },
  },
  MuiAccordionSummary: {
    root: {
      '&$expanded': {
        // margin: '5px 10px',
        minHeight: 'max-content',
      },
    },
    content: {
      margin: '5px 0',
      '&$expanded': {
        margin: '5px 0',
        minHeight: 'max-content',
      },
    },
  },

  MuiSelect: {
    select: {
      padding: '7px 25px 7px 5px !important',
    },
    '&& iconOutlined': {
      paddingRight: '0.357rem',
    },
  },

  MuiList: {
    root: {
      maxHeight: '21.429rem',
      overflow: 'scroll-y',
    },
  },

  // MuiChip: {
  //   root:{
  //     maxWidth: "calc(75% - 6px) !important"
  //   },
  //   label:{

  //   },
  // },

  MuiInput: {
    root: {
      // borderColor: "rgba(0,0,0,0.12)"
    },
    underline: {
      '&:before': {
        borderColor: 'rgba(0,0,0,0.12) !important',
      },
      '&:hover': {
        '&:before': {
          borderWidth: '1px  !important',
        },
        '&:after': {
          borderWidth: '1px !important',
        },
      },
      '&:focus': {
        '&:before': {
          borderWidth: '1px  !important',
        },
        '&:after': {
          borderWidth: '1px !important',
        },
      },
    },
  },

  MuiTypography: {
    body1: {
      // fontFamily: "'Open Sans', sans-serif",
      // fontWeight: 400,
      fontSize: '0.75rem',
      // color: "red"
    },
  },
};

export default theme;

import { createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import grey from '@material-ui/core/colors/grey';
import teal from '@material-ui/core/colors/teal';


const getOverides = (theme) => {
  
  return {
    ...theme.overrides,

    MuiTreeItem: {
      root:{
        '&:focus > $content $label':{
          backgroundColor: theme.palette.primary.main,
          color: grey[50],
          '@media (hover: none)': {
            background: 'transparent',
            color: grey[50],
          },

        },
        '&$selected > $content $label': {
          backgroundColor: theme.palette.primary.main,
          color: grey[50],
          '@media (hover: none)': {
            backgroundColor: theme.palette.primary.main,
            color: grey[50],
          },

        },
        '&$selected > $content $label:hover': {
          backgroundColor: grey[50],
          color: blueGrey[800],
          '@media (hover: none)': {
            backgroundColor: ' #607d8b !important',
            color: grey[50],
          },
        },
        '&$selected:focus > $content $label': {
          backgroundColor: theme.palette.primary.main,
          color: '#fff',
          '@media (hover: none)': {
            background: 'transparent',
            color: theme.palette.primary.dark,
          },
        }
      },
      content:{
        paddingLeft: 10,
        width: '100%',
      },
      label:{
        '&:hover': {
          backgroundColor: blueGrey[50],
        },
        padding: 5,
      },
      iconContainer: {
        marginRight: 4,
        color: blueGrey[500],
        width: 20,
        display: 'flex',
        flexShrink: 0,
        justifyContent: 'center',
        '& svg': {
          fontSize: 25,
        },
      },   
    },
  }
};


export const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      light: blueGrey[500],
      main: blueGrey[700],
      dark: blueGrey[800],
      contrastText: grey[50],
    },
    secondary: {
      light: grey[50],
      main: grey[50],
      dark: grey[100]
    }
  },
  typography: {
    h4:{
      color: blueGrey[700],
    },
    body1:{
      color: blueGrey[800],
      lineHeight: 2
    }
  },
});

export const darkTheme = createMuiTheme({
  palette: {
      type: "dark",
      primary: {
        main: teal[500],
      },
      secondary: {
        main: grey[100],
      },
      background: {
        paper: '#1a2125',
        default: '#1a2125',
    }
  },
  typography: {
    h4:{
      color: grey[100],
    },
    body1:{
      color: grey[300],
      lineHeight: 2
    }
  },
});

lightTheme.overrides = getOverides(lightTheme);
darkTheme.overrides = getOverides(darkTheme);






import { createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import grey from '@material-ui/core/colors/grey';
import teal from '@material-ui/core/colors/teal';

const getOverides = theme => {
  return { ...theme.overrides,
    MuiTreeItem: {
      root: {
        '&:focus > $content $label': {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.secondary.light,
          '@media (hover: none)': {
            background: 'transparent',
            color: theme.palette.secondary.light
          }
        },
        '&$selected > $content $label': {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.secondary.light,
          '@media (hover: none)': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.light
          }
        },
        '&$selected > $content $label:hover': {
          backgroundColor: theme.palette.secondary.light,
          color: theme.palette.primary.dark,
          '@media (hover: none)': {
            backgroundColor: theme.palette.type === 'light' ? '#607d8b !important' : '#009688 !important',
            color: theme.palette.secondary.light
          }
        },
        '&$selected:focus > $content $label': {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.secondary.light,
          '@media (hover: none)': {
            background: 'transparent',
            color: theme.palette.primary.dark
          }
        }
      },
      content: {
        paddingLeft: 10,
        width: '100%'
      },
      label: {
        '&:hover': {
          backgroundColor: theme.palette.type === 'light' ? theme.palette.secondary.main : theme.palette.primary.light
        },
        padding: 5
      },
      iconContainer: {
        marginRight: 4,
        color: theme.palette.primary.main,
        width: 20,
        display: 'flex',
        flexShrink: 0,
        justifyContent: 'center',
        '& svg': {
          fontSize: 25
        }
      }
    }
  };
};

export const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      light: blueGrey[500],
      main: blueGrey[700],
      dark: blueGrey[800],
      contrastText: grey[50]
    },
    secondary: {
      light: "#fff",
      main: grey[50],
      dark: grey[100]
    }
  },
  typography: {
    h4: {
      color: blueGrey[700]
    },
    h3: {
      color: blueGrey[700],
      fontWeight: 'bold',
      fontSize: '40px'
    },
    body1: {
      color: blueGrey[800],
      lineHeight: 2
    }
  }
});
export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: teal[500]
    },
    secondary: {
      main: grey[100],
      light: grey[50],
      dark: grey[500]
    },
    background: {
      paper: '#1a2125',
      default: '#1a2125'
    }
  },
  typography: {
    h4: {
      color: grey[100]
    },
    body1: {
      color: grey[300],
      lineHeight: 2
    }
  }
});
lightTheme.overrides = getOverides(lightTheme);
darkTheme.overrides = getOverides(darkTheme);
console.log(3, lightTheme);
import { createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import grey from '@material-ui/core/colors/grey';


export default createMuiTheme({

    palette: {
        type: "light",
        primary: {
          main: blueGrey[500],
        },
        secondary: {
          main: grey[50],
        }
    },
    typography: {
      h4:{
        color: blueGrey[700],
        lineHeight: 2
      },
      body1:{
        color: blueGrey[800],
        lineHeight: 2
      }
    },

    overrides: {
      MuiTreeItem: {
        root:{
          '&:focus > $content $label':{
            backgroundColor: blueGrey[500],
            color: grey[50],
            '@media (hover: none)': {
              background: 'transparent',
              color: grey[50],
            },

          },
          '&$selected > $content $label': {
            backgroundColor: blueGrey[500],
            color: grey[50],
            '@media (hover: none)': {
              backgroundColor: blueGrey[500],
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
            backgroundColor: blueGrey[500],
            color: '#fff',
            '@media (hover: none)': {
              background: 'transparent',
              color: blueGrey[900],
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
    },
});




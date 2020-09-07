import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import grey from '@material-ui/core/colors/grey';


export default createMuiTheme({

    palette: {
      type: 'dark',
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
        lineHeight: 2
      },
      body1:{
        color: grey[300],
        lineHeight: 2
      }
    },
    overrides: {
      MuiSwitch: {
        track:{
          opacity: 1,
          backgroundColor: '#1a2125',
        },
      },
      MuiTreeItem: {
        root:{
          '&:focus > $content $label':{
            backgroundColor: teal[500],
            color: grey[50],
          },
          '&$selected > $content $label': {
            backgroundColor: teal[500],
            color: grey[50],
          },
          '&$selected > $content $label:hover': {
            backgroundColor: "#009688 !important",
            color: teal[800],
          },
          '&$selected:focus > $content $label': {
            backgroundColor: teal[500],
            color: grey[50],
          }
        },
        content:{
          paddingLeft: 10,
          width: '100%',
        },
        label:{
          '&:hover': {
            backgroundColor: teal[300],
          },
          padding: 5,
        },
        iconContainer: {
          marginRight: 4,
          color: teal[500],
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



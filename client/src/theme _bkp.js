import { createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';


export default createMuiTheme({
  
    palette: {
      type: 'light',
        primary: {
          main: blueGrey[500],
        },
      },
      overrides: {
        
        MuiTreeItem: {
          root:{
            '&:focus > $content $label':{
              backgroundColor: '#ededed'
            },
            '&$selected > $content $label': {
              backgroundColor: '#ededed'
            },
            '&$selected > $content $label:hover, &$selected:focus > $content $label': {
              backgroundColor: '#ededed',
            }
          },
          content:{
            flexDirection: 'row-reverse',
            paddingLeft: '10px',
            width: 280,
            textDecoration: 'none'
          },
          label:{
            '&:hover': {
              backgroundColor: '#ededed'},
            padding: 6,
            marginTop: 5,   
          },
          iconContainer: {
            marginRight: 4,
            color: "#3b4c54s",
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

});



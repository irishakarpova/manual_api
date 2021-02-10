import React from 'react';
import { useHistory } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from './components/drawer'
import AppBar from './components/appBar';
import ResponsiveContent from './components/paper'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { lightTheme, darkTheme } from './themes/themes';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  }}
))

function MainPage(props) {

  const history = useHistory();
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [currentId, setCurrentId] = React.useState(null)
  const [currentTheme, setCurrentTheme] = React.useState(lightTheme)

  React.useEffect(() => {
    history.listen(() => {
      setCurrentId(null);
    });
  });

  const changeTheme = () =>{
    setCurrentTheme( currentTheme === lightTheme ? darkTheme : lightTheme )
  }

  const handleClick = (id) => {
    setCurrentId(id);
  }
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <MuiThemeProvider theme={currentTheme}>
      <div className={classes.root}>
        <CssBaseline />
      
        <AppBar changeTheme ={changeTheme} 
                handleDrawerToggle={handleDrawerToggle} 
                id={currentId}  /> 

        <Router>
          <Switch>
            <Route path='/manual/:parent?/:id?' 
                   render={(props)=> 
                   <Drawer handleDrawerToggle = { handleDrawerToggle }
                           mobileOpen = { mobileOpen }
                           handleClick={handleClick} 
                           match = { props.match } /> }>          
            </Route> 
          </Switch> 
        </Router> 

        <Router>
          <Switch>

            <Route path='/manual/:parent?/:id?' 
                   render={(props)=> 
                   <ResponsiveContent match={props.match} 
                                      currentTheme={currentTheme}
                                      id={currentId}/>  }>  
            </Route> 
          </Switch> 
        </Router> 

    </div>
    </MuiThemeProvider> 
  );
}

export default MainPage;

import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from './components/drawer'
import AppBar from './components/appBar';
import ResponsiveContent from './components/paper'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import darkTheme from './themes/darkTheme';
import lightTheme from './themes/lightTheme';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  }}
))

function App() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [currentId, setCurrentId] = React.useState(null)
  const [currentTheme, setCurrentTheme] = React.useState(lightTheme)

  const chancheTheme = () =>{
    setCurrentTheme( currentTheme === lightTheme ? darkTheme: lightTheme )
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
        <AppBar chancheTheme ={chancheTheme} handleDrawerToggle={handleDrawerToggle} />
        <Router>
          <Switch>
            <Route path='/manual/manager/:parent?/:id?' 
                   render={(props)=> <Drawer handleDrawerToggle = { handleDrawerToggle }
                                            mobileOpen = { mobileOpen }
                                            handleClick={handleClick} 
                                            match = { props.match } /> }>
                                              
            </Route> 
          </Switch> 
        </Router> 
        <Router>
          <Switch>
            <Route path='/manual/manager/:parent?/:id?' 
                   render={(props)=> <ResponsiveContent match={props.match} id={currentId}/>  }>
                             
            </Route> 
          </Switch> 
        </Router> 
    </div>
    </MuiThemeProvider> 
  );
}

export default App;


 

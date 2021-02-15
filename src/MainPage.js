import React, { useEffect } from 'react';
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

function MainPage() {

  const history = useHistory();
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [currentId, setCurrentId] = React.useState(null)
  const [currentTheme, setCurrentTheme] = React.useState(lightTheme)
  const [checked, setChecked] = React.useState(false)

  useEffect(() => {
    const typeTheme = window.localStorage.getItem('storeIsTheme') 
    if(typeTheme === 'darkTheme'){
      setCurrentTheme(darkTheme);
      setChecked(true)
    } else{
      setCurrentTheme(lightTheme)
    }
  },[])

  useEffect(() => {
    window.localStorage.setItem('storeIsTheme', 
    currentTheme === lightTheme ? "lightTheme" : "darkTheme" )
  }, [currentTheme])


  useEffect(() => {
    history.listen(() => {
      setCurrentId(null);
    });
  });

  const changeTheme = () => {
    const toDark = currentTheme === lightTheme;
    setCurrentTheme( toDark ? darkTheme : lightTheme )
    setChecked(toDark)
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
        <Router>
          <Route path='/manual/:parent?/:id?' 
                 render={(props)=> 
                  <AppBar 
                    match = {props.match} 
                    changeTheme = {changeTheme} 
                    checked = {checked}
                    handleDrawerToggle = {handleDrawerToggle} 
                    id={currentId}  /> }>
          </Route> 

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

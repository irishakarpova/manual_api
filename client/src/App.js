import React from 'react';
import Drawer from './components/drawer'
import AppBar from './components/appBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import Lighttheme from './lightTheme';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  }}
))

function App() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    console.log(mobileOpen)
    setMobileOpen(!mobileOpen);
  };

  return (
    <MuiThemeProvider theme={Lighttheme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar handleDrawerToggle={handleDrawerToggle} />
        <Router>
          <Switch>
            <Route path='/manual/manager/:parent?/:id?' 
                  render={(props)=> <Drawer handleDrawerToggle = { handleDrawerToggle }
                                            mobileOpen = { mobileOpen }
                                            match = { props.match } /> }>
            </Route> 
          </Switch> 
        </Router> 
    </div>
    </MuiThemeProvider> 
  );
}

export default App;

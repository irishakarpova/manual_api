import React from 'react';
import Drawer from './components/drawer'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/manual/manager/:parent?/:id?' 
               render={(props)=> <Drawer match={props.match} />} >
        </Route> 
      </Switch> 
    </Router>  
  );
}

export default App;

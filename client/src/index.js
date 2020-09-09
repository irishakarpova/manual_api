import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {serverUrl} from './config'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

const client = new ApolloClient({
  uri: serverUrl,
  cache: new InMemoryCache()
});


ReactDOM.render(
  <ApolloProvider client={client}> 
    <Router>
      <Switch>
        <Route path='/manual/manager/:parent?/:id?' 
               render={(props)=> 
          <App match = {props.match} /> }>
        </Route> 
      </Switch> 
    </Router> 
  </ApolloProvider>,
  document.getElementById('root')
);



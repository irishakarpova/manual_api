import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {serverUrl} from './config'
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: serverUrl,
  cache: new InMemoryCache()
});


ReactDOM.render(

  <ApolloProvider client={client}> 
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);



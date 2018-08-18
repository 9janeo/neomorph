import React, {Component} from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';

import App from './components/app';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// React Router
const routes = (
  <Provider store={createStoreWithMiddleware(reducers)}>
  <Router>
    <Route path="/" component={App} />
  </Router>
  </Provider> 
);


render( // rendering to the DOM by replacing #page with the root React component  
  (routes) , document.getElementById('neomorph') // rendering the route
);
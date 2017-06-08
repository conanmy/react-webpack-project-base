import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router/umd/ReactRouter';

import Home from './components/Home';
import Layout from './components/Layout';
import About from './components/About';

var routes = (
  <Router history={hashHistory}>
    <Route component={Layout} path="/">
      <IndexRoute component={Home} />
      <Route component={About} path="/about" />
    </Route>
  </Router>
);

export default routes;
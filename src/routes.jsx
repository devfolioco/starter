import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import App from './views/App';
import Posts from './views/Posts';
import About from './views/About';
import NotFound from './views/NotFound';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/todos" component={App} />
      <Route path="/posts" component={Posts} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
export default Routes;

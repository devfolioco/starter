import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import App from './components/App';

const Home = () => (
  <div>
    <h2>Home</h2>
    <Link to="/todos">Todos App</Link>
    <Link to="/about">About</Link>
  </div>
);

const About = () => (
  <div>
    <h2>Devfolio Starter!</h2>
  </div>
);

const NoMatch = () => (
  <div>
    <h2>404</h2>
  </div>
);

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/todos" component={App} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
);
export default Routes;

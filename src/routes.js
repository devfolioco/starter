import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const NoMatch = () => (
  <div>
    <h2>404</h2>
  </div>
);

const Home = Loadable({
  loader: () => import('./views/Home'),
  loading: Loading,
});

const App = Loadable({
  loader: () => import('./views/App'),
  loading: Loading,
});

const Posts = Loadable({
  loader: () => import('./views/Posts'),
  loading: Loading,
});

const About = Loadable({
  loader: () => import('./views/About'),
  loading: Loading,
});

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/todos" component={App} />
      <Route path="/posts" component={Posts} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
);
export default Routes;

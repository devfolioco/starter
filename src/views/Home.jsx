import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <Helmet>
      <title>Home | Devfolio Starter</title>
    </Helmet>
    <h2>Home</h2>
    <Link to="/todos">Todos App</Link> <br />
    <Link to="/posts">Posts from API</Link> <br />
    <Link to="/about">About</Link>
  </div>
);

export default Home;

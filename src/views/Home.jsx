import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import devfolioLogo from '../assets/devfolio.png';

const Home = () => (
  <div>
    <Helmet>
      <title>Home | Devfolio Starter</title>
    </Helmet>
    <img src={devfolioLogo} alt="Devfolio Logo" />
    <h2>Home</h2>
    <Link to="/todos">Todos App</Link> <br />
    <Link to="/posts">Posts from API</Link> <br />
    <Link to="/about">About</Link>
  </div>
);

export default Home;

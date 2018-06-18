import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
    <Link to="/todos">Todos App</Link> <br />
    <Link to="/about">About</Link>
  </div>
);

export default Home;

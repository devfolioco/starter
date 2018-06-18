import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Footer from '../components/Footer';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

const Container = styled.div`
  background-color: lightgray;
`;

const App = () => (
  <Container>
    <Helmet>
      <title>Todos | Devfolio Starter</title>
    </Helmet>
    <AddTodo />
    <TodoList />
    <Footer />
  </Container>
);
export default App;

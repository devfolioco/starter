import React from 'react';
import styled from 'styled-components';

import Footer from '../components/Footer';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

const Container = styled.div`
  background-color: lightgray;
`;

const App = () => (
  <Container>
    <AddTodo />
    <TodoList />
    <Footer />
  </Container>
);
export default App;

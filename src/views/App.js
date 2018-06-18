import React from 'react';
import styled from 'styled-components';

import Footer from '../components/Footer';
import AddTodo from '../components/AddTodo';
import VisibleTodoList from '../components/VisibleTodoList';

const Container = styled.div`
  background-color: lightgray;
`;

const App = () => (
  <Container>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </Container>
);
export default App;

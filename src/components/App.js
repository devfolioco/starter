import React from 'react';
import styled from 'styled-components';

import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

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

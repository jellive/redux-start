import React, { useContext, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { addTodo } from './redux/actions';
import useReduxDispatch from './hooks/useReduxDispatch';
import useReduxState from './hooks/useReduxState';
import TodoListContainer from './containers/TodoListContainer';
import TodoFormContainer from './containers/TodoFormContainer';



function App() {
  const state = useReduxState()
  const dispatch = useReduxDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <TodoListContainer />
      <TodoFormContainer />
      </header>
      
      
    </div>
  );

  function click() {
    dispatch(addTodo('todo'))
  }
}

export default App;

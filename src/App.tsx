import React, { useContext, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { addTodo } from './redux/actions';
import useReduxDispatch from './hooks/useReduxDispatch';
import useReduxState from './hooks/useReduxState';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';



function App() {
  const state = useReduxState()
  const dispatch = useReduxDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <TodoList />

      <TodoForm />
        {/* <button onClick={click}>추가</button> */}
      </header>
      
      
    </div>
  );

  function click() {
    // store.dispatch(addTodo('추가됨'))
    dispatch(addTodo('todo'))
  }
}

export default App;

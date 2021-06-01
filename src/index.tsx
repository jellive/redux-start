import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store'
import {addTodo, completeTodo, showAll, showComplete} from './redux/actions'



/**
 * subscribe 
 * */
const unsubscribe = store.subscribe(() => { // rx의 subscribe와 비슷함. 또는 vue의 watch.
  console.log(store.getState())
})
store.dispatch(addTodo('할일'))
store.dispatch(completeTodo(0))
// unsubscribe는 함수이며, 호출하면 더 이상 subscribe를 하지 않는다. rx의 dispose와 같음.
store.dispatch(showAll())
store.dispatch(showComplete())


// mutation
// console.log(store)
// console.log(store.getState())
// store.dispatch(addTodo('coding')) // react hook에서 useReducers...
// console.log(store.getState())

// unsubscribe()

/**
 * subscribe 
 * */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

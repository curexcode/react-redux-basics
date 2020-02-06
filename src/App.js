import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch} from 'react-redux';
import {increment, decrement, login} from './actions';


function App() {
  const counter = useSelector( state => state.counter);
  const isLoggedIn = useSelector(state=> state.isLoggedIn);
  const dispatch = useDispatch();

  // Argument passed to increment() will be passed to action.
  // The returned object from argument will be passed to reducers
  return (
    <div className="App">
      <h1>counter {counter} </h1>
      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(login())}>L</button>
      {isLoggedIn ? <h1>Logged In</h1> : <h1>Logged Out</h1>}
    </div>
  );
}

export default App;

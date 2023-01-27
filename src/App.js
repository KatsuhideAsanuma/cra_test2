import { connect } from 'react-redux';
import {addToDo,removeToDo} from './actions';
import logo from './logo.svg';

import './App.css';
import { useState } from 'react';

function App(props) {
  const [input,setInput]=useState("");
  return (
    <div className="App">
      <header className="App-header">
        <p>
          WELCOME to React Redux ToDo List
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      <ul>
        {props.todos.map(todo=>{
          return(
            <li key={todo}><span>{todo}</span><button onClick={()=>props.dispatch(removeToDo(todo))}>DEL</button></li>
          )
        })}
      </ul>
      <input type="text" onChange={e=>setInput(e.target.value)}/>
      <button onClick={()=>props.dispatch(addToDo(input))}>submit</button>
    </div>
  );
}
const mapStateToProps=state=>{
  return{
    todos:state.todos.list
  }
}
export default connect(mapStateToProps)(App);

import { connect } from "react-redux";
//import { bindActionCreators } from 'redux';
import { addToDo, removeToDo } from "./actions";
import Container from "./Container";

import "./App.css";
import { useState } from "react";

function App(props) {
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <p>WELCOME to React Redux ToDo List</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>
      <ul>
        {props.todos.map((todo) => {
          return (
            <li key={todo}>
              <span>{todo}</span>
              <button onClick={() => props.removeToDo(todo)}>DEL</button>
            </li>
          );
        })}
      </ul>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => props.addToDo(input)}>submit</button>
      <Container />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    todos: state.todos.list,
  };
};
/*
const mapDispatchToProps=dispatch=>{
  return bindActionCreators({
    addToDo,
    removeToDo
  },dispatch)
}
*/
export default connect(mapStateToProps, { addToDo, removeToDo })(App);

/*
const mapDispatchToProps=dispatch=>{
  return {
    onAddToDo(todo){
      dispatch(addToDo(todo))
    },
    onRemoveToDo(todo){
      dispatch(removeToDo(todo))
    }
  }
}

const mapDispatchToProps=dispatch=>{
  return {
    addToDo:(todo)=>dispatch(addToDo(todo)),
    removeToDo:(todo)=>dispatch(removeToDo(todo))
  }
}
*/

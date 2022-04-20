import './App.css';
import React from 'react';
import {Button, Card, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "This is a sample todo",
      isDone: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  }
  return (
    <div>Hello</div>
  )
}

export default App;

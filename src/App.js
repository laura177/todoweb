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

  //use spread operator to append text to the list of todos
  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  }

  //spread operator to create copy of todos
  //use index to mark a todo, reassign isDone to true
  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  }

  //takes in index, splice the list of todos with that index, set new todos.
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="container">
        <h1>Todo List</h1>
        <TodoForm />
      </div>
    </div>
  )
}


//component for each todo which we render
function Todo({todo, index, markTodo, removeTodo}) {
  return (
    <div className="todo">

    </div>
  )
}

//form component
function TodoForm({addTodo}) {
  const [value, setValue] = React.useState("");

  const handleSubmit = event => {
    event.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue("")
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>
          <b>Add todo</b>
        </Form.Label>
        <Form.Control type="text" value={value} className="input" onChange={event => setValue(event.target.value)} placeholder="Enter new todo" />
      </Form.Group>
      <Button type="submit" variant="primary">
        Submit
      </Button>
    </Form>
  )
}

export default App;

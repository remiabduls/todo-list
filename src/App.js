import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {
  const[todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState ("");
  return (
    <div className="App">
      <header>
      <h1>Remi's Todo List</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;

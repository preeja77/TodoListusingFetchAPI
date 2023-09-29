import React, { useState, useEffect } from 'react';
import './AddUsersStyles.css'


function AddUsers() {
    const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  const addTodo = () => {
    if (newTodo.trim() === '') {
      return;
    }

    const newTodoItem = {
      userId: 1, 
      id: todos.length + 1,
      title: newTodo,
      completed: false,
    };

    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(newTodoItem),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTodos([...todos, data]);
        setNewTodo('');
      });
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedTodos.find((todo) => todo.id === id)),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(() => setTodos(updatedTodos));
  };

  const deleteTodo = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE',
    }).then(() => {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    });
  };

  return (
    <div className='container'>
      <h1 className='container-heading'>To-Do List</h1>
      <div className='input-container'>
        <input
          type="text"
          placeholder="Add a new to-do"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="todo-input"
        />
        <button onClick={addTodo} className='add-button'>Add</button>
      </div>
      <ul className='todo-list'>
        {todos.map((todo) => (
          
          <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input
              type="checkbox"
              className='checkbox-input'
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
           
            <span className='todo-title' style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.title}
            </span>
            <div className='title-and-button'>
            <button onClick={() => deleteTodo(todo.id)} className='delete-button'>Delete</button>
           </div>
     
          </li>
        ))}
      </ul>
    </div>
  );
}


export default AddUsers

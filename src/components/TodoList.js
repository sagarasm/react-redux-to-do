// src/components/TodoList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../actions/todoActions';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}{' '}
          <button onClick={() => handleRemove(todo.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

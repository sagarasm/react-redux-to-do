// src/reducers/index.js
import { combineReducers } from 'redux';
import todosReducer from './todosReducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  // Add more reducers if needed
});

export default rootReducer;

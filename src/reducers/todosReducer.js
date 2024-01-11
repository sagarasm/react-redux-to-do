// src/reducers/todosReducer.js
const initialState = {
    items: [],
  };
  
  const todosReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      case 'REMOVE_TODO':
        return {
          ...state,
          items: state.items.filter((todo) => todo.id !== action.payload),
        };
      // Add more cases as needed
      default:
        return state;
    }
  };
  
  export default todosReducer;
  
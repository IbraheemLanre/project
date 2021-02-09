import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SET_FILTER } from "./actionTypes";

const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    content,
  },
});

const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
});

const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});

const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: {
    filter,
  },
});

export { addTodo, toggleTodo, deleteTodo, setFilter };

import React from "react";
import { connect } from "react-redux";
import  _  from "underscore";
import { FILTER_ALL, FILTER_COMPLETED } from "../actions/actionTypes";
import { toggleTodo } from "../actions/action";

const Todo = ({ todo, id, toggleTodo }) => {
  return (
    <li
      className={todo.completed ? "completed" : ""}
      onClick={() => toggleTodo(id)}
    >
      {todo.content}
    </li>
  );
};

const TodoList = ({ todos, toggleTodo }) => {
  return _.keys(todos).map((id) => (
    <Todo key={id} toggleTodo={toggleTodo} todo={todos[id]} />
  ));
};

const mapState = (state) => {
  if (state.visibilityFilter.activeFilter === FILTER_ALL) {
    return { todos: state.todos.data };
  } else if (state.visibilityFilter.activeFilter === FILTER_COMPLETED) {
    return {
      todos: _.pick(state.todos.data, (todo) => todo.completed),
    };
  } else {
    return {
      todos: _.pick(state.todos.data, (todo) => !todo.completed),
    };
  }
};

export default connect(mapState, { toggleTodo })(TodoList);

import React from "react";

const Todo = (todo) => {
  return <li>{todo.content}</li>;
};

const TodoList = ({ todos }) => {
  return todos.map((todo, i) => <Todo key={i} todo={todo} />);
};

export default TodoList;

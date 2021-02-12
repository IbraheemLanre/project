import React from "react";

const Todo = ({ todo }) => (
  <li
    className="todo-item"
    onClick={() => {} /*dispatches action to toggle todo*/}
  >
    {todo && todo.completed ? "👌" : "👋"}
    <span
      className={cx(
        "todo-item__text",
        todo && todo.completed && "todo-item__text--completed"
      )}
    ></span>
  </li>
);

export default Todo;
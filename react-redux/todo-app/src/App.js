import React from "react";
import AddTodo from "./containers/AddTodo";
import TodoList from "./containers/TodoList";
import VisibilityFilter from "./containers/VisibilityFilter";

const filters = ["all", "completed", "incomplete"];

const App = () => {
  return (
    <div className="App">
      <h1>TODO PLANNER</h1>
      <AddTodo />
      <TodoList todos={[{ content: "Task 1" }, { content: "Task 2" }]} />
      <VisibilityFilter filters={filters}/>
    </div>
  );
};


export default App
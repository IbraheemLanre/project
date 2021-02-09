import React from "react";
import "./App.css";
import AddTodo from "./containers/AddTodo";
import TodoList from "./containers/TodoList";
import VisibilityFilter from "./containers/VisibilityFilter";
import { Provider } from "react-redux";
import store from "./reducers/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>TODO PLANNER</h1>
        <AddTodo />
        <TodoList/>
        <VisibilityFilter/>
      </div>
    </Provider>
  );
};

export default App;

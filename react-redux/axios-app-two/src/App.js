import React from "react";
import PersonList from "./components/PersonList";
import "./App.css";
import PostPerson from "./components/PostPerson";

const App = () => {
  return (
    <div className="App">
      <h1>AXIOS DEMO TWO</h1>
      <PersonList />
      <PostPerson />
    </div>
  );
};

export default App;

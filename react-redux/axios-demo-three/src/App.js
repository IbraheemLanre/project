import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GetItems from "./components/GetItems";
import PostItems from "./components/PostItems";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="App">
      <h1>AXIOS DEMO THREE</h1>

      <Router>
        <Switch>
          <Route path="/getitem" component={GetItems} />
          <Route path="/postitem" component={PostItems} />
          <Route path="/" component={Main}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

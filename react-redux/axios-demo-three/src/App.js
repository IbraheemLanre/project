import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GetItems from "./components/GetItems";
import PostItems from "./components/PostItems";
import DeleteItem from "./components/DeleteItem";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="App">
      <h1>AXIOS DEMO THREE</h1>

      <Router>
        <Switch>
          <Route path="/getitem" component={GetItems} />
          <Route path="/postitem" component={PostItems} />
          <Route path="/deleteitem" component={DeleteItem}/>
          <Route path="/" component={Main}/>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

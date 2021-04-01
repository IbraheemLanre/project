import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";

import { getCurrentUser, logout } from "./services/auth.service";

import "./App.css";

const App = () => {
  const [showEmployeeBoard, setshowEmployeeBoard] = useState(false);
  const [showEmployerBoard, setshowEmployerBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setshowEmployeeBoard(user.roles.includes("EMPLOYEE"));
      setshowEmployerBoard(user.roles.includes("EMPLOYER"));
    }
  }, []);

  const logoutUser = () => logout();

  return (
    <div>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            USERAUTH
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showEmployeeBoard && (
              <li className="nav-item">
                <Link to={"/employee"} className="nav-link">
                  Employee Board
                </Link>
              </li>
            )}

            {showEmployerBoard && (
              <li className="nav-item">
                <Link to={"/employer"} className="nav-link">
                  Employer Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.email}
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/login"} className="nav-link" onClick={logoutUser}>
                  Logout
                </Link>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>
      </div>
      <div className="container mt-3">
        <Switch>
          <Route path={["/", "/home"]}></Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;

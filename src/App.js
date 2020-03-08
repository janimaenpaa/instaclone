import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";

import "./App.css";
import "typeface-roboto";

import NavBar from "./components/NavBar";
import AuthRoute from "./util/AuthRoute";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

let authenticated;
const token = localStorage.fbIdToken;

if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href = "/login";
    authenticated = false;
  } else {
    authenticated = true;
  }
}

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="nav-container">
          <NavBar />
        </div>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <AuthRoute
              path="/login"
              component={Login}
              authenticated={authenticated}
            />
            <AuthRoute
              path="/signup"
              component={Signup}
              authenticated={authenticated}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;

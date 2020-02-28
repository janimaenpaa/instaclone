import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import "typeface-roboto";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";


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
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;

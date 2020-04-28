import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyButton from "./components/button";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";

import * as ROUTES from "./constants";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/home" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

{
  /* <div className="App">
      <header className="App-header">
        <HomePage />
      </header>
    </div> */
}

import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as ROUTES from './constants/routes';

import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import SignInPage from "./pages/SignInPage";
import Navigation from "./Navigation";

function App() {
  return (
    <div>
    <Navigation/>
      <Router>
        <Switch>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
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

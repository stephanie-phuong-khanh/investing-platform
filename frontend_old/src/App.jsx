import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as ROUTES from "./constants/routes";

import HomePage from "./components/Private/HomePage";
import LandingPage from "./components/Public/LandingPage";
import SignInPage from "./components/Public/SignIn";
import Navigation from "./components/Public/Navigation";
import { withFirebase } from "./Firebase";

import { withAuthentication, AuthUserContext } from "./components/Session";

import SignUpPage from "./components/Public/SignUp";

const App = () => {
  return (
    <div>
      <AuthUserContext.Consumer>
        {(authUser) => (authUser ? <Private /> : <Public />)}
      </AuthUserContext.Consumer>
    </div>
  );
};

const Public = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        </Switch>
      </Router>
    </div>
  );
};

const Private = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path={ROUTES.HOME} component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
};

export default withAuthentication(App);

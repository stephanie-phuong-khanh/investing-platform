import React from "react";
import ReactDom from "react-dom";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import Navigation from "../components/Navigation";
import { SignUpForm } from "../components/SignUp";
import { FirebaseContext } from '../Firebase';

import * as ROUTES from '../constants/routes';

export default class SignInPage extends React.Component {
  render() {
    return (
      <div>
        {/* <Navigation /> */}
        <Button
          component={Link}
          to={ROUTES.HOME}
          variant="contained"
          color="primary"
          disableElevation
        >
          Login
        </Button>
      {/* <FirebaseContext.Consumer>
        {firebase => <SignupForm firebase={firebase} />}
      </FirebaseContext.Consumer> */}

        <Button
          component={Link}
          to="/home"
          variant="contained"
          color="primary"
          disableElevation
        >
          Sign Up
        </Button>
      </div>
    );
  }
}

import React from "react";
import ReactDom from "react-dom";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import LandingHeader from "../components/LandingHeader";
import SignUpForm from "../components/SignUpForm";
import { FirebaseContext } from '../Firebase';

export default class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <LandingHeader />
        {/* <Button
          component={Link}
          to="/home"
          variant="contained"
          color="primary"
          disableElevation
        >
          Login
        </Button> */}
    <FirebaseContext.Consumer>
      {firebase => <SignupForm firebase={firebase} />}
    </FirebaseContext.Consumer>

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

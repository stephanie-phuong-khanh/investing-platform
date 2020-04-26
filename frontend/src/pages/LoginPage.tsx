import React from "react";
import ReactDom from "react-dom";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import LandingHeader from "../components/LandingHeader";

export default class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <LandingHeader />
        <Button
          component={Link}
          to="/home"
          variant="contained"
          color="primary"
          disableElevation
        >
          Login
        </Button>

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

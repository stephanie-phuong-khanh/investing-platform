import React from "react";
import ReactDom from "react-dom";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default class LoginPage extends React.Component {
  render() {
    return (
      <a>
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
      </a>
    );
  }
}

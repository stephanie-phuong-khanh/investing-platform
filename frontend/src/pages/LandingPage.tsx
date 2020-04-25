import React from "react";
import ReactDom from "react-dom";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default class LandingPage extends React.Component {
  render() {
    return (
      <a>
        Landing!
        <Button
          component={Link}
          to="/login"
          variant="contained"
          color="primary"
          disableElevation
        >
          Login
        </Button>
      </a>
    );
  }
}

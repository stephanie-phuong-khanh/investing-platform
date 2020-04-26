import React from "react";
import ReactDom from "react-dom";
import { Button, AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";

import styled from "@emotion/styled";

import LandingHeader from "../components/LandingHeader";

export default class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <LandingHeader />
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
      </div>
    );
  }
}

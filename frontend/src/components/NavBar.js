import React, { Component } from "react";
import Link from "react-router-dom/Link";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Button from "@material-ui/core/Button";

// import styled from "@emotion/styled";

export class NavBar extends Component {
  render() {
    return (
      <AppBar>
        <ToolBar>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/signup">
            Signup
          </Button>
        </ToolBar>
      </AppBar>
    );
  }
}

export default NavBar;

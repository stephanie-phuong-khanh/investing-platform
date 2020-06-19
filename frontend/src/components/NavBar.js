import React, { Component } from "react";
import Link from "react-router-dom/Link";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Button from "@material-ui/core/Button";

import styled from "@emotion/styled";

const Bar = styled(AppBar)`
  font-family: Poppins;
  /* font-weight: bold; */
  font-size: 25px;
  letter-spacing: 5px !important;
  background-color: white !important;
  color: black !important;
  text-align: center;
  box-shadow: 0 !important;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export class NavBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Bar elevation={1}>
        ARCHANGEL
        {/* <ToolBar></ToolBar> */}
      </Bar>
    );
  }
}

export default NavBar;

import React from "react";
import ReactDom from "react-dom";
import { Button, AppBar, Tabs, Tab } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import styled from "@emotion/styled";

const Container = styled("div")`
  height: 1000px;
  width: 100%;
`;

export default class PitchModalContent extends React.Component {
  render() {
    return <Container>WHATS UP</Container>;
  }
}

import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import { compose } from "recompose";

import { withFirebase } from "../../../Firebase";

import styled from "@emotion/styled";

import * as ROUTES from "../../../constants/routes";

const IconBar = styled("div")`
  width: 250px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

const GoogleButton = styled(IconButton)`
  height: 65px;
  width: 65px;
  border-radius: 50%;
  border: 1px solid rgba(171, 171, 171, 0.5) !important;
  background-image: url("images/login-google.png");
  background-size: cover;
`;

const FacebookButton = styled(IconButton)`
  height: 65px;
  width: 65px;
  border-radius: 50%;
  border: 1px solid rgba(171, 171, 171, 0.5) !important;
  background-image: url("images/login-facebook.png");
  background-size: cover;
`;

const LinkedInButton = styled(IconButton)`
  height: 65px;
  width: 65px;
  border-radius: 50%;
  border: 1px solid rgba(171, 171, 171, 0.5) !important;
  background-image: url("images/login-linkedin.png");
  background-size: cover;
`;

class SignInGoogleBase extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };

    this.onSubmit.bind(this);
  }

  onSubmit = (event) => {
    this.props.firebase
      .doSignInWithGoogle()
      .then(() => {
        this.setState({ error: null });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  render() {
    const { error } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <GoogleButton type="submit"></GoogleButton>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

class GoogleFBLinkedIn extends Component {
  render() {
    return (
      <IconBar>
        <FacebookButton />
        <SignInGoogle />
        <LinkedInButton />
      </IconBar>
    );
  }
}

const SignInGoogle = compose(withRouter, withFirebase)(SignInGoogleBase);

export default GoogleFBLinkedIn;

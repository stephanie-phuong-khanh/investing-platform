import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { Button, IconButton } from "@material-ui/core";
import { compose } from "recompose";

import { withFirebase } from "../../../Firebase";

import styled from "@emotion/styled";

import * as ROUTES from "../../../constants/routes";

const LeftPanel = styled("div")`
  width: 100%;
  text-align: center;
  padding-top: 150px;
`;

const RightPanel = styled("div")`
  background-image: url("images/happy-investing-background.png");
  background-size: cover;
  width: 100%;
  padding-top: 230px;
  text-align: center;
`;

const SignInText = styled("div")`
  font-family: Poppins;
  font-style: normal;
  font-weight: bolder;
  font-size: 50px;
  line-height: 75px;
  letter-spacing: 0.05em;
`;

const SignUpLink = styled(Button)`
  font-family: Poppins !important;
  letter-spacing: 2px !important;
  background: black !important;
  color: white !important;
  border-radius: 0 !important;
  border: solid white 2px !important;
  font-size: 18px !important;
  font-weight: bold !important;
  width: 270px;
  height: 60px;
  text-decoration: none !important;
  margin-top: 20px !important;
`;

const HappyInvesting = styled("div")`
  font-family: Poppins;
  font-style: normal;
  font-weight: bolder;
  font-size: 50px;
  line-height: 75px;
  letter-spacing: 0.05em;
  color: white;
  margin-bottom: 40px;
`;

const FindPersonalized = styled("div")`
  font-family: Poppins;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 35px;
  letter-spacing: 0.05em;
  color: white;
  text-align: center;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
`;

const SignInPage = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      height: "100vh",
    }}
  >
    <LeftPanel>
      <SignInText>Sign In</SignInText>
      <FacebookButton />
      <SignInGoogle />
      <LinkedInButton />
      <SignInForm />
    </LeftPanel>
    <RightPanel>
      <HappyInvesting>Happy investing!</HappyInvesting>
      <FindPersonalized>
        Find personalized investments based on your interests, your preference,
        or your level of risk.
      </FindPersonalized>
      <FindPersonalized>
        <div style={{ width: "60%", marginLeft: "auto", marginRight: "auto" }}>
          Enter your personal details, and start your journey with us.
        </div>
      </FindPersonalized>
      <SignUpLink component={Link} to={ROUTES.SIGN_UP}>
        Sign Up
      </SignUpLink>
    </RightPanel>
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = (event) => {
    const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === "" || email === "";
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const GoogleButton = styled(IconButton)`
  display: block;
  height: 65px;
  width: 65px;
  border-radius: 50%;
  border: 1px solid rgba(171, 171, 171, 0.5) !important;
  background-image: url("images/login-google.png");
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

const FacebookButton = styled(IconButton)`
  display: block;
  height: 65px;
  width: 65px;
  border-radius: 50%;
  border: 1px solid rgba(171, 171, 171, 0.5) !important;
  background-image: url("images/login-facebook.png");
  background-size: cover;
`;

const LinkedInButton = styled(IconButton)`
  display: block;
  height: 65px;
  width: 65px;
  border-radius: 50%;
  border: 1px solid rgba(171, 171, 171, 0.5) !important;
  background-image: url("images/login-linkedin.png");
  background-size: cover;
`;

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

const SignInGoogle = compose(withRouter, withFirebase)(SignInGoogleBase);

export default SignInPage;
export { SignInForm, SignInGoogle };

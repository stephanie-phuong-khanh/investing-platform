import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { Button, IconButton } from "@material-ui/core";
import { compose } from "recompose";

import { withFirebase } from "../../../Firebase";
import GoogleFBLinkedIn from "../GoogleFBLinkedIn";

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
  margin-bottom: 20px;
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

const OrUseEmail = styled("div")`
  font-family: Poppins;
  letter-spacing: 1px !important;
  background: white !important;
  color: rgba(0, 0, 0, 0.5) !important;
  height: 40px;
  line-height: 40px;
  margin-bottom: 30px;
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
      <GoogleFBLinkedIn />
      <OrUseEmail>or use your email account:</OrUseEmail>
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
      <SignInFormBox onSubmit={this.onSubmit}>
        <SignInFormBlank
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <SignInFormBlank
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <SignInButton disabled={isInvalid} type="submit">
          Sign In
        </SignInButton>
        {error && <p>{error.message}</p>}
      </SignInFormBox>
    );
  }
}

const SignInFormBox = styled("form")`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
  textarea:focus,
  input:focus {
    outline: none;
  }
`;

const SignInFormBlank = styled("input")`
  background-color: rgba(196, 196, 196, 0.22);
  border: none;
  font-size: 20px;
  padding: 12px 20px;
  height: 50px;
  margin-bottom: 25px;
  &:focus,
  &:active {
    background-color: rgba(196, 196, 196, 0.22) !important;
    border: none;
  }
`;

const SignInButton = styled("button")`
  font-family: Poppins;
  letter-spacing: 2px;
  background: black;
  color: white;
  border-radius: 0;
  font-size: 18px;
  font-weight: bold;
  width: 270px;
  height: 60px;
  text-decoration: none;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  &:focus {
    outline: none;
  }
`;

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

export default SignInPage;

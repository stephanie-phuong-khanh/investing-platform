import React from "react";
import ReactDom from "react-dom";
import { Button, IconButton } from "@material-ui/core";
import Textfield from "@material-ui/core/TextField";
import { FirebaseContext, withFirebase } from "../../../Firebase";

import * as ROUTES from "../../../constants/routes";
import { compose } from "recompose";
import GoogleFBLinkedIn from "../GoogleFBLinkedIn";

import styled from "@emotion/styled";

import { Link, withRouter } from "react-router-dom";

const CreateAccountForm = styled("form")`
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

const CreateAccountFormBlank = styled("input")`
  background-color: rgba(196, 196, 196, 0.22);
  border: none;
  font-size: 20px;
  padding: 12px 20px;
  height: 40px;
  margin-bottom: 15px;
  &:focus,
  &:active {
    background-color: rgba(196, 196, 196, 0.22) !important;
    border: none;
  },
`;

const SignUpButton = styled("button")`
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
  &:hover {
    background-color: rgba(0, 0, 0, 0.8) !important;
  }
`;

const INITIAL_STATE = {
  username: "",
  email: "",
  password1: "",
  password2: "",
  error: null,
};

class SignUpFormBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };

    this.onChange.bind(this);
    this.onSubmit.bind(this);
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    const { username, email, password1 } = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password1)
      .then(() => {
        console.log("Did this even get called?");
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  render() {
    const { username, email, password1, password2, error } = this.state;

    const isInvalid =
      password1 !== password2 ||
      password1 === "" ||
      password1.length < 6 ||
      email === "" ||
      username === "";

    return (
      <CreateAccountForm onSubmit={this.onSubmit}>
        <CreateAccountFormBlank
          name="username"
          label="Full Name"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
        <CreateAccountFormBlank
          required
          name="email"
          label="Email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <CreateAccountFormBlank
          name="password1"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          onChange={this.onChange}
          value={password1}
          placeholder="Password"
        />

        <CreateAccountFormBlank
          name="password2"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          onChange={this.onChange}
          value={password2}
          placeholder="Confirm password"
        />
        <SignUpButton
          type="submit"
          // onClick={this.onSubmit && console.log("ERROR:", error)}
          disabled={isInvalid}
        >
          Sign Up
        </SignUpButton>
        {error && <p>{error.message}</p>}
      </CreateAccountForm>
    );
  }
}

const SignUpPage = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      height: "100vh",
    }}
  >
    <LeftPanel>
      <WelcomeBack>Welcome back!</WelcomeBack>
      <FindPersonalized>
        Evaluate opportunities with at-a-glance information on market
        conditions, and make smart decision on the professional, well-researched
        projects from our experts.
      </FindPersonalized>
      <FindPersonalized>
        Please log in to keep you connected with us.
      </FindPersonalized>
      <SignInLink component={Link} to={ROUTES.SIGN_IN}>
        Sign In
      </SignInLink>
    </LeftPanel>
    <RightPanel>
      <CreateAccountText>Create Account</CreateAccountText>
      <GoogleFBLinkedIn />
      <OrUseEmail>or use your email for registration:</OrUseEmail>
      <SignUpForm />
    </RightPanel>
  </div>
);

const LeftPanel = styled("div")`
  background-image: url("images/welcome-back-background.png");
  background-size: cover;
  width: 100%;
  text-align: center;
  padding-top: 230px;
`;

const RightPanel = styled("div")`
  width: 100%;
  padding-top: 130px;
  text-align: center;
`;

const CreateAccountText = styled("div")`
  font-family: Poppins;
  font-style: normal;
  font-weight: bolder;
  font-size: 50px;
  line-height: 75px;
  letter-spacing: 0.05em;
  margin-bottom: 5px;
`;

const SignInLink = styled(Button)`
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

const WelcomeBack = styled("div")`
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
  margin-bottom: 10px;
`;

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

export default SignUpPage;
export { SignUpForm };

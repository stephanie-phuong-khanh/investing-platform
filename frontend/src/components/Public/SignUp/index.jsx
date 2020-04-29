import React from "react";
import ReactDom from "react-dom";
import Button from "@material-ui/core/Button";
import Textfield from "@material-ui/core/TextField";
import { FirebaseContext, withFirebase } from "../../../Firebase";

import * as ROUTES from "../../../constants/routes";
import { compose } from "recompose";

import { Link, withRouter } from "react-router-dom";

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
    // console.log(event.target.name + " " + event.target.value);
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
      <form onSubmit={this.onSubmit}>
        <div>
          <Textfield
            name="username"
            label="Full Name"
            value={username}
            onChange={this.onChange}
            variant="outlined"
          />
          <Textfield
            required
            name="email"
            label="Email"
            value={email}
            onChange={this.onChange}
            variant="outlined"
          />
          <Textfield
            name="password1"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            onChange={this.onChange}
            value={password1}
          />

          <Textfield
            name="password2"
            label="Confirm Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            onChange={this.onChange}
            value={password2}
          />
          <Button type="submit" onClick={this.onSubmit} disabled={isInvalid}>
            Sign Up
          </Button>
          {error && <p>{error.message}</p>}
        </div>
      </form>
    );
  }
}

const SignUpPage = () => (
  <div>
    <h1>Sign Up</h1>
    <SignUpForm />
  </div>
);

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

export default SignUpPage;
export { SignUpForm };

import React, { Component } from "react";
import Link from "react-router-dom/Link";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import CircularProgress from "@material-ui/core/CircularProgress";

import { connect } from "react-redux";
import { signupUser } from "../redux/actions/userActions";

class signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      handle: "",
      loading: false,
      errors: {},
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      loading: true,
    });
    const newUserData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      handle: this.state.handle,
    };
    this.props.signupUser(newUserData, this.props.history);
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    const { classes, loading } = this.props;
    const { errors } = this.state;
    return (
      <Outer>
        <Half>
          <WelcomeBack>Welcome to your portfolio.</WelcomeBack>
          <Form noValidate onSubmit={this.handleSubmit}>
            <TextField
              id="email"
              name="email"
              label="Email"
              helperText={errors.email}
              error={errors.email ? true : false}
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              helperText={errors.password}
              error={errors.password ? true : false}
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              helperText={errors.confirmPassword}
              error={errors.confirmPassword ? true : false}
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="handle"
              name="handle"
              type="text"
              label="Handle"
              helperText={errors.handle}
              error={errors.handle ? true : false}
              value={this.state.handle}
              onChange={this.handleChange}
              fullWidth
            />
            {errors.general && (
              <Typography variant="body2">{errors.general}</Typography>
            )}
            <LoginButton type="submit" variant="contain" disabled={loading}>
              Sign up
              {loading && <CircularProgress size={15} />}
            </LoginButton>
            <br />
            <DontHave>
              Already have an account? Log in <Link to="/login">here</Link>
            </DontHave>
          </Form>
        </Half>
        <RightHalf></RightHalf>
      </Outer>
    );
  }
}

const Form = styled("form")`
  text-align: center;
  margin-left: 15vw;
  margin-right: 3vw;
`;

const DontHave = styled("div")`
  text-align: center;
  width: 100%;
`;

const LoginButton = styled(Button)`
  width: 100%;
  background-color: #404040 !important;
  color: white !important;
  font-weight: bold !important;
`;

const WelcomeBack = styled("div")`
  font-size: 50px !important;
  letter-spacing: 0px !important;
  font-weight: bold;
  text-align: left;
  margin-left: 15vw;
  margin-right: 3vw;
  line-height: 120%;
`;

const RightHalf = styled("div")`
  background-color: #f2f1f1 !important;
  /* height: 100% !important; */
  width: 50%;
  padding-top: 80px;
`;

const Half = styled("div")`
  width: 50%;
  padding-top: 25vh;
  padding-bottom: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Outer = styled("div")`
  font-family: Poppins;
  height: 100%;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
`;

signup.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
  signupUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

export default connect(mapStateToProps, { signupUser })(signup);

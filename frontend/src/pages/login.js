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
import { loginUser } from "../redux/actions/userActions";

class login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
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
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData, this.props.history);
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    const {
      classes,
      UI: { loading },
    } = this.props;
    const { errors } = this.state;
    return (
      <Outer>
        <LeftHalf></LeftHalf>
        <Half>
          <WelcomeBack>Welcome back!</WelcomeBack>
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
              label="Password"
              type="password"
              helperText={errors.password}
              error={errors.password ? true : false}
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
            />
            {errors.general && (
              <Typography variant="body2" className={classes.customError}>
                {errors.general}
              </Typography>
            )}
            <LoginButton type="submit" variant="contain" disabled={loading}>
              Login
              {loading && <CircularProgress size={15} />}
            </LoginButton>
            <br />
            <DontHave>
              Don't have an account? Sign up <Link to="/signup">here</Link>
            </DontHave>
          </Form>
        </Half>
      </Outer>
    );
  }
}

const Form = styled("form")`
  text-align: center;
  margin-right: 15vw;
  margin-left: 3vw;
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
  margin-right: 15vw;
  margin-left: 3vw;
`;

const LeftHalf = styled("div")`
  background-color: #f2f1f1 !important;
  /* height: 100% !important; */
  width: 50%;
  padding-top: 80px;
`;

const Half = styled("div")`
  width: 50%;
  padding-top: 80px;
  /* padding-right: 10%; */
  /* padding-left: 5vw; */
  padding-top: 35vh;
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

login.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

const mapActionsToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapActionsToProps)(login);

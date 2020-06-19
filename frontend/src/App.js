import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import jwtDecode from "jwt-decode";
import styled from "@emotion/styled";

//Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser, getUserData } from "./redux/actions/userActions";

//Components
import NavBar from "./components/NavBar";
import AuthRoute from "./util/AuthRoute";

// Pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";

axios.defaults.baseURL =
  "http://localhost:5000/archangel-bda83/us-central1/api";

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUserData());
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <NavBar />
          <Contain>
            <Switch>
              <Route exact path="/" component={home} />
              <AuthRoute path="/login" component={login} />
              <AuthRoute path="/signup" component={signup} />
            </Switch>
          </Contain>
        </Router>
      </Provider>
    );
  }
}

const Contain = styled("div")`
  font-family: Poppins;
  padding-top: 0px;
  height: 100vh;
`;

export default App;

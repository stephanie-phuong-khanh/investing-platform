import React from "react";
import ReactDom from "react-dom";
import Button from "@material-ui/core/Button";
import TransitionRoute from "../TransitionRoutes";
import Navigation from "../Navigation";
import { Router, Route, Switch, Link } from "react-router-dom";

import PitchFeed from "./HomePage/PitchFeed";
import Portfolio from "./HomePage/Portfolio";
import Profile from "././HomePage/Profile";

export default class HomePage extends React.Component {
  render() {
    const { path } = this.props.match;
    return (
      <div>
        <div className="links">
          <Link to={`${path}`} className="link">
            Home
          </Link>
          <Link to={`${path}/portfolio`} className="link">
            Portfolio
          </Link>
          <Link to={`${path}/profile`} className="link">
            Profile
          </Link>
        </div>
        <div className="container">
          <Switch>
            <Route path={`${path}`} exact component={PitchFeed} />
            <Route path={`${path}/portfolio`} component={Portfolio} />
            <Route path={`${path}/profile`} component={Profile} />
          </Switch>
        </div>
      </div>
    );
  }
}

{
  /* <Router>
          <Navigation />
          <TransitionRoute
            path="/"
            component={FeedPage}
            transitionName="fade"
          />
          <TransitionRoute
            path="/interests"
            component={InterestPage}
            transitionName="fade"
          />
          <TransitionRoute
            path="/profile"
            component={Profile}
            transitionName="fade"
          />
        </Router> */
}

import React from "react";
import ReactDom from "react-dom";
import { Button, AppBar, Tabs, Tab } from "@material-ui/core";
// import TransitionRoute from "../../TransitionRoutes";
import Navigation from "../../Public/Navigation";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import * as ROUTES from "../../../constants/routes";

import PitchFeed from "./PitchFeed";
import Portfolio from "./Portfolio";
import Profile from "./Profile";
import SignOutButton from "../SignOut";

export default class HomePage extends React.Component {
  changeTab = (event, location) => {
    this.setState({ location });
    this.props.history.push(location);
  };

  render() {
    return (
      <div>
        <SignOutButton />
        <Tabs onChange={this.changeTab} value={this.props.location.pathname}>
          <Tab
            value={ROUTES.HOME}
            label="HOME"
            containerElement={<Link to={ROUTES.HOME} />}
          />
          <Tab
            value={ROUTES.PORTFOLIO}
            label="PORTFOLIO"
            containerElement={<Link to={ROUTES.PORTFOLIO} />}
          />
          <Tab
            value={ROUTES.PROFILE}
            label="PROFILE"
            containerElement={<Link to={ROUTES.PROFILE} />}
          />
        </Tabs>

        <div className="container">
          <Switch>
            <Route path={ROUTES.HOME} exact component={PitchFeed} />
            <Route path={ROUTES.PORTFOLIO} component={Portfolio} />
            <Route path={ROUTES.PROFILE} component={Profile} />
          </Switch>
        </div>
      </div>
    );
  }
}

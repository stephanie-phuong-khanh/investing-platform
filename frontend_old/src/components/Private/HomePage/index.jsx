import React from "react";
import ReactDom from "react-dom";
import { Button, AppBar, Tabs, Tab } from "@material-ui/core";
// import TransitionRoute from "../../TransitionRoutes";
import Navigation from "../../Public/Navigation";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import * as ROUTES from "../../../constants/routes";
import styled from "@emotion/styled";

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
        <TabNavigationBar>
          <Archangel>ARCHANGEL</Archangel>
          <Tabs
            indicatorColor="none"
            onChange={this.changeTab}
            value={this.props.location.pathname}
          >
            <UnselectedTab
              value={ROUTES.HOME}
              label="HOME"
              containerElement={<Link to={ROUTES.HOME} />}
            />
            <UnselectedTab
              value={ROUTES.PORTFOLIO}
              label="PORTFOLIO"
              containerElement={<Link to={ROUTES.PORTFOLIO} />}
            />
            <UnselectedTab
              value={ROUTES.PROFILE}
              label="PROFILE"
              containerElement={<Link to={ROUTES.PROFILE} />}
            />
          </Tabs>
          <SignOutButton />
        </TabNavigationBar>

        <div style={{ padding: "150px 180px 90px 180px" }}>
          <Switch>
            <Route path={ROUTES.HOME} exact component={PitchFeed} />
            <Route path={ROUTES.PORTFOLIO} exact component={Portfolio} />
            <Route path={ROUTES.PROFILE} exact component={Profile} />
          </Switch>
        </div>
      </div>
    );
  }
}

const TabNavigationBar = styled(AppBar)`
  background: white !important;
  height: 75px;
  color: black !important;
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-between;
  width: 100%;
  font-family: "poppins";
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  padding: 15px 70px;
`;

const Archangel = styled("div")`
  font-size: 20px;
  line-height: 45px;
  letter-spacing: 3px;
`;

const StartInvesting = styled(Button)`
  font-family: Poppins !important;
  letter-spacing: 1.5px !important;
  background: black !important;
  color: white !important;
  text-transform: none !important;
  border-radius: 0 !important;
  width: 170px;
  height: 38px;
  margin-left: 630px !important;
`;

const UnselectedTab = styled(Tab)`
  font-family: Poppins !important;
  font-size: 15px !important;
  letter-spacing: 1.5px !important;
  background: white !important;
  color: black !important;
  text-transform: none !important;
  border-radius: 0 !important;
  width: 100px;
  height: 38px;
`;

const SignInLink = styled(Link)`
  font-family: Poppins !important;
  letter-spacing: 1px !important;
  background: white !important;
  color: rgba(0, 0, 0, 0.5) !important;
  text-transform: none !important;
  border-radius: 0 !important;
  height: 40px;
  line-height: 40px;
  text-decoration: none;
`;

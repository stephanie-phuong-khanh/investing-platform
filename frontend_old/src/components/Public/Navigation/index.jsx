import React from "react";
import ReactDom from "react-dom";
import { Button, AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";

import styled from "@emotion/styled";

import * as ROUTES from "../../../constants/routes";

import { AuthUserContext } from "../../Session";

const LandingMenuBar = styled(AppBar)`
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

const GetFunding = styled(Button)`
  font-family: Poppins !important;
  letter-spacing: 1.5px !important;
  background: white !important;
  color: black !important;
  text-transform: none !important;
  border-radius: 0 !important;
  width: 170px;
  height: 38px;
  border: solid 1px black !important;
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

const Navigation = () => (
  <div>
    <LandingMenuBar position="fixed" elevation={0}>
      <Archangel>ARCHANGEL</Archangel>
      <StartInvesting component={Link} to={ROUTES.SIGN_IN}>
        Start Investing
      </StartInvesting>
      <GetFunding>Get Funding</GetFunding>
      <SignInLink to={ROUTES.SIGN_IN}>Sign In</SignInLink>
    </LandingMenuBar>
  </div>
);

export default Navigation;

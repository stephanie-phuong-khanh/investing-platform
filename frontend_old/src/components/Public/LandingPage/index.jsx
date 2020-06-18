import React from "react";
import ReactDom from "react-dom";
import { Button, AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";

import styled from "@emotion/styled";

import * as ROUTES from "../../../constants/routes";

const TagLine = styled("div")`
  font-family: Poppins;
  font-size: 18px;
  line-height: 34px;
  letter-spacing: 0.15em;
  font-weight: lighter;
  color: #000000;
  margin-bottom: 20px;
`;

const InvestInStartups = styled("div")`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 55px;
  line-height: 75px;
  letter-spacing: 0.02em;
`;

const ImAn = styled(Button)`
  font-family: Poppins !important;
  letter-spacing: 2px !important;
  background: black !important;
  color: white !important;
  text-transform: none !important;
  border-radius: 0 !important;
  font-size: 18px !important;
  width: 270px;
  height: 60px;
  text-decoration: none;
`;

const AlreadyHaveAccount = styled("div")`
  font-family: Poppins;
  font-size: 18px;
  line-height: 34px;
  letter-spacing: 0.05em;
  font-weight: lighter;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 140px;
  width: 100%;
  text-align: center;
`;

const Login = styled(Link)`
  font-weight: bold;
  color: black;
  text-decoration: none;
`;

const WhyArchangel = styled("div")`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 55px;
  line-height: 75px;
  letter-spacing: 0.02em;
  margin-bottom: 25px;
`;

const ByInvesting = styled("div")`
  font-family: Poppins;
  font-size: 18px;
  line-height: 34px;
  letter-spacing: 0.05em;
  font-weight: lighter;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 50px;
  width: 90%;
  text-align: left;
`;

const RocketImage = styled("img")`
  width: 250px;
  height: 100%;
  margin-right: 20px;
  margin-top: 20px;
`;

const BulletPoint = styled("div")`
  margin-bottom: 20px;
  text-align: left;
  display: flex;
  flex-direction: row;
`;

const BulletText = styled("div")`
  font-family: Poppins;
  font-size: 18px;
  line-height: 20px;
  margin-top: 10px;
  letter-spacing: 0.05em;
  font-weight: bold;
  color: black;
  text-align: left;
`;

const BulletPicture = styled("img")`
  width: 40px;
  height: 100%;
  margin-right: 30px;
`;

const LandingPage = () => {
  return (
    <div style={{ padding: "185px 180px 130px 180px" }}>
      <TagLine>CURATED EARLY STAGE STARTUPS</TagLine>
      <InvestInStartups>Invest in startups you love.</InvestInStartups>
      <InvestInStartups>Let the right partnership find you.</InvestInStartups>
      <div
        style={{
          padding: "130px 210px 70px 210px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <ImAn
          component={Link}
          to={ROUTES.SIGN_IN}
          variant="contained"
          disableElevation
        >
          I'm an Investor
        </ImAn>
        <ImAn variant="contained" disableElevation>
          I'm a Founder
        </ImAn>
      </div>
      <AlreadyHaveAccount>
        Already have an account?
        <Login to={ROUTES.SIGN_IN}> Login </Login>
      </AlreadyHaveAccount>
      <WhyArchangel>
        Why <span style={{ color: "rgba(0, 0, 0, 0.5)" }}>Archangel</span>?
      </WhyArchangel>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <ByInvesting>
            By investing, you directly support growth of small-medium businesses
            and make angel investing more accessible for investors and startups.
          </ByInvesting>
          <BulletPoint>
            <BulletPicture src="images/bullet-briefcase.jpg" />
            <BulletText>Provides professional services</BulletText>
          </BulletPoint>
          <BulletPoint>
            <BulletPicture src="images/bullet-network.jpg" />
            <BulletText>Breaks the geography and network barrier</BulletText>
          </BulletPoint>
          <BulletPoint>
            <BulletPicture src="images/bullet-coin.jpg" />
            <BulletText>
              Increases extensiveness and quality of deal flows
            </BulletText>
          </BulletPoint>
          <BulletPoint>
            <BulletPicture src="images/bullet-chart.jpg" />
            <BulletText>Accelerates investment timelines</BulletText>
          </BulletPoint>
        </div>
        <RocketImage src="images/rocket.jpg" />
      </div>
    </div>
  );
};

export default LandingPage;

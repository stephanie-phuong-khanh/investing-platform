import React from "react";
import ReactDom from "react-dom";
import { Button, AppBar, Tabs, Tab } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import styled from "@emotion/styled";

const Container = styled("div")`
  padding: 30px 40px 60px 40px;
  display: flex;
  flex-direction: row;
  height: auto;
`;

const TopBar = styled("div")`
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
`;

const Title = styled("div")`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 52px;
  letter-spacing: 0.05em;
  color: #000000;
  margin-right: 30px;
`;

const Tag = styled("div")`
  font-family: Poppins;
  font-size: 12px;
  letter-spacing: 0.05em;
  height: 20px;
  line-height: 20px;
  border: solid black 1px;
  border-radius: 20px;
  margin-top: auto;
  margin-bottom: auto;
  padding: 2px 20px;
  margin-left: 5px;
  margin-right: 5px;
`;

const TagList = styled("div")`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-bottom: 10px;
`;

const Logo = styled("img")`
  height: 130px;
  width: auto;
  margin-right: 50px;
`;

const PitchCaption = styled("div")`
  font-family: Poppins;
  font-size: 14px;
  letter-spacing: 0.05em;
  height: 25px;
  line-height: 20px;
  width: 100%;
  text-align: left;
`;

class PortfolioButtonContent1 extends React.Component {
  render() {
    return (
      <Container>
        <Logo src="./images/zumurl/zumurl.gif" alt="loading..." />
        <TopBar>
          <TagList>
            <Title>ZmURL</Title>
            <Tag>WEB APP</Tag>
            <Tag>VIDEO STREAMING</Tag>
            <Tag>EVENTS</Tag>
            <Tag>PRODUCTIVITY</Tag>
          </TagList>
          <PitchCaption>
            ZmURL lets you create beautiful event pages for your Zoom events.
            This lightweight application handles registration, email reminders,
            social sharing, paid events, and more.
          </PitchCaption>
        </TopBar>
      </Container>
    );
  }
}

class PortfolioButtonContent2 extends React.Component {
  render() {
    return (
      <Container>
        <Logo src="./images/hellohabit/hellohabit.gif" alt="loading..." />
        <TopBar>
          <TagList>
            <Title>HelloHabit</Title>
            <Tag>MOBILE APP</Tag>
            <Tag>HEALTH</Tag>
            <Tag>PRODUCTIVITY</Tag>
            <Tag>LIFESTYLE</Tag>
          </TagList>
          <PitchCaption>
            Hello Habit helps you build habits by finding like-minded people
            around you to track habits together. Like or kick your friends as
            encouragement or reminder. Keep a diary of your productivity and be
            energized to reach your goals!
          </PitchCaption>
        </TopBar>
      </Container>
    );
  }
}

class PortfolioButtonContent3 extends React.Component {
  render() {
    return (
      <Container>
        <Logo src="./images/hypnopedia/hypnopedia.gif" alt="loading..." />
        <TopBar>
          <TagList>
            <Title>Hypnopdia</Title>
            <Tag>MOBILE APP</Tag>
            <Tag>LIFESTYLE</Tag>
            <Tag>PRODUCTIVITY</Tag>
          </TagList>
          <PitchCaption>
            Hypnopedia is an iOS App that plays affirmations while you sleep to
            stimulate positive life changes. The moment for reading affirmations
            is selected depending on individual physiology and principles of
            memory functioning in a dream.
          </PitchCaption>
        </TopBar>
      </Container>
    );
  }
}

export {
  PortfolioButtonContent1,
  PortfolioButtonContent2,
  PortfolioButtonContent3,
};

import React from "react";
import ReactDom from "react-dom";
import { Button, AppBar, Tabs, Tab } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import styled from "@emotion/styled";

const Container = styled("div")`
  height: auto;
  width: 100%;
`;

const TopBar = styled("div")`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
`;

const TagList = styled("div")`
  width: auto;
  display: flex;
  justify-content: left;
  margin-bottom: 20px;
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
  padding-top: 4px;
  margin-left: 5px;
  margin-right: 5px;
`;

const ImageRoll = styled("div")`
  overflow-x: scroll;
  height: 240px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const DemoPicture = styled("img")`
  height: 100%;
  width: auto;
  margin-right: 15px;
`;

const PitchCaption = styled("div")`
  font-family: Poppins;
  font-size: 14px;
  letter-spacing: 0.05em;
  height: 25px;
  line-height: 20px;
  width: 100%;
  text-align: left;
  margin-bottom: 60px;
`;

const FigureBox = styled("div")`
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  /* margin-left: 50px;
  margin-right: 50px; */
`;

const Figure = styled("div")`
  background-color: #d7d5d5 !important;
  font-family: Poppins;
  font-size: 15px;
  letter-spacing: 0.05em;
  height: 100%;
  line-height: 50px;
  width: 100%;
  padding-left: 30px;
  margin-right: 30px;
`;

const Request = styled(Button)`
  font-family: Poppins !important;
  letter-spacing: 2px !important;
  background: black !important;
  color: white !important;
  border-radius: 0 !important;
  font-size: 15px !important;
  width: 200px;
  height: 100%;
  text-decoration: none;
`;

const RequestInformation = styled("div")`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 52px;
  letter-spacing: 0.05em;
  color: #000000;
  margin-top: 120px;
  margin-bottom: 20px;
`;

const Team = styled("div")`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 52px;
  letter-spacing: 0.05em;
  color: #000000;
  margin-top: 120px;
  margin-bottom: 20px;
  display: block;
  text-align: right;
  width: 100%;
`;

const RequestBox = styled("div")`
  width: 100%;
`;

const TeamBox = styled("div")`
  width: 500px;
`;

const TeamMember = styled("div")`
  font-family: Poppins;
  letter-spacing: 2px;
  color: black;
  border-radius: 0;
  font-size: 15px;
  font-weight: bold;
  width: 100%;
  text-decoration: none;
  text-align: right;
`;

const TeamMemberDescription = styled("div")`
  font-family: Poppins;
  letter-spacing: 2px;
  color: black;
  border-radius: 0;
  font-size: 15px;
  font-weight: lighter;
  width: 100%;
  text-decoration: none;
  text-align: right;
  margin-bottom: 10px;
`;

const Divide = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: "space-between";
`;

class PitchModalContent1 extends React.Component {
  render() {
    return (
      <Container>
        <TopBar>
          <TagList>
            <Title>ZmURL</Title>
            <Tag>WEB APP</Tag>
            <Tag>VIDEO STREAMING</Tag>
            <Tag>EVENTS</Tag>
            <Tag>PRODUCTIVITY</Tag>
          </TagList>
        </TopBar>
        <ImageRoll>
          <DemoPicture src="images/zumurl/zumurl1.png" />
          <DemoPicture src="images/zumurl/zumurl2.png" />
          <DemoPicture src="images/zumurl/zumurl3.png" />
          <DemoPicture src="images/zumurl/zumurl4.png" />
          <DemoPicture src="images/zumurl/zumurl5.png" />
        </ImageRoll>
        <PitchCaption>
          We built ZmURL to let you create beautiful event pages for your Zoom
          events. ZmURL handles registration, email reminders, social sharing,
          paid events, and more. We're seeing people use ZmURL for birthday
          parties, tutoring sessions, silent discos, and we have our first
          wedding coming up this weekend!
        </PitchCaption>
        <PitchCaption>
          Ensure your Zoom event will be a success! In two minutes you'll get:
          <br />✨ A Personalized Event Website
          <br />
          📱 Beautiful Social Sharing
          <br />
          🔒 Built-in Security
          <br />
          💌 Reminders for Guests
          <br />
          📈 Event Analytics
          <br />
          💻 One-Click Join Event from Browser
          <br />
          💰 Paid Ticketing (optional)
        </PitchCaption>
        <Divide>
          <RequestBox>
            <RequestInformation>Request Information</RequestInformation>
            <FigureBox>
              <Figure>Pitch deck</Figure>
              <Request>Request</Request>
            </FigureBox>
            <FigureBox>
              <Figure>Income statement & balance sheet</Figure>
              <Request>Request</Request>
            </FigureBox>
            <FigureBox>
              <Figure>Cap table</Figure>
              <Request>Request</Request>
            </FigureBox>
          </RequestBox>
          <TeamBox>
            <Team>Team</Team>
            <TeamMember>Danquing Liu</TeamMember>
            <TeamMemberDescription>
              CEO, Product Development
            </TeamMemberDescription>
            <TeamMember>Victor Pontis</TeamMember>
            <TeamMemberDescription>
              CTO, Sofware Development
            </TeamMemberDescription>
            <TeamMember>Alexa Smith</TeamMember>
            <TeamMemberDescription>Head of Design</TeamMemberDescription>
          </TeamBox>
        </Divide>
      </Container>
    );
  }
}

class PitchModalContent2 extends React.Component {
  render() {
    return (
      <Container>
        <TopBar>
          <TagList>
            <Title>Hypnopedia</Title>
            <Tag>MOBILE APP</Tag>
            <Tag>LIFESTYLE</Tag>
            <Tag>PRODUCTIVITY</Tag>
          </TagList>
        </TopBar>
        <ImageRoll>
          <DemoPicture src="images/hypnopedia/hypnopedia1.png" />
          <DemoPicture src="images/hypnopedia/hypnopedia2.png" />
          <DemoPicture src="images/hypnopedia/hypnopedia3.png" />
          <DemoPicture src="images/hypnopedia/hypnopedia4.png" />
          <DemoPicture src="images/hypnopedia/hypnopedia5.png" />
          <DemoPicture src="images/hypnopedia/hypnopedia6.png" />
        </ImageRoll>
        <PitchCaption>
          Hypnopedia is an iOS App that plays affirmations while you sleep to
          stimulate positive life changes. The moment for reading affirmations
          is selected depending on individual physiology and principles of
          memory functioning in a dream.
        </PitchCaption>
        <PitchCaption>
          It is proven that the more often your brain receives positive
          stimulations, the better the information is preserved, since it begins
          to be perceived as important and as a result can influence your daily
          behavior.
          <br />
          <br />
          The moment for reading affirmations is chosen based on the individual
          physiology of a person and general principles of memory functioning in
          a dream. Specially tuned algorithms identify the specific phase of
          sleep, when the brain is most susceptible to information received from
          external sources. The process of memory consolidation occurs at this
          exact timeframe. Usually a person goes through 3-6 full sleep cycles
          per night. REM sleep phases become more frequent by morning and this
          is the best time to be woken up, which will be taken care of by a
          built-in “smart” alarm clock.
          <br />
          <br />
          Apple Watch performs functions of a personal sensor since it is
          equipped with all necessary tools, such as microphone, accelerometer
          and optical heart rate sensor.
        </PitchCaption>
        <br />
        <br />
        <br />
        <br />
        <Divide>
          <RequestBox>
            <RequestInformation>Request Information</RequestInformation>
            <FigureBox>
              <Figure>Pitch deck</Figure>
              <Request>Request</Request>
            </FigureBox>
            <FigureBox>
              <Figure>Income statement & balance sheet</Figure>
              <Request>Request</Request>
            </FigureBox>
            <FigureBox>
              <Figure>Cap table</Figure>
              <Request>Request</Request>
            </FigureBox>
          </RequestBox>
          <TeamBox>
            <Team>Team</Team>
            <TeamMember>ALexey Baev</TeamMember>
            <TeamMemberDescription>CEO, Engineering</TeamMemberDescription>
            <TeamMember>Marina Panasic</TeamMember>
            <TeamMemberDescription>UI/UIX</TeamMemberDescription>
            <TeamMember>Andrew Sokol</TeamMember>
            <TeamMemberDescription>
              CMO, Business Development
            </TeamMemberDescription>
          </TeamBox>
        </Divide>
      </Container>
    );
  }
}

export { PitchModalContent1, PitchModalContent2 };

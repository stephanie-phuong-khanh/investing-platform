import React from "react";
import ReactDom from "react-dom";
import { Button, AppBar, Tabs, Tab } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import styled from "@emotion/styled";

const Container = styled("div")`
  padding: 30px 60px 60px 60px;
  display: block;
  height: auto;
`;

const TopBar = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-between;
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

const Star = styled("img")`
  height: 30px;
  width: auto;
  margin-top: auto;
  margin-bottom: auto;
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
  justify-content: space-between;
`;

const ImageRoll = styled("div")`
  overflow-x: scroll;
  height: 260px;
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
`;

class PitchButtonContent1 extends React.Component {
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
          <Star src="images/star.png" />
        </TopBar>
        <ImageRoll>
          <DemoPicture src="images/zumurl/zumurl1.png" />
          <DemoPicture src="images/zumurl/zumurl2.png" />
          <DemoPicture src="images/zumurl/zumurl3.png" />
          <DemoPicture src="images/zumurl/zumurl4.png" />
          <DemoPicture src="images/zumurl/zumurl5.png" />
        </ImageRoll>
        <PitchCaption>
          ZmURL lets you create beautiful event pages for your Zoom events. This
          lightweight application handles registration, email reminders, social
          sharing, paid events, and more.
        </PitchCaption>
      </Container>
    );
  }
}

class PitchButtonContent2 extends React.Component {
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
          <Star src="images/star.png" />
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
      </Container>
    );
  }
}

export { PitchButtonContent1, PitchButtonContent2 };

import React from "react";
import ReactDom from "react-dom";
import Button from "@material-ui/core/Button";

import styled from "@emotion/styled";

const Container = styled("div")`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* background-image: url("images/profile-background.png");
  background-size: 100% 100%; */
`;

const MyProfile = styled("div")`
  font-family: Poppins;
  font-weight: bold;
  font-size: 30px;
  line-height: 45px;
  letter-spacing: 0.05em;
  color: #000000;
  text-align: left;
`;

const Finish = styled("div")`
  font-family: Poppins;
  font-weight: 600;
  font-size: 30px;
  line-height: 50px;
  letter-spacing: 0.05em;
  color: rgba(0, 0, 0, 0.5);
  text-align: left;
`;

const Instruction = styled("div")`
  font-family: Poppins;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: 0.05em;
  font-weight: lighter;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 20px;
  margin-bottom: 40px;
  width: 80%;
  text-align: left;
`;

export default class Profile extends React.Component {
  render() {
    return (
      <Container>
        <LeftPanel>
          <MyProfile>Welcome to Archangel</MyProfile>
          <Finish>Finish your profile to start investing!</Finish>
          <Instruction>
            To find you the best investments, we’d like to ask you a few
            questions to help us choose the best pitches for your interests!
          </Instruction>
          <Form onSubmit={this.onSubmit}>
            <Blank type="text" placeholder="Full Name" />
            <Blank type="text" placeholder="LinkedIn" />
            <BlankLong
              text="text"
              placeholder="Short blurb about you (under 200 words)"
            />
            <Blank type="text" placeholder="Industries" />
          </Form>
        </LeftPanel>
        <RightPanel>
          <UploadPicture>ADD YOUR PHOTO</UploadPicture>
          <Save type="submit">Save</Save>
        </RightPanel>
      </Container>
    );
  }
}

const UploadPicture = styled("div")`
  font-family: Poppins;
  letter-spacing: 2px;
  background-color: rgba(196, 196, 196, 1);
  color: white;
  border-radius: 0;
  font-size: 18px;
  font-weight: lighter;
  width: 270px;
  height: 200px;
  text-decoration: none;
  padding-top: 60%;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
`;

const LeftPanel = styled("div")`
  width: 100%;
  text-align: center;
`;
const RightPanel = styled("div")`
  width: 300px;
  text-align: center;
`;

const Form = styled("form")`
  display: flex;
  flex-direction: column;
  width: 650px;
  margin-left: 0;
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
  textarea:focus,
  input:focus {
    outline: none;
  }
`;

const Blank = styled("input")`
  background-color: rgba(196, 196, 196, 0.22);
  border: none;
  font-size: 20px;
  padding: 12px 20px;
  height: 40px;
  margin-bottom: 15px;
  width: 100%;
  &:focus,
  &:active {
    background-color: rgba(196, 196, 196, 0.22) !important;
    border: none;
  }
`;

const BlankLong = styled("textarea")`
  background-color: rgba(196, 196, 196, 0.22);
  border: none;
  font-size: 20px;
  padding: 12px 20px;
  height: 100px;
  margin-bottom: 25px;
  width: 100%;
  &:focus,
  &:active {
    background-color: rgba(196, 196, 196, 0.22) !important;
    border: none;
  }
`;

const Save = styled("button")`
  font-family: Poppins;
  letter-spacing: 2px;
  background: black;
  color: white;
  border-radius: 0;
  font-size: 18px;
  font-weight: bold;
  width: 270px;
  height: 60px;
  text-decoration: none;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  &:focus {
    outline: none;
  }
`;

import React from "react";
import { withFirebase } from "../../../Firebase";
import Button from "@material-ui/core/Button";
import { compose } from "recompose";
import { withRouter } from "react-router";

import * as ROUTES from "../../../constants/routes";

// const SignOutButton = ({ firebase }) => (
//   <Button type="button" onClick={firebase.doSignOut}>
//     Sign Out
//   </Button>
// );

class SignOutBase extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick = (event) => {
    this.props.firebase
      .doSignOut()
      .then(() => {
        this.props.history.push(ROUTES.LANDING);
      })
      .catch((error) => {
        //TODO: add error handling code, not so important right now
      });
  };

  render() {
    return (
      <Button type="button" onClick={this.onClick}>
        Sign Out
      </Button>
    );
  }
}

const SignOut = compose(withRouter, withFirebase)(SignOutBase);

const SignOutButton = () => <SignOut />;

export default SignOutButton;

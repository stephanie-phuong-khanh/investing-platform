import React from 'react';
import { withFirebase } from '../../Firebase';
import Button from '@material-ui/core/Button';

const SignOutButton = ({ firebase }) => (
  <Button type="button" onClick={firebase.doSignOut}>
    Sign Out
  </Button>
);
export default withFirebase(SignOutButton);
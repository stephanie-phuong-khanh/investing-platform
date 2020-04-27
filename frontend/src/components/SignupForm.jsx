import React from 'react';
import ReactDom from 'react-dom';
import Firebase from '../Firebase';

const INITIAL_STATE = {
    username: '',
    email: '',
    password1: '',
    password2: '',
    error: null,
  };  

class SignupForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }
    
    onChange (event) {
        this.setState({ [event.target.name]: event.target.value });
    };    

    onSubmit (event) {
        const { username, email, password1 } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password1).
      then(authUser => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} >

            </form>
        );
    }
}
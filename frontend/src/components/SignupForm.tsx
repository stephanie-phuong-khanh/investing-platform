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

  type SignupFormProps = {
      firebase : Firebase
  }

  type SignupFormState = {
    username: string,
    email: string,
    password1: string,
    password2: string,
    error: any,
  }

class SignupForm extends React.Component<SignupFormProps, SignupFormState> {
    constructor(props : SignupFormProps) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }
    
    onChange (event : React.ChangeEvent<HTMLInputElement>) {
        this.setState({ [event.target.name]: event.target.value });
    };    

    onSubmit (event: React.FormEvent<HTMLInputElement>) {
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
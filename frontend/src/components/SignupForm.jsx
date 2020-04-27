import React from 'react';
import ReactDom from 'react-dom';
import Firebase from '../Firebase';
import Button from '@material-ui/core/Button';
import Textfield from '@material-ui/core/TextField';

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

	onChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	onSubmit(event) {
		const { username, email, password1 } = this.state;

		this.props.firebase
			.doCreateUserWithEmailAndPassword(email, password1)
			.then((authUser) => {
				this.setState({ ...INITIAL_STATE });
			})
			.catch((error) => {
				this.setState({ error });
			});
		event.preventDefault();
	}

	render() {

    const {
      username,
      email,
      password1,
      password2,
      error,
    } = this.state;

		return (
			<form onSubmit={this.onSubmit}>
				<input name="username" value={username} onChange={this.onChange} type="text" placeholder="Full Name" />
				<input name="email" value={email} onChange={this.onChange} type="text" placeholder="Email Address" />
				<input
					name="passwordOne"
					value={password1}
					onChange={this.onChange}
					type="password"
					placeholder="Password"
				/>

        <TextField
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          onChange={this.onChange}
          value = {password1}
        /> 
				<input
					name="passwordTwo"
					value={passwordTwo}
					onChange={this.onChange}
					type="password"
					placeholder="Confirm Password"
				/>
				<Button type="submit">Sign Up</Button>
			</form>
		);
	}
}

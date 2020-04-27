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

export default class SignupForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = { ...INITIAL_STATE };

		this.onChange.bind(this);
		this.onSubmit.bind(this);
	}

	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
		// console.log(event.target.name + " " + event.target.value);
	};

	onSubmit = (event) => {
		const { username, email, password1 } = this.state;

		console.log("email: " + email);
		console.log("password1: " + password1);

		this.props.firebase
			.doCreateUserWithEmailAndPassword(email, password1)
			.then((authUser) => {
				this.setState({ ...INITIAL_STATE });
			})
			.catch((error) => {
				this.setState({ error });
			});
		event.preventDefault();
	};

	render() {
		const { username, email, password1, password2, error } = this.state;

		return (
			<form onSubmit={this.onSubmit}>
				<div>
					<Textfield
						name="username"
						label="Full Name"
						value={username}
						onChange={this.onChange}
						variant="outlined"
					/>
					<Textfield
						required
						name="email"
						label="Email"
						value={email}
						onChange={this.onChange}
						variant="outlined"
					/>
					<Textfield
						name="password1"
						label="Password"
						type="password"
						autoComplete="current-password"
						variant="outlined"
						onChange={this.onChange}
						value={password1}
					/>

					<Textfield
						name="password2"
						label="Confirm Password"
						type="password"
						autoComplete="current-password"
						variant="outlined"
						onChange={this.onChange}
						value={password2}
					/>
					<Button type="submit" onClick={this.onSubmit}>
						Sign Up
					</Button>

					{/* <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password1"
          value={password1}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <input
          name="password2"
          value={password2}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />   */}
				</div>
			</form>
		);
	}
}

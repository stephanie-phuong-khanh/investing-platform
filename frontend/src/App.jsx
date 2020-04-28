import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as ROUTES from './constants/routes';

import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import SignInPage from './pages/SignInPage';
import Navigation from './components/Navigation';
import { withFirebase } from './Firebase';

import { AuthUserContext } from './components/Session';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			authUser: null,
		};
	}

	componentDidMount() {
		this.props.firebase.auth.onAuthStateChanged((authUser) => {
			authUser ? this.setState({ authUser }) : this.setState({ authUser: null });
		});
	}

	componentWillMount() {
		this.listener();
	}

	render() {
		return (
			<div>
				<Router>
					<AuthUserContext.Provider value={this.state.authUser}>
						<Navigation />
						<Switch>
							<Route exact path={ROUTES.LANDING} component={LandingPage} />
							<Route path={ROUTES.SIGN_IN} component={SignInPage} />
							<Route path={ROUTES.HOME} component={HomePage} />
						</Switch>
					</AuthUserContext.Provider>
				</Router>
			</div>
		);
	}
}

export default withFirebase(App);

import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as ROUTES from './constants/routes';

import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
// import SignInPage from './pages/SignInPage';
import SignInPage from './components/SignIn';
import Navigation from './components/Navigation';
import { withFirebase } from './Firebase';

import { withAuthentication } from './components/Session';
import SignUpPage from './components/SignUp';

const App = () => {
		return (
			<div>
				<Router>
						<Navigation />
						<Switch>
							<Route exact path={ROUTES.LANDING} component={LandingPage} />
							<Route path={ROUTES.SIGN_IN} component={SignInPage} />
							<Route path={ROUTES.HOME} component={HomePage} />
              <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
						</Switch>
				</Router>
			</div>
		);
	}

export default withAuthentication(App);

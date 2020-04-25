import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

function TransitionRoute({ location, ...rest }) {
	return (
		<TransitionGroup>
			<CSSTransition key={location.key} timeout={{ enter: 300, exit: 300 }} classNames={'fade'}>
				<Route location={location} key={location.key} {...rest} />
			</CSSTransition>
		</TransitionGroup>
	);
}

export default TransitionRoute;

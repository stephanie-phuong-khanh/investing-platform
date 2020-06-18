import React from "react";
import {
  TransitionGroup,
  CSSTransition,
  CSSTransitionGroup,
  Transition,
} from "react-transition-group";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

const TransitionRoute = ({ transitionName, ...rest }) => (
  <Route
    render={({ location }) => (
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames="fade"
        >
          <Route location={location} key={location.key} {...rest} />
        </CSSTransition>
      </TransitionGroup>
    )}
  />
);

export default TransitionRoute;

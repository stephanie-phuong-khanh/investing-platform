import React from 'react';
import ReactDom from 'react-dom';
import Button from '@material-ui/core/Button'
import TransitionRoute from '../TransitionRoutes'
import Navigation from "../Navigation"
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import DashBoard from './HomePage/DashBoard'
import InterestPage from './HomePage/InterestCompany'
import FeedPage from './HomePage/PitchFeed'

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="container">
            <Router>
              <Navigation />
                  <TransitionRoute exact path="/" 
                        component={FeedPage} 
                        transitionName="fade"/>
                  <TransitionRoute exact path="/interests" 
                        component={InterestPage} 
                        transitionName="fade"/>
                  <TransitionRoute exact path="/dashboard" 
                        component={DashBoard} 
                        transitionName="fade"/>
          </Router>
          </div>
        )
    }
}


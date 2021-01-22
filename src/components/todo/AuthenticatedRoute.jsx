import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthenticationService from './AuthenticationService';

class AuthenticatedRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        if (AuthenticationService.isUserLoggedIn()) {
            return <Route {...this.props} />
        }
        else {
            return <Redirect to="/login" />
        }

    }
}

export default AuthenticatedRouter;
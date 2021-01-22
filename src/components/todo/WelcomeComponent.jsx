import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'


class WelcomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>Hi {this.props.match.params.name}! Welcome to My ToDo application. Click <Link to='/todo'>here</Link> to view my Todo list</div>);
    }
}
export default WelcomeComponent;
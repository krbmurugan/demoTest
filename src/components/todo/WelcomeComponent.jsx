import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import WelcomePageService from '../../api/todo/WelcomePageService'


class WelcomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            welcomeMsg: ''
        };
        this.getWelcome = this.getWelcome.bind(this);
    }
    render() {
        return (<div className="container">Hi {this.props.match.params.name}! Welcome to My ToDo application. Click <Link to='/todo'>here</Link> to view my Todo list
        <br />
            <button className="btn btn-success" onClick={this.getWelcome}>Click to get welcome message </button>
            <div className="container">{this.state.welcomeMsg}</div>
        </div >);
    }
    getWelcome() {
        WelcomePageService.getWelcomeMessageWithQueryParam(this.props.match.params.name)
            .then(resp => {
                console.log(resp);
                this.setState({ welcomeMsg: resp.data.msg })
            }
            ).catch(error1 =>

                console.log(error1.response)
            );


    }
}
export default WelcomeComponent;
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'
import AuthenticatedRouter from './AuthenticatedRoute.jsx';
import LoginComponent from './LoginComponent.jsx';
import HeaderComponent from './HeaderComponent';
import WelcomeComponent from './WelcomeComponent';
class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Router>
                    <>
                        <HeaderComponent />
                        <Switch>

                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <AuthenticatedRouter path="/welcome/:name" component={WelcomeComponent} />
                            <AuthenticatedRouter path="/todo" component={TODO} />
                            <Route path="/logout" component={LogoutComponent} />
                            <Route component={ErrorComponent} />
                        </Switch>
                        <FooterComponent />
                    </>
                </Router>
            </div>

        );
    }
}


/*
function ShowInvalidLogin(props) {
            console.log('Inside ...', props.loginSuccess1, '=', props.loginFailed1);
        if (props.loginSuccess1)
return <div>Login successful</div>
        if (props.loginFailed1) {
return <div>Invalid credentials</div>
        }
        return null;
    } */



class LogoutComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div className="container" >Logged out successfullydd.
            Click <Link to='/login'>here</Link> to login back</div>);
    }
}

class TODO extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { id: 1, description: 'React', duration: '2Months', done: false, targetDate: new Date() },
                { id: 2, description: 'Spring Boot', duration: '3Months', done: false, targetDate: new Date() },
                { id: 3, description: 'AWS', duration: '1Month', done: false, targetDate: new Date() }
            ]
        }
    }
    render() {
        return (
            <div>
                My Todos
                <div className="container">
                    <table className="table">
                        <thead><tr><th>Id</th><th>Description</th><th>Duration</th>
                            <th>Is Completed?</th>
                            <th>Target Date</th></tr></thead>
                        {this.state.todos.map(todo => (
                            <tr>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.duration}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
                            </tr>
                        )
                        )}
                    </table>
                </div >
            </div >
        );
    }
}

class FooterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div><hr />Footer</div>);
    }
}




function ErrorComponent() {
    return (<div>Error happened</div>)
}




export default TodoApp;
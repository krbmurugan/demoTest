import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

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
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/welcome" component={WelcomeComponent} />
                    </>
                </Router>
            </div>

        );
    }
}

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unname: 'in28mins',
            pword: '',
            loginSuccess: false,
            loginFailed: false
        }
        this.handleUNameChange = this.handleUNameChange.bind(this)
        this.handlePWordChange = this.handlePWordChange.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);

    }

    handlePWordChange(event) {
        console.log(event.target.value);
        this.setState({ pword: event.target.value });

    }

    handleUNameChange(event) {
        // console.log(event.target.value);
        this.setState({ unname: event.target.value });

    }

    handleChange(event) {
        //when using common handle change method, note the state variable name is name as the form element name
        /* 
        this.state = {
            unname: 'in28minsss',
            pword: ''
        }
        <input type='text' name='unname'
        <input type='password' name='pword'
         */
        // console.log(event.target.name, '==', event.target.value, this.state);
        this.setState({
            [event.target.name]: event.target.value
        })
        // console.log(this.state)

    }

    login() {
        // console.log('login clicked..', this.state.unname, '/', this.state.pword)
        if (this.state.unname === 'in28mins' && this.state.pword === 'dummy') {
            this.props.history.push('/welcomesdf')
            console.log('Login Success')
            this.setState({
                loginSuccess: true,
                loginFailed: false
            })
        }
        else {
            console.log('Invalid credentials')
            this.setState({
                loginSuccess: false,
                loginFailed: true
            })
        }

    }


    render() {
        return (<div>

            {/* <ShowInvalidLogin loginSuccess1={this.state.loginSuccess} loginFailed1={this.state.loginFailed} /> */}
            {this.state.loginSuccess && <div>Login successful</div>}
            {this.state.loginFailed && <div>Invalid credentials</div>}

            Username<input type='text' name='unname' value={this.state.unname} onChange={this.handleChange} />
            Password <input type='password' name='pword' value={this.state.pword} onChange={this.handleChange} />
            <button name='Login' value='Login' onClick={this.login}>Login</button>

        </div>);
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

class WelcomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>Welcome to My ToDo application</div>);
    }
}




export default TodoApp;
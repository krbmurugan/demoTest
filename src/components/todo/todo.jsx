import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'

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
                            <Route path="/welcome/:name" component={WelcomeComponent} />
                            <Route path="/todo" component={TODO} />
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
            AuthenticationService.registerSuccessfulLogin(this.state.unname, this.state.pword)
            this.props.history.push(`/welcome/${this.state.unname}`)
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
            <button className="btn btn-success" name='Login' value='Login' onClick={this.login}>Login</button>

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
        return (<div>Hi {this.props.match.params.name}! Welcome to My ToDo application. Click <Link to='/todo'>here</Link> to view my Todo list</div>);
    }
}

class LogoutComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div className="container">Logged out successfully.
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

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="navbar-brand">Redsoil</div>
                    <ul className="navbar-nav">
                        <li><Link to="/welcome/bala" className="nav-link">Home</Link></li>
                        <li><Link to="/todo" className="nav-link"> Todos</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li><Link to="/login" className="nav-link"> Login</Link></li>
                        <li><Link to="/logout" className="nav-link"> Logout</Link></li>

                    </ul>
                </nav>
            </header>
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
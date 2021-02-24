import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService.js";
import TodoAPIService from "../../api/todo/TodoAPIService.js";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unname: "in28mins",
      pword: "",
      loginSuccess: false,
      loginFailed: false,
    };
    this.handleUNameChange = this.handleUNameChange.bind(this);
    this.handlePWordChange = this.handlePWordChange.bind(this);
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
      [event.target.name]: event.target.value,
    });
    // console.log(this.state)
  }

  login() {
    // console.log('login clicked..', this.state.unname, '/', this.state.pword)
    // if (this.state.unname === "in28mins" && this.state.pword === "dummy") {

    AuthenticationService.authenticate(this.state.unname, this.state.pword)
      .then((resp) => {
        console.log("JWT Token ", resp.data.token);
        AuthenticationService.registerSuccessfulLoginWithJwtToken(
          this.state.unname,
          resp.data.token
        );
        this.props.history.push(`/welcome/${this.state.unname}`);
        console.log("Login Success");
        this.setState({
          loginSuccess: true,
          loginFailed: false,
        });
      })
      .catch((e) => console.log("Error is ", e));

    /* if (this.state.unname === "in28minutes" && this.state.pword === "dummy") {
      AuthenticationService.registerSuccessfulLogin(
        this.state.unname,
        this.state.pword
      );
      this.props.history.push(`/welcome/${this.state.unname}`);
      console.log("Login Success");
      this.setState({
        loginSuccess: true,
        loginFailed: false,
      });
    } else {
      console.log("Invalid credentials");
      this.setState({
        loginSuccess: false,
        loginFailed: true,
      });
    } */
  }

  render() {
    return (
      <div>
        {/* <ShowInvalidLogin loginSuccess1={this.state.loginSuccess} loginFailed1={this.state.loginFailed} /> */}
        {this.state.loginSuccess && <div>Login successful</div>}
        {this.state.loginFailed && <div>Invalid credentials</div>}
        Username
        <input
          type="text"
          name="unname"
          value={this.state.unname}
          onChange={this.handleChange}
        />
        Password{" "}
        <input
          type="password"
          name="pword"
          value={this.state.pword}
          onChange={this.handleChange}
        />
        <button
          className="btn btn-success"
          name="Login"
          value="Login"
          onClick={this.login}
        >
          Login
        </button>
      </div>
    );
  }
}

export default LoginComponent;

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AuthenticationService from "./AuthenticationService.js";
import AuthenticatedRouter from "./AuthenticatedRoute.jsx";
import LoginComponent from "./LoginComponent.jsx";
import HeaderComponent from "./HeaderComponent";
import WelcomeComponent from "./WelcomeComponent";
import TodoAPIService from "../../api/todo/TodoAPIService.js";
import UpdTodoComponent from "./UpdTodoComp.jsx";
class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
              <AuthenticatedRouter
                path="/welcome/:name"
                component={WelcomeComponent}
              />

              <AuthenticatedRouter
                path="/todo/:id"
                component={UpdTodoComponent}
              />
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
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        Logged out successfullydd. Click <Link to="/login">here</Link> to login
        back
      </div>
    );
  }
}

class TODO extends Component {
  constructor(props) {
    console.log("Constructor");
    super(props);

    this.state = {
      todos: [
        /* {
          id: 1,
          description: "React",
          duration: "2Months",
          done: false,
          targetDate: new Date(),
        },
        {
          id: 2,
          description: "Spring Boot",
          duration: "3Months",
          done: false,
          targetDate: new Date(),
        },
        {
          id: 3,
          description: "AWS",
          duration: "1Month",
          done: false,
          targetDate: new Date(),
        }, */
      ],
      message: null,
    };
    this.deletTodoClicked = this.deletTodoClicked.bind(this);
    this.updTodoClicked = this.updTodoClicked.bind(this);
    this.refreshTodos = this.refreshTodos.bind(this);
    this.addTodoClicked = this.addTodoClicked.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.refreshTodos();
  }

  refreshTodos() {
    TodoAPIService.getTodosForUser(
      AuthenticationService.getLoggedInUser()
    ).then((resp) => {
      console.log("Getting todo list");
      console.log(resp.data);
      let userTodos = [];
      resp.data.forEach((data) => {
        console.log(data);
        let todoItem = {
          id: data.id,
          description: data.desc,
          duration: "1 Month",
          done: data.complete,
          targetDate: data.targetDate,
        };
        userTodos.push(todoItem);
      });

      console.log("user todos...", userTodos);
      this.setState({ todos: userTodos });
    });
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  deletTodoClicked(usernName, todoId) {
    console.log(usernName, "==", todoId);
    TodoAPIService.deleteUserTodo(usernName, todoId).then((resp) => {
      this.setState({ message: `Delete of Todo ${todoId} successful` });
      this.refreshTodos();
    });
  }

  updTodoClicked(userName, todoId) {
    console.log("Updated clicked %s and the id %d", userName, todoId);
    this.props.history.push(`/todo/${todoId}`);
  }

  addTodoClicked() {
    console.log("Add todo clicked..");
    this.props.history.push(`/todo/0`);
  }

  render() {
    console.log("Render");
    return (
      <div>
        My Todos
        {this.state.message && (
          <div className="alert alert-success">{this.state.message}</div>
        )}
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Description</th>
                <th>Duration</th>
                <th>Is Completed?</th>
                <th>Target Date</th>
              </tr>
            </thead>
            {this.state.todos.map((todo) => (
              <tr>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{todo.duration}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.targetDate.toString()}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() =>
                      this.updTodoClicked(
                        AuthenticationService.getLoggedInUser(),
                        todo.id
                      )
                    }
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() =>
                      this.deletTodoClicked(
                        AuthenticationService.getLoggedInUser(),
                        todo.id
                      )
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
        <button
          className="btn btn-success"
          onClick={() =>
            this.addTodoClicked(AuthenticationService.getLoggedInUser())
          }
        >
          Add a Todo
        </button>
      </div>
    );
  }
}

class FooterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <hr />
        Footer
      </div>
    );
  }
}

function ErrorComponent() {
  return <div>Error happened</div>;
}

export default TodoApp;

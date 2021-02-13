import React, { Component } from "react";
import moment from "moment";
import { Formik, Form, Field } from "formik";
import AuthenticationService from "./AuthenticationService";
import TodoAPIService from "../../api/todo/TodoAPIService.js";

class UpdTodoComponent extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      loggedUser: AuthenticationService.getLoggedInUser(),
      id: 1,
      description: "React",
      duration: "2Months",
      done: false,
      targetDate: moment(new Date()).format("YYYY-MM-DD"),
    };
    this.onSaveClicked = this.onSaveClicked.bind(this);
  }

  onSaveClicked(values) {
    TodoAPIService.updatedTodo(
      this.state.loggedUser,
      this.props.match.params.id,
      values
    ).then((r) => this.props.history.push("/todo"));
  }

  componentDidMount() {
    console.log(
      "Getting todo111 %s for user %s",
      this.props.match.params.id,
      this.state.loggedUser
    );

    if (this.props.match.params.id != 0) {
      TodoAPIService.getUserTodoById(
        this.state.loggedUser,
        this.props.match.params.id
      ).then((resp) =>
        this.setState({
          description: resp.data.desc,
          targetDate: moment(resp.data.targetDate).format("YYYY-MM-DD"),
        })
      );
    }
  }

  render() {
    let description = this.state.description;
    let targetDate = this.state.targetDate;

    return (
      <div>
        <h2>
          Updating to do -{} {this.props.match.params.id} -
          {this.state.description}
        </h2>
        <div className="container">
          <Formik
            initialValues={{
              description: description,
              targetDate: targetDate,
            }}
            enableReinitialize={true}
            onSubmit={this.onSaveClicked}
          >
            {(props) => (
              <Form>
                <fieldset className="form-group">
                  <label>Description</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="description"
                  ></Field>
                </fieldset>
                <fieldset className="form-group">
                  <label>Target Date</label>
                  <Field
                    className="form-control"
                    type="date"
                    name="targetDate"
                  ></Field>
                </fieldset>
                <button type="submit" className="btn btn-success">
                  Save
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default UpdTodoComponent;

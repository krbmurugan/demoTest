import axios from "axios";
class TodoDataService {
  getTodosForUser(userName) {
    console.log("userName..", userName);
    let url = `http://localhost:5000/users/${userName}/todos`;
    return axios.get(url);
  }

  deleteUserTodo(userName, id) {
    let url = `http://localhost:5000/users/${userName}/todos/${id}`;
    return axios.delete(url);
  }

  anotherMethod() {}

  getUserTodoById(userName, todoId) {
    console.log("Getting todo %s for user %s", todoId, userName);
    let url = `http://localhost:5000/users/${userName}/todo/${todoId}`;
    return axios.get(url);
  }

  updatedTodo(userName, todoId, todo) {
    console.log("Updating todo %s for user %s and %o", todoId, userName, todo);
    let apiTodo = {
      id: todoId,
      desc: todo.description,
      name: todo.description,
      targetDate: todo.targetDate,
    };
    console.log(apiTodo);
    let url = `http://localhost:5000/users/${userName}/todos/${todoId}`;
    return axios.put(url, apiTodo);
  }
}

export default new TodoDataService();

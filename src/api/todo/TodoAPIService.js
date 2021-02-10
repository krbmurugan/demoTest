import axios from "axios";
class TodoDataService {
  getTodosForUser(userName) {
    console.log("userName..", userName);
    let url = `http://localhost:5000/users/${userName}/todos`;
    return axios.get(url);
  }

  anotherMethod() {}
}

export default new TodoDataService();

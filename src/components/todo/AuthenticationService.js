import axios from "axios";
class AuthenticationService {
  registerSuccessfulLogin(userName, password) {
    console.log("In Authentication service...", userName);
    sessionStorage.setItem("UserName", userName);
    this.setUpReqInterceptors(this.getBasicAuthHeader(userName, password));
  }

  registerSuccessfulLoginWithJwtToken(userName, token) {
    sessionStorage.setItem("UserName", userName);
    this.setUpReqInterceptors(this.getJWTAuthHeader(token));
  }

  removeSessionUser(userName) {
    console.log("Removing session user..", userName);
    sessionStorage.removeItem("UserName");
  }

  isUserLoggedIn() {
    if (sessionStorage.getItem("UserName") === null) return false;
    return true;
  }

  getLoggedInUser() {
    return sessionStorage.getItem("UserName");
  }

  setUpReqInterceptors(authHeader) {
    console.log("Interceptor..");
    let username = "in28mins";
    let password = "dummy123";
    // console.log("Interceptor..", username, password);
    // let basicAuthHeader = "Basic " + window.btoa(username + ":" + password);
    axios.interceptors.request.use((config) => {
      if (this.isUserLoggedIn()) {
        config.headers.authorization = authHeader;
        return config;
      }
    });
  }

  authenticate(username, password) {
    console.log("Authenticating with %s and %s", username, password);
    let authObj = { username, password };
    return axios.post(`http://localhost:5000/authenticate`, authObj);
  }

  getBasicAuthHeader(username, password) {
    return "Basic " + window.btoa(username + ":" + password);
  }

  getJWTAuthHeader(token) {
    return "Bearer " + token;
  }
}

export default new AuthenticationService();

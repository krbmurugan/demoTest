import axios from "axios";

class WelcomePageService {
  getWelcomeMessage() {
    console.log("executed service..");
    return axios.get("http://localhost:5000/home7");
  }

  getWelcomeMessageWithVal(msg) {
    var path = "http://localhost:5000/withpathvar/" + msg;
    console.log(path);
    console.log("executed MSG PATH VAR service using, ", msg);
    return axios.get(`http://localhost:5000/withpathvar/${msg}/check`);
    // return axios.get(path)
  }

  getWelcomeMessageWithQueryParam(msg) {
    let username = "in28mins";
    let password = "dummy";
    let basicAuthHeader = "Basic " + window.btoa(username + ":" + password);
    console.log("Inside getWelcomeMessageWithQueryParam", basicAuthHeader);
    return axios.get(`http://localhost:5000/withqueryparam?username=${msg}`, {
      headers: {
        authorization: basicAuthHeader,
      },
    });
    //return axios.get(path)
  }
}

export default new WelcomePageService();

import axios from 'axios'

class WelcomePageService {
    getWelcomeMessage() {
        console.log("executed service..")
        return axios.get('http://localhost:8080/home7')
    }

    getWelcomeMessageWithVal(msg) {
        var path = "http://localhost:8080/withpathvar/" + msg
        console.log(path)
        console.log("executed MSG PATH VAR service using, ", msg);
        return axios.get(`http://localhost:8080/withpathvar/${msg}/check`)
        // return axios.get(path)
    }

    getWelcomeMessageWithQueryParam(msg) {
        console.log('Inside getWelcomeMessageWithQueryParam')
        return axios.get(`http://localhost:8080/withqueryparam?username=${msg}`)
        // return axios.get(path)
    }

}

export default new WelcomePageService()
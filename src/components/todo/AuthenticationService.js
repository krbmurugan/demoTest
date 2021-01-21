class AuthenticationService {

    registerSuccessfulLogin(userName, password) {
        console.log('In Authentication service...', userName);
        sessionStorage.setItem('UserName', userName);
    }
}

export default new AuthenticationService();
class AuthenticationService {

    registerSuccessfulLogin(userName, password) {
        console.log('In Authentication service...', userName);
        sessionStorage.setItem('UserName', userName);
    }

    removeSessionUser(userName) {
        console.log('Removing session user..', userName)
        sessionStorage.removeItem('UserName')
    }

    isUserLoggedIn() {
        if (sessionStorage.getItem('UserName') === null) return false;
        return true;
    }
}

export default new AuthenticationService();
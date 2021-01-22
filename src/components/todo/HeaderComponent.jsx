import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService.js';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { withRouter } from 'react-router';


class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const isUserLogged = AuthenticationService.isUserLoggedIn();
        console.log("isUserLogged..11", isUserLogged);
        return (


            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="navbar-brand">Redsoil</div>
                    <ul className="navbar-nav">
                        {isUserLogged && <li><Link to="/welcome/bala" className="nav-link">Home</Link></li>}
                        {isUserLogged && <li><Link to="/todo" className="nav-link"> Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLogged && <li><Link to="/login" className="nav-link"> Login</Link></li>}
                        {isUserLogged && < li > <Link onClick={() => AuthenticationService.removeSessionUser('link')} to="/logout" className="nav-link" > Logouts</Link></li>}

                    </ul>
                </nav>
            </header >
        );
    }
}

export default withRouter(HeaderComponent);
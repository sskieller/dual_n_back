import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from "./Pages/PrivateRoute";

import Game from "./Pages/GameComponent";
import Login from "./Pages/LoginComponent";
import Registration from "./Pages/RegistrationComponent";

import logo from "./logo/logo192.png";

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="container">
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<a className="navbar-brand" href="/" target="_blank" rel="noopener noreferrer">
							<img src={logo} width="30" height="30" alt="google" />
						</a>

						<Link to="/user/login" className="navbar-brand">DUAL-N-BACK App</Link>
						<div className="collpase navbar-collapse">
							<ul className="navbar-nav mr-auto">
								<li className="navbar-item">
									<Link to="/" className="nav-link">Game</Link>
								</li>
							</ul>
						</div>

					</nav>
					<br />
					<PrivateRoute path="/" exact component={Game} />
					<Route path="/user/new" component={Registration} />
					<Route path="/user/login" component={Login} />
				</div>
			</Router>
		);
	}
}

export default App;

/**
 * Components:
 * Registration, Login, Logout
 * DUAL-N-BACK GAME
 * High-Score Overview
 * List of scores
 *
 * Routes:
 * /                  Home
 * /user/new          Register
 * /user/login        Login
 * /user/logout       Logout
 *
 * Websocket:
 * /
 * 'score': Send score
 * 'highscore': Receive message on new highscore
 *
 * TECHNOLOGIES:
 * Frontend
 * React, Redux, JWT: https://www.devglan.com/react-js/react-js-jwt-authentication-example
 * SERVICE-WORKER: https://developers.google.com/web/fundamentals/primers/service-workers
 * PROGRESSIVE-WEB-APP:
 * https://create-react-app.dev/docs/making-a-progressive-web-app/
 *
 * https://blackboard.au.dk/bbcswebdav/pid-2316780-dt-content-rid-7068004_1/courses/BB-Cou-UUVA-86322/14%20Progressive%20Web%20Apps/40%20Progressive%20Web%20Apps.pdf
 * https://developers.google.com/web/progressive-web-apps/
 * https://developers.google.com/web/progressive-web-apps/checklist
 */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Game from './Pages/Game.component';
import Login from './Pages/Login.component';
import Registration from './Pages/Registration.component';

import logo from './../public/logo192.png';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="http://google.com/" target="_blank">
              <img src={logo} width="30" height="30" alt="google" />
            </a>

            <Link to="/" className="navbar-brand">DUAL-N-BACK App</Link>
            <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item"> 
                <Link to="/" className="nav-link">Game</Link>
              </li>
            </ul>
            </div>

          </nav>
          <br/>
          <Route path="/" exact component={Game} />
        <Route path="/user/new" component={Registration} />
        <Route path="/user/login" component={Login} />
        {/* Game screen shows ending list of scores, two components with high scores, game, menu bar on top */}
        {/* Automatically rerouted to login/registration if no/faulty JWT registered */}
        {/* Scores can be seen next to game? */}
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
 * /scores/highscore  WEBSOCKET Score Overview - Updates clients with new high scores
 * /scores/           Add new score to database
 *
 * TECHNOLOGIES:
 * Backend
 * Node, Express, Mongo, JWT:
 * https://medium.com/swlh/jwt-authentication-authorization-in-nodejs-express-mongodb-rest-apis-2019-ad14ec818122
 * https://medium.com/codingthesmartway-com-blog/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-2-637f337e5d61
 * WEBSOCKET: Node unit 7, https://blackboard.au.dk/bbcswebdav/pid-2316813-dt-content-rid-7651017_1/courses/BB-Cou-UUVA-86322/10%20WebSocket/10a%20WebSocket.pdf
 *
 * Frontend
 * React, Redux, JWT: https://www.devglan.com/react-js/react-js-jwt-authentication-example
 * SERVICE-WORKER: https://developers.google.com/web/fundamentals/primers/service-workers
 * PROGRESSIVE-WEB-APP:
 * https://create-react-app.dev/docs/making-a-progressive-web-app/
 *
 * https://blackboard.au.dk/bbcswebdav/pid-2316780-dt-content-rid-7068004_1/courses/BB-Cou-UUVA-86322/14%20Progressive%20Web%20Apps/40%20Progressive%20Web%20Apps.pdf
 * https://developers.google.com/web/progressive-web-apps/
 * https://developers.google.com/web/progressive-web-apps/checklist
 * BACKEND:
 */

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h2>dual_n_back game</h2>
        </div>
      </Router>
    )
  }
}


export default App;

/**
 * TECHNOLOGIES:
 * Node, Express, Mongo Backend: 
 * https://medium.com/swlh/jwt-authentication-authorization-in-nodejs-express-mongodb-rest-apis-2019-ad14ec818122
 * https://medium.com/codingthesmartway-com-blog/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-2-637f337e5d61
 * 
 * React, Redux, JWT front-end: https://www.devglan.com/react-js/react-js-jwt-authentication-example
 * 
 * BACKEND: 
 * WEBSOCKET: Node unit 7, https://blackboard.au.dk/bbcswebdav/pid-2316813-dt-content-rid-7651017_1/courses/BB-Cou-UUVA-86322/10%20WebSocket/10a%20WebSocket.pdf
 * SERVICE-WORKER: https://developers.google.com/web/fundamentals/primers/service-workers
 * PROGRESSIVE-WEB-APP: 
 * https://blackboard.au.dk/bbcswebdav/pid-2316780-dt-content-rid-7068004_1/courses/BB-Cou-UUVA-86322/14%20Progressive%20Web%20Apps/40%20Progressive%20Web%20Apps.pdf
 * https://developers.google.com/web/progressive-web-apps/
 * https://developers.google.com/web/progressive-web-apps/checklist
 */

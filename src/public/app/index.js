import React from 'react';
import { render } from 'react-dom';
import {
  HashRouter as Router,
  Route,
  // Link,
  // Redirect,
  // withRouter,
} from 'react-router-dom';

import App from './App.js';
import Login from './Login.jsx';
import Organization from './Organization.jsx';
import User from './User.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => (
            <Login/>
          )}/>
          <Route exact path="/organization" render={() => (
            <Organization/>
          )}/>
          <Route exact path="/user" render={() => (
            <User/>
          )}/>
        </div>
      </Router>
    );
  }
}

render(<Main />, document.getElementById('app'));

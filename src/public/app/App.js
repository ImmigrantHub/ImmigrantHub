import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  HashRouter as Router,
  Route,
  // Link,
  // Redirect,
  // withRouter,
} from 'react-router-dom';

import Login from './Login.jsx';
import Organization from './Organization.jsx';
import User from './User.jsx';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
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
      </MuiThemeProvider>
    );
  }
}

export default App;

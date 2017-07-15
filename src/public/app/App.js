import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MenuBar from './MenuBar.jsx';
import {
  HashRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom';

import Login from './Login.jsx';
import Signin from './Signin.jsx';
import Organization from './Organization.jsx';
import User from './User.jsx';
import Post from './Post.jsx';
import MenuBar from './MenuBar.jsx';
import Community from './Community.jsx';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <MenuBar />
            <Route exact path="/" render={() => (
              <Signin/>
            )}/>
            <Route exact path="/login" render={() => (
              <Login/>
            )}/>
            <Route exact path="/organization" render={() => (
              <Organization/>
            )}/>
            <Route exact path="/user" render={() => (
              <User/>
            )}/>
            <Route exact path="/post" render={() => (
              <Post/>
            )}/>
            <Route exact path="/menu" render={() => (
              <MenuBar/>
            )}/>
            <Route exact path="/community" render={() => (
              <Community/>
            )}/>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;

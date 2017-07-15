import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MenuBar from './MenuBar.jsx';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password:'',
    }

    this.handleUserSubmit = this.handleUserSubmit.bind(this);
  }

  handleUserSubmit() {}

  render() {
    
    return (
      <div className="landingWrapper">
        <Card className="signupCard">
          <div className="signupWrapper">
            <span className="signupInfo">Username</span>
            <TextField className="signupInput"/>
            <span className="signupInfo">Password</span>
            <TextField className="signupInput" type="password"/>
            <RaisedButton className="signupButton">
              Login to ImmigrantHub
            </RaisedButton>
            <span className="signupInfo signupInfoSmall"><a href="/#/">I want to create an account!</a></span>
          </div>
        </Card>
      </div>
    )
  }
};

export default Login;

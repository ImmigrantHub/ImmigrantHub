import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Signin = props => {
  return (
    <div className="landingWrapper">
      <div className="landingInfo">
        <h1 className="landingTitle">Buily by Immigrants for Immigrants!</h1>
        <h2 className="landingSubtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do <b>eiusmod</b> uti <b>tempor incididunt</b> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</h2>
      </div>
      <Card className="signupCard">
        <div className="signupWrapper">
          <span className="signupInfo">Username</span>
          <TextField className="signupInput"/>
          <span className="signupInfo">Email</span>
          <TextField className="signupInput" type="email"/>
          <span className="signupInfo">Password</span>
          <TextField className="signupInput" type="password"/>
          <span className="signupInfo signupInfoSmall">Use at least one letter, one numeral, and seven characters.</span>
          <RaisedButton className="signupButton">
            Signup for ImmigrantHub
          </RaisedButton>
          <span className="signupInfo signupInfoSmall">By clicking "Sign up for GitHub", you agree to our <a>terms of service</a> and <a>privacy policy</a>. We’ll occasionally send you account related emails.</span>
          <span className="signupInfo signupInfoSmall"><a href="/#/login">I already have an account!</a></span>
        </div>
      </Card>
    </div>
  )
};

export default Signin;

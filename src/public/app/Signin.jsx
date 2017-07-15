import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import TagArray from './TagArray.jsx';

const languages = [
  'Español',
  'Deutsch',
  'العربية',
  'Français',
  'Italiano',
  '日本語',
  'Português',
  '中文',
  '한국어',
]

const Signin = props => {
  return (
    <div className="landingWrapper">
      <div className="landingInfo">
        <h1 className="landingTitle">Welcome Home!</h1>
        <h2 className="landingSubtitle">Just as fertile soil is needed for a seed to grow, <b>ImmigrantHub</b> foster an environment that makes it possible for newcomers of all backgrounds to feel valued and to fully participate alongside their neighbors in the social, civic, and economic fabric of their adopted hometowns.</h2>

        <TagArray tags={languages}/>
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

          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            minWidth: '250px'
          }}>
            <input type="checkbox" name="user" value="" /><span style={{ margin: '0' }} className="signupInfo">I need help</span>
            <input type="checkbox" name="user" value="" /><span style={{ margin: '0' }} className="signupInfo">I want to help</span>
          </div>

          <RaisedButton className="signupButton">
            Signup for ImmigrantHub
          </RaisedButton>
          <span className="signupInfo signupInfoSmall">By clicking "Sign up for ImmigrantHub", you agree to our terms of service and privacy policy. We’ll occasionally send you account related emails.</span>
          <span className="signupInfo signupInfoSmall"><a href="/#/login">I already have an account!</a></span>
        </div>
      </Card>
    </div>
  )
};

export default Signin;

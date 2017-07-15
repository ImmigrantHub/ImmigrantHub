import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import TagArray from './TagArray.jsx';
import MenuBar from './MenuBar.jsx';

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

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password:'',
      wantHelp:false,
      needHelp:false
    }

    this.handleUserLogin = this.handleUserLogin.bind(this);
    this.handleUsernameUpdate = this.handleUsernameUpdate.bind(this);
    this.handleEmailUpdate = this.handleEmailUpdate.bind(this);
  }

  handleUserLogin(event) {
    event.preventDefault();
    console.log('here')
    let user = {
      username:this.state.username, 
      email:this.state.email,
    };

    fetch('/user', {
      method: 'POST',
      body: JSON.stringify(user),
    })
    .then(res => {
      this.state.wantHelp ? this.context.router.push('/user') : this.context.router.push('/organization'); 
    })
  }

  handleUsernameUpdate(e, i, v) {
    this.setState({username:v});
  }

  handleEmailUpdate(e, i, v) {
    this.setState({email:v});
  }


  render() {
    return (

      <div className="landingWrapper">
        <MenuBar />
        <div className="landingInfo">
          <h1 className="landingTitle">Welcome Home!</h1>
          <h2 className="landingSubtitle">Just as fertile soil is needed for a seed to grow, <b>ImmigrantHub</b> foster an environment that makes it possible for newcomers of all backgrounds to feel valued and to fully participate alongside their neighbors in the social, civic, and economic fabric of their adopted hometowns.</h2>

          <TagArray tags={languages}/>
        </div>
        <Card className="signupCard">
          <form onSubmit={this.handleUserLogin} className="signupWrapper">
            <span className="signupInfo">Username</span>
            <TextField className="signupInput" onChange={this.handleUsernameUpdate} />
            <span className="signupInfo">Email</span>
            <TextField className="signupInput" type="email" onChange={this.handleEmailUpdate} />
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

            <RaisedButton type="submit" className="signupButton" label="Signup for ImmigrantHub" />
          </form>
          <span className="signupInfo signupInfoSmall">By clicking "Sign up for ImmigrantHub", you agree to our terms of service and privacy policy. We’ll occasionally send you account related emails.</span>
          <span className="signupInfo signupInfoSmall"><a href="/#/login">I already have an account!</a></span>
        </Card>
      </div>
    )
  }
};

export default Signin;

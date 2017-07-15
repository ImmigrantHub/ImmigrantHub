import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

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
        <div className="landingInfo">
          <h1 className="landingTitle">Buily by Immigrants for Immigrants!</h1>
          <h2 className="landingSubtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do <b>eiusmod</b> uti <b>tempor incididunt</b> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</h2>
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
            <RaisedButton type="submit" className="signupButton" label="Signup for ImmigrantHub" />
          </form>
          <span className="signupInfo signupInfoSmall">By clicking "Sign up for GitHub", you agree to our <a>terms of service</a> and <a>privacy policy</a>. We’ll occasionally send you account related emails.</span>
          <span className="signupInfo signupInfoSmall"><a href="/#/login">I already have an account!</a></span>
        </Card>
      </div>
    )
  }
};

export default Signin;

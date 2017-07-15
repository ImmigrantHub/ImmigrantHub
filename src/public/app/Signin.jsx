import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import TagArray from './TagArray.jsx';
import { withRouter } from 'react-router'

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
    this.handleInputChange = this.handleInputChange.bind(this);
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
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then(res => {
      this.state.wantHelp ? this.props.history.push('/user') : this.props.history.push('/organization'); 
    })
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="landingWrapper">
        <div className="landingInfo">
          <h1 className="landingTitle">Built by Immigrants for Immigrants!</h1>
          <h2 className="landingSubtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do <b>eiusmod</b> uti <b>tempor incididunt</b> ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</h2>
        </div>
        <Card className="signupCard">
          <form onSubmit={this.handleUserLogin} className="signupWrapper">
            <span className="signupInfo">Username</span>
            <TextField name="username" className="signupInput" onChange={this.handleInputChange} />
            <span className="signupInfo">Email</span>
            <TextField name="email" className="signupInput" type="email" onChange={this.handleInputChange} />
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
        
          <div className="signupInfo signupInfoSmall"><a href="/#/login">I already have an account!</a></div>
        </Card>
      </div>
    )
  }
};

export default withRouter(Signin);

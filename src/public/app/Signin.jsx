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
      <div className='test'>
      <div className="landingWrapper">

        <div className="landingInfo">
          <h1 className="landingTitle">Welcome Home!</h1>
          <h2 className="landingSubtitle">Just as fertile soil is needed for a seed to grow, <b>ImmigrantHub</b> foster an environment that makes it possible for newcomers of all backgrounds to feel valued and to fully participate alongside their neighbors in the social, civic, and economic fabric of their adopted hometowns.</h2>
        </div>

        <Card className="signupCard">
          <form onSubmit={this.handleUserLogin} className="signupWrapper">
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: '275px',
                minWidth: '250px'
              }}>
              {/* <span className="signupInfo">Username</span> */}
              <TextField hintText="username" name="username" className="signupInput" onChange={this.handleInputChange} />
              {/* <span className="signupInfo">Email</span> */}
              <TextField hintText="email" name="email" className="signupInput" type="email" onChange={this.handleInputChange} />
              {/* <span className="signupInfo">Password</span> */}
              <TextField hintText="password" className="signupInput" type="password"/>
              <span className="signupInfo signupInfoSmall">Use at least one letter, one numeral, and seven characters.</span>
            </div>
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
    </div>
    )
  }
};

export default withRouter(Signin);

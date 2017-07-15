import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import { withRouter } from 'react-router'


const MenuBar = props => {

  const buttonStyle = {
      backgroundColor: 'transparent',
      color: 'white',
    };
  const barStyle = {
    alignItems: 'center',
    display:'flex',
  }


  const logout = props.location.pathname === '/' ? "Login" : "Logout";

  return (
    <AppBar
      className="menu"
      title="ImmigrantHub"
      showMenuIconButton={false}
      style={barStyle}
    >
      <FlatButton label="User" href="/#/user" style={buttonStyle} />
      <FlatButton label="Community" href="/#/community" style={buttonStyle} />
      <FlatButton label="Organization" href="/#/organization" style={buttonStyle} />
      <FlatButton secondary={true} label={logout} href='/#/' />

    </AppBar>
  )
}

export default withRouter(MenuBar);

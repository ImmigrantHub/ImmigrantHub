import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';

const MenuBar = props => {
  return (
    <AppBar 
      className="menu"
      title="ImmigrantHub"
      iconElementRight={<FlatButton secondary={true} label="Log Out" />}
    >

    </AppBar>
  )
}

export default MenuBar;
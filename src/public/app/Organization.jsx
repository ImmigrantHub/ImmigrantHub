import React from 'react';
<<<<<<< HEAD
import MenuBar from './MenuBar.jsx';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

=======
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
>>>>>>> Organization

const Organization = props => {

  const iconButtonElement = (
    <IconButton
      touch={true}
      tooltip="more"
      tooltipPosition="bottom-left"
    >
      <MoreVertIcon color={grey400} />
    </IconButton>
  );

  const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
      <MenuItem>Reply</MenuItem>
      <MenuItem>Forward</MenuItem>
      <MenuItem>Delete</MenuItem>
    </IconMenu>
  );

  return (
    <div className="Organization">
<<<<<<< HEAD

      <MenuBar />

      <div className="Organization__cards">
        <Card className="Organization__content1">
          <CardHeader
            title="Notifications"
          />
          <CardText>
              <List>
                <ListItem primaryText="Help!" />
                <Divider />
                <ListItem primaryText="Help!" />
                <Divider />
                <ListItem primaryText="Help!" />
                <Divider />
                <ListItem primaryText="Help!" />
              </List>
          </CardText>
        </Card>
        <Card className="Organization__content2">
           <CardHeader
             title="I AM AN IMMIGRANT"
             subtitle="New York"
             avatar="https://2t9qt14cl5rc3ei81o3goyix-wpengine.netdna-ssl.com/wp-content/themes/timber/dist/img/iaai-logo.svg"
           />
           <CardTitle title="Thanks for your support!" subtitle="Yeayuh!" />
           <CardText>
            <div className='Organization__messages'>
              <List>
                <Subheader>Today</Subheader>
                <ListItem
                  leftAvatar={<Avatar src="https://avatars7.githubusercontent.com/u/8907103?v=4&s=460" />}
                  rightIconButton={rightIconMenu}
                  primaryText="Brunch this weekend?"
                  secondaryText={
                    <p>
                      <span style={{color: darkBlack}}>Brendan Lim</span> --
                      I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                    </p>
                  }
                  secondaryTextLines={2}
                />
                <Divider inset={true} />
                <ListItem
                  leftAvatar={<Avatar src="https://avatars7.githubusercontent.com/u/8907103?v=4&s=460" />}
                  rightIconButton={rightIconMenu}
                  primaryText="Brunch this weekend?"
                  secondaryText={
                    <p>
                      <span style={{color: darkBlack}}>Brendan Lim</span> --
                      I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                    </p>
                  }
                  secondaryTextLines={2}
                />
                <Divider inset={true} />
                <ListItem
                  leftAvatar={<Avatar src="https://avatars7.githubusercontent.com/u/8907103?v=4&s=460" />}
                  rightIconButton={rightIconMenu}
                  primaryText="Brunch this weekend?"
                  secondaryText={
                    <p>
                      <span style={{color: darkBlack}}>Brendan Lim</span> --
                      I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                    </p>
                  }
                  secondaryTextLines={2}
                />
                <Divider inset={true} />
                <ListItem
                  leftAvatar={<Avatar src="https://avatars7.githubusercontent.com/u/8907103?v=4&s=460" />}
                  rightIconButton={rightIconMenu}
                  primaryText="Brunch this weekend?"
                  secondaryText={
                    <p>
                      <span style={{color: darkBlack}}>Brendan Lim</span> --
                      I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                    </p>
                  }
                  secondaryTextLines={2}
                />
                <Divider inset={true} />
                <ListItem
                  leftAvatar={<Avatar src="https://avatars7.githubusercontent.com/u/8907103?v=4&s=460" />}
                  rightIconButton={rightIconMenu}
                  primaryText="Brunch this weekend?"
                  secondaryText={
                    <p>
                      <span style={{color: darkBlack}}>Brendan Lim</span> --
                      I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                    </p>
                  }
                  secondaryTextLines={2}
                />
                <Divider inset={true} />
              </List>
            </div>
           </CardText>
        </Card>
        <Card className="Organization__content3">
          <CardHeader
            title="Communities"
          />
          <CardText>
              <List>
                <ListItem primaryText="Hello!" />
                <Divider />
                <ListItem primaryText="Wassup!" />
                <Divider />
                <ListItem primaryText="Hey!" />
                <Divider />
                <ListItem primaryText="Sup?" />
              </List>
          </CardText>
        </Card>
      </div>
=======
      <div className="Organization__title">Organization</div>
      <User />
>>>>>>> Organization
    </div>
  )
};

export default Organization;


class User extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  // handleExpand = () => {
  //   this.setState({expanded: true});
  // };
  //
  // handleReduce = () => {
  //   this.setState({expanded: false});
  // };

  render() {
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title="URL Avatar"
          subtitle="Subtitle"
          avatar="images/ok-128.jpg"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText>
          <Toggle
            toggled={this.state.expanded}
            onToggle={this.handleToggle}
            labelPosition="right"
            label="This toggle controls the expanded state of the component."
          />
        </CardText>
        <CardMedia
          expandable={true}
          overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
          <img src="images/nature-600-337.jpg" alt="" />
        </CardMedia>
        <CardTitle title="Card title" subtitle="Card subtitle" expandable={true} />
        <CardText expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <FlatButton label="Expand" onTouchTap={this.handleExpand} />
          <FlatButton label="Reduce" onTouchTap={this.handleReduce} />
        </CardActions>
      </Card>
    );
  }
}

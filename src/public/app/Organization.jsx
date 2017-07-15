import React from 'react';
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
  )
};

export default Organization;

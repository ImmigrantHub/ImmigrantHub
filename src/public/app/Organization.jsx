import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
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
import TextField from 'material-ui/TextField';

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

      <div className="Organization__cards">
        <Card className="Organization__content1">
          <div className='Organization__communitiesTitle'>
            <i className="material-icons">face </i>
            <span>Communities</span>
          </div>
          <CardText>
            <TextField
              hintText="Search"
              style={{ width: 206 , marginBottom: 20 }}
            />
            <List>
              <ListItem
                primaryText="New York"
                rightAvatar={<Avatar src="https://media.timeout.com/images/101705313/image.jpg" />}
                style={{ marginBottom: 10, marginTop: -10  }}
              />
              <Divider />
              <ListItem
                primaryText="Chicago"
                rightAvatar={<Avatar src="http://www.aviewoncities.com/img/chicago/kveus3940s.jpg" />}
                style={{ marginBottom: 10, marginTop: 10 }}
              />
              <Divider />
              <ListItem
                primaryText="Detroit"
                rightAvatar={<Avatar src="http://agbuyp.org/wp-content/uploads/2016/08/detroit1.jpg" />}
                style={{ marginBottom: 10, marginTop: 10 }}
              />
              <Divider />
              <ListItem
                primaryText="Seattle"
                rightAvatar={<Avatar src="http://www.sustainableseattle.org/wp-content/uploads/2015/08/SeattleMunicipleArchive-e1488676312333.jpg" />}
                style={{ marginBottom: 10, marginTop: 10 }}
              />
            </List>
          </CardText>
        </Card>
        <Card className="Organization__content2">
           <CardHeader
             title="I AM AN IMMIGRANT"
             subtitle="New York"
             avatar="https://2t9qt14cl5rc3ei81o3goyix-wpengine.netdna-ssl.com/wp-content/themes/timber/dist/img/iaai-logo.svg"
           />
           <CardText>
            <div className='Organization__messages'>
              <List>
                <span style={{ fontSize: 20 }}>Communications</span>
                <Divider style={{ marginTop: 10 }}/>
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
          <div className='Organization__radarTitle'>
            <i className="material-icons">track_changes</i>
            <span>Radar</span>
          </div>
          <div className='Organization__radar'>
            <CardText>
              <List>
                <Subheader>Today</Subheader>
                <ListItem insetChildren={true} primaryText="Hello!" />
                <ListItem insetChildren={true} primaryText="Wassup!" />
                <ListItem insetChildren={true} primaryText="Hey!" />
                <Divider />
                <Subheader>Today</Subheader>
                <ListItem insetChildren={true} primaryText="Hello!" />
                <ListItem insetChildren={true} primaryText="Wassup!" />
                <ListItem insetChildren={true} primaryText="Hey!" />
                <Divider />
                <Subheader>Today</Subheader>
                <ListItem insetChildren={true} primaryText="Hello!" />
                <ListItem insetChildren={true} primaryText="Wassup!" />
                <ListItem insetChildren={true} primaryText="Hey!" />
                <Divider />
              </List>
            </CardText>
          </div>
        </Card>
      </div>
    </div>
  )
};

export default Organization;

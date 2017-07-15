import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';

const User = props => {
  return (
    <div className="User">
      <Card className="User__content1">
        <CardHeader
          title="Communities"
        />
        <CardText>
            <List>
              <ListItem primaryText="New York" />
              <Divider />
              <ListItem primaryText="Boston" />
              <Divider />
              <ListItem primaryText="New Jersey" />
              <Divider />
              <ListItem primaryText="Maine" />
            </List>
        </CardText>
      </Card>
      <Card className="User__content2">
         <CardHeader
           title="Kendrick"
           subtitle="New York"
           avatar="https://avatars7.githubusercontent.com/u/8907103?v=4&s=460"
         />
         <CardTitle title="Card title" subtitle="Card subtitle" />
         <CardText>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
           Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
           Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
         </CardText>
      </Card>
      <Card className="User__content3">
        <CardHeader
          title="Messages"
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

export default User;

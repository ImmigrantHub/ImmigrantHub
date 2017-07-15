import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';

const Organization = props => {
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
         <CardMedia
           overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
         >
           <img src="https://www.statuecruises.com/images/HSC-HomepageImage.jpg" alt="" />
         </CardMedia>
         <CardTitle title="Card title" subtitle="Card subtitle" />
         <CardText>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
           Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
           Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
         </CardText>
      </Card>
      <Card className="Organization__content3">
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

export default Organization;

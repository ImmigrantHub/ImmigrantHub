import React from 'react';
import MenuBar from './MenuBar.jsx';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Chip from 'material-ui/Chip';

const User = props => {
  return (
    <div className="User">

      <MenuBar />

      <div className="User__cards">
        <Card className="User__content1">
          <CardHeader
            title="Communities"
          />
          <CardText>
              <List>
                <ListItem primaryText="Mexico City" />
                <Divider />
                <ListItem primaryText="Mexico" />
                <Divider />
                <ListItem primaryText="Latin America" />
              </List>
          </CardText>
        </Card>
        <Card className="User__content2">
           <CardHeader
             title="Kendrick"
             subtitle="Mexico City"
             avatar="https://avatars7.githubusercontent.com/u/8907103?v=4&s=460"
           />
           <CardTitle title="Story" subtitle="Track your progress" />
          <Paper zDepth={2} rounded={false} className="timeline" >
              <ul className="timeline-list">
                <li className="timeline-node">Step 1</li>
                <li className="timeline-node">Step 2</li>
                <li className="timeline-node">Step 3</li>
                <li className="active">Step 4</li>
                <li className="timeline-node">Step 5</li>
              </ul>
          </Paper>
           <CardText>
             <h2>Step 5</h2>
             <div className="chip-wrapper">
              <Chip className="chip" key={0}> Legal </Chip>
              <Chip className="chip" key={1}> Latin America </Chip>
              <Chip className="chip" key={2}>DOCA</Chip>
             </div>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
             Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
             Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
           </CardText>
           <Divider/>
           <CardActions>
             <FlatButton label="Add New Step +" />
           </CardActions>


        </Card>
        <Card className="User__content3">
          <CardHeader
            title="Message Inbox"
          />
          <CardText>
              <List>
                <ListItem primaryText="We can help!" />
                <Divider />
                <ListItem primaryText="Call us!" />
                <Divider />
                <ListItem primaryText="Hi Kendrick" />
              </List>
          </CardText>
        </Card>
      </div>
    </div>
  )
};

export default User;

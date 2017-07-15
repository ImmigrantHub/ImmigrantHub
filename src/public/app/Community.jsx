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
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {GridList, GridTile} from 'material-ui/GridList';
import BarChart from 'react-bar-chart';
import FlatButton from 'material-ui/FlatButton';


const margin = {top: 20, right: 20, bottom: 20, left: 60};
const data = [
  {text: 'Bangladesh', value: 179434},
  {text: 'DR', value: 198993},
  {text: 'China', value: 221665},
  {text: 'Vietnam', value: 265496},
  {text: 'India', value: 299121},
  {text: 'Philippines', value: 362233},
  {text: 'Mexico', value: 1308000},
];


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    flex: 1,
    width: 1041,
    // height: 450,
    // overflowY: 'auto',
  },
};

const tilesData = require('./../samplestoriesdata.js');

const Community = props => {

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
    <div className="Community">

    <div className="bg"></div>

      <div className="Community__cards" style={{justifyContent: 'spaceAround'}}>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', marginTop: 0}}>
          <Card className="Community__content1">
            <CardTitle title="Your Details" style={{fontWeight: 'bold', paddingBottom: 0, marginBottom: 0, alignSelf: 'center'}} />
            <CardText style={{paddingTop: 0, marginTop: -60, alignSelf: 'center'}}>
                <List  style={{display: 'flex', flexDirection: 'rowReverse', justifyContent: 'center', paddingLeft: 200, alignItems: 'center'}}>
                  <Divider />
                  <ListItem style={{fontWeight: 'bold'}} primaryText="Your Step:" secondaryText="Visa Application"/>
                  <Divider />
                  <ListItem style={{fontWeight: 'bold'}} primaryText="Time Waiting:" secondaryText="10 Months"/>
                </List>
            </CardText>
          </Card>
          <Card className="Community__content3">
            <CardTitle title="The Community" style={{fontWeight: 'bold', paddingBottom: 0, marginBottom: 0, alignSelf: 'center'}} />
            <CardText style={{paddingTop: 0, marginTop: -65, alignSelf: 'center'}}>
              <List  style={{display: 'flex', flexDirection: 'rowReverse', justifyContent: 'center', paddingLeft: 200, alignItems: 'center'}}>
                  <ListItem style={{fontWeight: 'bold'}} primaryText="At The Same Step As You:" secondaryText="10,000 people" />
                  <Divider />
                  <ListItem style={{fontWeight: 'bold'}} primaryText="Average Wait Time" secondaryText="5 Months" />
                </List>
            </CardText>
          </Card>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', marginBottom: 10, flexGrow: 1}}>
          <div style={{flex: 1}}>
            <BarChart ylabel='Quantity'
                    width={565}
                    height={220}
                    margin={margin}
                    data={data}/>
          </div>
          <div style={{display: 'flex',flexDirection: 'column', marginTop: 7}}>
          <div style={{flex: 1}}>
            <Card>
              <CardTitle title="Legal Resources" style={{paddingBottom: 0, marginBottom: -60, alignSelf: 'center'}} />
              <List style={{display: 'flex', flexDirection: 'row', alignItems: 'flexEnd', paddingLeft: 200, marginTop: -60}}>
                  <ListItem primaryText="Lawyers for Children LLC" secondaryText="(908) 555-4538"/>
                  <Divider />
                  <ListItem primaryText="NY Immigration Attorney" secondaryText="(917) 555-0342" />
                </List>
            </Card>
          </div>
          <div style={{flex: 1}}>
            <Card>
              <CardTitle title="Health Resources" style={{paddingBottom: 0, marginBottom: -60, alignSelf: 'center'}} />
              <List style={{display: 'flex', flexDirection: 'row', alignItems: 'flexEnd', paddingLeft: 200, marginTop: -60}}>
                  <ListItem primaryText="South Jersey Health" secondaryText="(716) 555-1290"/>
                  <Divider />
                  <ListItem primaryText="Executive Health" secondaryText="(917) 555-3924" />
                </List>
            </Card>
          </div>
        </div>
      </div>
        <Card className="Community__content2" style={{marginBottom: 20, marginTop: -10}}>
           <CardTitle title="Community Stories" style={{fontWeight: 'bold', marginBottom: -20}}/>
        </Card>
          <div style={styles.root}>
            <GridList
              padding={20}
              cols={3}
              cellHeight={'auto'}
            >
            {tilesData.map((tile) => (
              <GridTile>
                <Card>
                  <CardHeader
                    title={tile.title} 
                    subtitle={tile.author}
                    />
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                  </CardText>
                  <CardActions>
                    <FlatButton primary={true} label='Contact User'/>
                    <FlatButton primary={true} label='Like'/>
                  </CardActions>
                </Card>
              </GridTile>
            ))}
          </GridList>
        </div>
      </div>
    </div>
  )
};

export default Community;

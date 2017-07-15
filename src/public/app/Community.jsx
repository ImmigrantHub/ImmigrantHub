import React from 'react';
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
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {GridList, GridTile} from 'material-ui/GridList';

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

const tilesData = [
  {
    img: 'images/grid-list/00-52-29-429_640.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/burger-827309_640.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'images/grid-list/camera-813814_640.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'images/grid-list/morning-819362_640.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'images/grid-list/hats-829509_640.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'images/grid-list/honey-823614_640.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'images/grid-list/vegetables-790022_640.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/water-plant-821293_640.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];


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

      <MenuBar style={{flex: 1, alignSelf: 'stretch'}} />

      <div className="Community__cards" style={{justifyContent: 'spaceAround'}}>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
          <Card className="Community__content1">
            <CardTitle title="Your Details" style={{paddingBottom: 0, marginBottom: 0}} />
            <CardText style={{paddingTop: 0, marginTop: -60}}>
                <List  style={{display: 'flex', flexDirection: 'rowReverse', justifyContent: 'center', paddingLeft: 200}}>
                  <Divider />
                  <ListItem style={{fontWeight: 'bold'}} primaryText="Your Step:" secondaryText="Visa Application"/>
                  <Divider />
                  <ListItem style={{fontWeight: 'bold'}} primaryText="Time Waiting:" secondaryText="10 Months"/>
                </List>
            </CardText>
          </Card>
          <Card className="Community__content3">
            <CardTitle title="The Community" />
            <CardText style={{paddingTop: 0, marginTop: -80}}>
              <List  style={{display: 'flex', flexDirection: 'rowReverse', justifyContent: 'center', paddingLeft: 200}}>
                  <ListItem style={{fontWeight: 'bold'}} primaryText="At The Same Step As You:" secondaryText="10,000 people" />
                  <Divider />
                  <ListItem style={{fontWeight: 'bold'}} primaryText="Average Wait Time" secondaryText="5 Months" />
                </List>
            </CardText>
          </Card>
        </div>
        <Card className="Community__content2">
           <CardTitle title="Community Stories" />
             <div style={styles.root}>
               <GridList
                 cellHeight={180}
                 style={styles.gridList}
               >
               {tilesData.map((tile) => (
                 <GridTile
                   key={tile.img}
                   title={tile.title}
                   subtitle={<span>by <b>{tile.author}</b></span>}
                   actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                 >
                   <img src={tile.img} />
                 </GridTile>
               ))}
              </GridList>
            </div>
        </Card>
      </div>
    </div>
  )
};

export default Community;

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
// var Chart = require('react-d3-core').Chart;
// var LineChart = require('react-d3-basic').LineChart;


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

      <div className="Community__cards" style={{justifyContent: 'spaceAround'}}>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', marginTop: 40}}>
          <Card className="Community__content1">
            <CardTitle title="Your Details" style={{paddingBottom: 0, marginBottom: 0, alignSelf: 'center'}} />
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
            <CardTitle title="The Community" style={{paddingBottom: 0, marginBottom: 0, alignSelf: 'center'}} />
            <CardText style={{paddingTop: 0, marginTop: -65, alignSelf: 'center'}}>
              <List  style={{display: 'flex', flexDirection: 'rowReverse', justifyContent: 'center', paddingLeft: 200, alignItems: 'center'}}>
                  <ListItem style={{fontWeight: 'bold'}} primaryText="At The Same Step As You:" secondaryText="10,000 people" />
                  <Divider />
                  <ListItem style={{fontWeight: 'bold'}} primaryText="Average Wait Time" secondaryText="5 Months" />
                </List>
            </CardText>
          </Card>
        </div>
        {/* <div> */}
          <Card>
            <Chart
              title={title}
              width={width}
              height={height}
              margins= {margins}
            >
              <LineChart
                showXGrid= {false}
                showYGrid= {false}
                margins= {margins}
                title={title}
                data={chartData}
                width={width}
                height={height}
                chartSeries={chartSeries}
                x={x}
              />
            </Chart>
          </Card>
        {/* </div> */}
        <Card className="Community__content2">
           <CardTitle title="Community Stories" style={{fontWeight: 'bold'}}/>
             <div style={styles.root}>
               <GridList
                 cellHeight={180}
                 style={styles.gridList}
               >
               {tilesData.map((tile) => (
                 <GridTile
                   key={tile.img}
                   title={tile.title}
                   subtitle={<span><b>{tile.author}</b></span>}
                   actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                 >
                   <p style={{marginLeft: 10, marginBottom: 10}}>          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                             Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                             Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                   </p>
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

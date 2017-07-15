import React from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Chip from 'material-ui/Chip';
import TagArray from './TagArray.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import Post from './Post.jsx';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

class User extends React.Component {
  constructor() {
    super();

    this.state = {
      steps: [
        {
          title: 'Step 1',
          tags: ['HB1, Visa'],
          content: 'Waryfish flathead catfish, Atlantic silverside, warmouth Sacramento blackfish coley; yellowfin cutthroat trout yellowfin cutthroat trout. Rohu Siamese fighting fish vendace: Cherubfish peladillo, wahoo ladyfish betta daggertooth pike conger squeaker whiff, white croaker. Denticle herring freshwater eel, louvar Japanese eel southern sandfish sweeper dottyback coffinfish. Eel-goby sand lance slickhead'
        },
        {
          title: 'Step 2',
          tags: ['Greencard, Indian, Software Engineer'],
          content: '<div>Tulip glass Saccharification, Yeast Bottom-fermenting Yeast krug. Grainy Conditioning Tank Grainy Ale Crystal malt Balthazar. Bright beer Autolysis Centrifugation Dextrin Estery. Trappist Lagering Pilsner, Steam Beer Microbrewery Carboy! Cask Conditioned Ale Bottom-fermenting Yeast Sweet Decoction Bunghole Pub glass Anaerobic Brewhouse!</div>'
        },
        {
          title: 'Step 3',
          tags: ['Marriage, Naturalization'],
          content: 'Johnny walker red galliano. The blenheim pisco sour speyburn nog-a-sake–tormore, polish martini stinger. Lochnagar remy martin lime rickey bull shot salty dog heart of fire chupacabra, brandy alexander old grand dad. Craigellachie, “singapore sling jack daniel’s tom and jerry batida mickey slim courvoisier blue hawaii; montgomery man o’war royal arrival colombia,” one-balled dictator'
        },
      ],
      openStep: false,
    };

    this.state.currentStep = this.state.steps[0];

    this.handleStepClick = this.handleStepClick.bind(this);
    this.handleStepOpen = this.handleStepOpen.bind(this);
    this.handleStepClose = this.handleStepClose.bind(this);
    this.handleStepSubmit = this.handleStepSubmit.bind(this);
  }

  // tags
  handleStepOpen () {
    this.setState({openStep: true});
  };

  handleStepClose() {
    this.setState({openStep: false});
  };

  handleStepSubmit() {
    // const $new = document.getElementById('new');
    // const new = $new.value;
    // const olds = this.state.tags;
    //
    // olds.push(new);

    const $newTitle = document.getElementById('postTitle');
    const $newTags = document.getElementById('postTags');
    const $newContent = document.getElementById('postTextarea');

    const newTitle = $newTitle.innerHTML;
    const newTags = $newTags.innerHTML;
    const newContent = `<div>${$newContent.innerHTML}</div>`;
    const steps = this.state.steps;
    steps.push({
      title: newTitle,
      tags: JSON.parse(newTags),
      content: newContent
    })

    this.setState({ openStep: false, steps });
  }

  handleStepClick(s) {
    //console.log(s)

    // $content = document.getElementById('content');

    // $content.innerHTML = s.content;

    this.setState({ currentStep: s }, () => {
      this.forceUpdate();
    });
  }

  render() {

    const actionsStep = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleStepClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleStepSubmit}
      />,
    ];

    return (


      <div className="User">

      <div className="bg"></div>

        <div className="User__cards">
          <Card className="User__content1">
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
          <Card className="User__content2">
             <CardHeader
               title="Hi Kendrick!"
               subtitle="Mexico City"
               avatar="https://avatars7.githubusercontent.com/u/8907103?v=4&s=460"
             />
             {/* <CardTitle title="Story" subtitle="Track your progress" /> */}
             <div className='User__content2Story'>
               <span style={{fontSize: 30}}>Story</span>
               <span style={{fontSize: 15}}>Track your progress</span>
             </div>
            <Paper zDepth={2} rounded={false} className="timeline" >
                <ul className="timeline-list">
                  {/*<li className="timeline-node">Step 1</li>
                  <li className="timeline-node">Step 2</li>
                  <li className="timeline-node">Step 3</li>
                  <li className="active">Step 4</li>
                  <li className="timeline-node">Step 5</li>*/}
                  {
                    this.state.steps.map(s => (
                      <li
                        className={this.state.currentStep.title === s.title ? "active" : "timeline-node"}
                        onClick={() => {
                          const currentStep = s;
                          this.handleStepClick(currentStep);
                        }}
                      >
                        {s.title}
                      </li>
                    ))
                  }
                </ul>
            </Paper>
             <CardText>
               <h2>{this.state.currentStep.title}</h2>
               <div className="chip-wrapper">
                 {this.state.currentStep.tags.map((tag, i)  => {
                  return (<TagArray
                    tags={tag}
                    key={i}
                  />)
                 })}
               </div>

               <div dangerouslySetInnerHTML={{ __html: this.state.currentStep.content}} />

             </CardText>
             <Divider/>
             <CardActions>
             <div>
               <RaisedButton label="Add a new Step" onClick={this.handleStepOpen} />
               <Dialog
                 title="Add a new step"
                 modal={false}
                 actions={actionsStep}
                 open={this.state.openStep}
                 onRequestClose={this.handleStepDialogClose}
               >
                  <Post />
               </Dialog>
             </div>
             </CardActions>


          </Card>
          <Card className="User__content3">
            <div className='Organization__communitiesTitle'>
              <i className="material-icons">markunread_mailbox</i>
              <span>Inbox</span>
            </div>
            <CardText>
                <List>
                  <ListItem
                    primaryText="We can help!.."
                    rightIcon={<CommunicationChatBubble />}
                    style={{ marginBottom: 10, marginTop: 0  }}
                  />
                  <Divider />
                  <ListItem
                    primaryText="Call us!.."
                    rightIcon={<CommunicationChatBubble />}
                    style={{ marginBottom: 10, marginTop: 10  }}
                  />
                  <Divider />
                  <ListItem
                    primaryText="Hi Kendrick.."
                    rightIcon={<CommunicationChatBubble />}
                    style={{ marginBottom: 10, marginTop: 10  }}
                  />
                  <Divider />
                  <ListItem
                    primaryText="Hello.."
                    rightIcon={<CommunicationChatBubble />}
                    style={{ marginBottom: 10, marginTop: 10  }}
                  />
                  <Divider />
                  <ListItem
                    primaryText="Are you free.."
                    rightIcon={<CommunicationChatBubble />}
                    style={{ marginBottom: 10, marginTop: 10  }}
                  />
                  <Divider />
                  <ListItem
                    primaryText="Hi.."
                    rightIcon={<CommunicationChatBubble />}
                    style={{ marginBottom: 10, marginTop: 10  }}
                  />
                  <Divider />
                  <ListItem
                    primaryText="We'd love to chat.."
                    rightIcon={<CommunicationChatBubble />}
                    style={{ marginBottom: 10, marginTop: 10  }}
                  />
                  <Divider />
                  <ListItem
                    primaryText="How can we help? .."
                    rightIcon={<CommunicationChatBubble />}
                    style={{ marginBottom: 10, marginTop: 10  }}
                  />
                </List>
            </CardText>
          </Card>
        </div>
      </div>
    )
  }
};

export default User;

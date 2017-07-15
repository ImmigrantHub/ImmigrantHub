import React from 'react';
import Card from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import TagArray from './TagArray.jsx';

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openTagDialog: false,
      openImageDialog: false,
      // initial examples
      tags: ['HB1', 'Greencard', 'India'],
    };

    // tags
    this.handleTagDialogOpen = this.handleTagDialogOpen.bind(this);
    this.handleTagDialogClose = this.handleTagDialogClose.bind(this);
    this.handleTagDialogSubmit = this.handleTagDialogSubmit.bind(this);

    // photos
    this.handleImageDialogOpen = this.handleImageDialogOpen.bind(this);
    this.handleImageDialogClose = this.handleImageDialogClose.bind(this);
    this.handleImageDialogSubmit = this.handleImageDialogSubmit.bind(this);
  }

  // tags
  handleTagDialogOpen () {
    this.setState({openTagDialog: true});
  };

  handleTagDialogClose() {
    this.setState({openTagDialog: false});
  };

  handleTagDialogSubmit() {
    const $newTag = document.getElementById('newTag');
    const newTag = $newTag.value;
    const oldTags = this.state.tags;

    oldTags.push(newTag);

    this.setState({ openTagDialog: false, tags:  oldTags});
  }

  // photos
  handleImageDialogOpen () {
    this.setState({openImageDialog: true});
  };

  handleImageDialogClose() {
    this.setState({openImageDialog: false});
  };

  handleImageDialogSubmit() {
    const $textarea = document.getElementById('postTextarea');
    const $newImage = document.getElementById('newImage');
    const newImage = $newImage.value;
    const oldContent = $textarea.innerHTML;

    $textarea.innerHTML = `${oldContent} \n<img src="${newImage}"/>`;

    this.setState({ openImageDialog: false });
  }

  render() {
    const actionsTag = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleTagDialogClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleTagDialogSubmit}
      />,
    ];

    const actionsImage = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleImageDialogClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleImageDialogSubmit}
      />,
    ];

    return (
      <div className="postWrapper">
        <Card className="postCard">
          <div className="postContent">
            <span className="postTitle">Your post</span>
            <TagArray
              tags={this.state.tags}
            />
            <div
              id="postTextarea"
              contentEditable="true"
            >
              Your story begins here...
            </div>

            <div className="postButtons">

              <div>
                <RaisedButton label="Photos" onClick={this.handleImageDialogOpen} />
                <Dialog
                  title="Paste the URL of the photo you want to add"
                  modal={false}
                  actions={actionsImage}
                  open={this.state.openImageDialog}
                  onRequestClose={this.handleImageDialogClose}
                >
                  <span>New photo</span>
                  <TextField
                    id="newImage"
                  />
                </Dialog>
              </div>

              <div>
                <RaisedButton label="Tags" onClick={this.handleTagDialogOpen} />
                <Dialog
                  title="Add a new tag to your post"
                  modal={false}
                  actions={actionsTag}
                  open={this.state.openTagDialog}
                  onRequestClose={this.handleTagDialogClose}
                >
                  <span>New Tag</span>
                  <TextField id="newTag"/>
                </Dialog>
              </div>

              <RaisedButton>Post</RaisedButton>
            </div>
          </div>
        </Card>
      </div>
    )
  }
};

export default Post;

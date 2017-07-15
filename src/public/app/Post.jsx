import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Post = props => {
  return (
    <div className="postWrapper">
      <Card className="postCard">
        <div className="postContent">
          <span className="postTitle">Your post</span>
          <textarea className="postTextarea"></textarea>
          <div className="postButtons">
            <RaisedButton>Photo</RaisedButton>
            <RaisedButton>Tags</RaisedButton>
            <RaisedButton>Post</RaisedButton>
          </div>
        </div>
      </Card>
    </div>
  )
};

export default Post;

// src/components/Post.js
import React from 'react';
import { ListItem, ListItemText, Paper } from '@mui/material';

const Post = ({ post }) => {
  return (
    <Paper style={{ marginBottom: '1em' }}>
      <ListItem>
        <ListItemText primary={post.title} secondary={post.body} />
      </ListItem>
    </Paper>
  );
};

export default Post;

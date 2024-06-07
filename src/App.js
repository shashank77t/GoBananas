// src/App.js
import React from 'react';
import PostList from './components/PostList';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const App = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">GoBananas Posts</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <PostList />
      </Container>
    </div>
  );
};

export default App;

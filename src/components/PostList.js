// src/components/PostList.js
import React, { useState, useEffect } from 'react';
import { fetchPosts } from '../services/api';
import Post from './Post';
import { Container, TextField, List } from '@mui/material';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };
    getPosts();
  },[]);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <TextField
        label="Search Posts"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <List>
        {filteredPosts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </List>
    </Container>
  );
};

export default PostList;

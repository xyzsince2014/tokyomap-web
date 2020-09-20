import socketIOClient from 'socket.io-client';

import {Post} from './models';

// const socket = socketIOClient('http://localhost:4000');

export const getPostsFactory = () => {
  const getPosts = async () => {
    // socket.emit('init', () => {});
    // socket.on('fetchedAllPosts', (postsFetched: Post[] | []) => postsFetched);
  };

  return getPosts;
};

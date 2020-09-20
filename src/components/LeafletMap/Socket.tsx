import * as React from 'react';
import socketIOClient from 'socket.io-client';

import {Post} from '../../services/posts/models';

const Socket: React.FC<{}> = () => {
  const [socket, setSocket] = React.useState(socketIOClient('http://localhost:4000'));
  const [posts, setPosts] = React.useState<Post[] | []>([]); // todo: use redux

  socket.emit('init', () => {});

  socket.on('fetchedAllPosts', (postsFetched: Post[] | []) => {
    setPosts(postsFetched);

    if (postsFetched === []) {
      return;
    }

    displayPosts(posts);
  });

  const displayPosts = (postsDisplayed: Post[]) => {
    const ul = document.getElementById('post_list')!;
    ul.style.padding = '0';
    Array.from(ul.childNodes).map(c => c.remove());

    postsDisplayed.map((post: Post) => {
      const li = document.createElement('li');
      const span = document.createElement('span');
      span.innerHTML = post.user;
      li.appendChild(span);
      li.innerHTML += ` : ${post.message} (${post.postedAt
        .replace('T', ' ')
        .replace('.000Z', '')}, ${post.lat}"N ${post.lng}"E)`;
      ul.appendChild(li);

      return false;
    });
  };

  const handleSubmit = () => {
    const message: HTMLInputElement = document.getElementById('message') as HTMLInputElement;
    const user: HTMLInputElement = document.getElementById('user') as HTMLInputElement;
    const lat: HTMLInputElement = document.getElementById('lat') as HTMLInputElement;
    const lng: HTMLInputElement = document.getElementById('lng') as HTMLInputElement;

    socket.emit('posted', {
      message: message.value,
      user: user.value,
      lat: lat.value,
      lng: lng.value,
    });

    message.value = '';
    user.value = '';
    return false;
  };

  socket.on('fetchedPost', (postFetched: Post) => {
    setPosts([...posts, postFetched]); // todo: use redux, and add postFetched to posts in the store
    displayPost(postFetched);
  });

  const displayPost = (postDisplayed: Post) => {
    const ul = document.getElementById('post_list')!;
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerHTML = postDisplayed.user;
    li.appendChild(span);
    li.innerHTML += ` : ${postDisplayed.message} (${postDisplayed.postedAt
      .replace('T', ' ')
      .replace('.000Z', '')}, ${postDisplayed.lat}"N ${postDisplayed.lng}"E)`;
    ul.appendChild(li);
    return false;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id="message" type="text" placeholder="message" />
        <input id="user" type="text" placeholder="name" />
        <input id="lat" type="text" defaultValue="35.7263716" />
        <input id="lng" type="text" defaultValue="139.7029377" />
        <input type="submit" className="button" value="Post" />
      </form>
      <ul id="post_list" />
    </div>
  );
};

export default Socket;

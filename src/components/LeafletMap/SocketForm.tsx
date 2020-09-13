import * as React from 'react';
import socketIOClient from 'socket.io-client';

const SocketForm: React.FC<{}> = () => {
  const [socket, setSocket] = React.useState(socketIOClient('http://localhost:4000'));

  socket.on('fetched', (posts: Array<any>) => {
    displayPosts(posts);
  });

  const handleSubmit = () => {
    const postText: HTMLInputElement = document.getElementById('post_text') as HTMLInputElement;
    const postName: HTMLInputElement = document.getElementById('post_name') as HTMLInputElement;
    const lat: HTMLInputElement = document.getElementById('lat') as HTMLInputElement;
    const lng: HTMLInputElement = document.getElementById('lng') as HTMLInputElement;

    socket.emit('posted', {
      postText: postText.value,
      postName: postName.value,
      lat: lat.value,
      lng: lng.value,
    });

    postText.value = '';
    postName.value = '';
    return false;
  };

  const displayPosts = (posts: Array<any>) => {
    const ul = document.getElementById('post_list')!;
    ul.style.padding = '0';
    Array.from(ul.childNodes).map(c => c.remove());

    posts.map((post: any) => {
      const li = document.createElement('li');
      const span = document.createElement('span');
      span.innerHTML = post.post_name;
      li.appendChild(span);
      li.innerHTML += ` : ${post.post_text} (${post.posted_at
        .replace('T', ' ')
        .replace('.000Z', '')}, ${post.lat}"N ${post.lng}"E)`;
      ul.appendChild(li);

      return false;
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id="post_text" type="text" placeholder="text" />
        <input id="post_name" type="text" placeholder="name" />
        <input id="lat" type="hidden" value="35.7263716" />
        <input id="lng" type="hidden" value="139.7029377" />
        <input type="submit" className="button" value="Post" />
      </form>
      <ul id="post_list" />
    </div>
  );
};

export default SocketForm;

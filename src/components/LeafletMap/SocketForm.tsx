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

    socket.emit('post', {
      postText: postText.value,
      postName: postName.value,
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
      li.innerHTML += ` : ${post.post_text} (posted at ${post.posted_at
        .replace('T', ' ')
        .replace('.000Z', '')})`;
      ul.appendChild(li);

      return false;
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id="post_text" type="text" />
        <input id="post_name" type="text" />
        <input type="submit" className="button" value="Send" />
      </form>
      <ul id="post_list" />
    </div>
  );
};

export default SocketForm;

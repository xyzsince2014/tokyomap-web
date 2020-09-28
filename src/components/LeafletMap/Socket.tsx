import * as React from 'react';

import {Tweet} from '../../services/socket/models';

export interface SocketProps {
  tweets?: Tweet[];
  syncTweet?: (tweet: Tweet) => void;
}

const Socket: React.FC<SocketProps> = ({tweets = [], syncTweet = () => {}}) => {
  const handleSubmit = () => {
    const message: HTMLInputElement = document.getElementById('message') as HTMLInputElement;
    const userName: HTMLInputElement = document.getElementById('user') as HTMLInputElement;
    const lat: HTMLInputElement = document.getElementById('lat') as HTMLInputElement;
    const lng: HTMLInputElement = document.getElementById('lng') as HTMLInputElement;

    syncTweet({
      userName: userName.value,
      message: message.value,
      postedAt: '', // todo: to be deleted
      lat: lat.value,
      lng: lng.value,
    });

    message.value = '';
    userName.value = '';
    return false;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id="message" type="text" placeholder="message" />
        <input id="user" type="text" placeholder="userName" />
        <input id="lat" type="text" defaultValue="35.7263716" />
        <input id="lng" type="text" defaultValue="139.7029377" />
        <input type="submit" className="button" value="Post" />
      </form>
      {tweets ? (
        <ul>
          {tweets.map(t => (
            <li key={t.userId}>
              <span>{t.userName}</span> : {t.message} (
              {t.postedAt.replace('T', ' ').replace('.000Z', '')}, {t.lat}&quot;N {t.lng}&quot;E)
            </li>
          ))}
        </ul>
      ) : (
        'No tweets'
      )}
    </div>
  );
};

export default Socket;

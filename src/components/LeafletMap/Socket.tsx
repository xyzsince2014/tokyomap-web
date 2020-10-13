import * as React from 'react';

import {Tweet} from '../../services/socket/models';

export interface SocketProps {
  tweets?: Tweet[];
  postTweet?: (tweet: Tweet) => void;
}

const Socket: React.FC<SocketProps> = ({tweets = [], postTweet = () => {}}) => {
  const handleSubmit = () => {
    const message: HTMLInputElement = document.getElementById('message') as HTMLInputElement;
    const lat: HTMLInputElement = document.getElementById('lat') as HTMLInputElement;
    const lng: HTMLInputElement = document.getElementById('lng') as HTMLInputElement;

    postTweet({
      tweetId: '',
      userName: '', // to be deleted
      message: message.value,
      postedAt: '', // to be deleted
      disappearAt: '', // to be deleted
      lat: Number(lat.value),
      lng: Number(lng.value),
    });

    message.value = '';
    return false;
  };

  return (
    <div>
      <form>
        <ul>
          <li>
            <input id="message" type="text" placeholder="message" />
          </li>
          <li>
            <input id="lat" type="text" defaultValue="35.7263716" />
          </li>
          <li>
            <input id="lng" type="text" defaultValue="139.7029377" />
          </li>
          <li>
            <button type="button" className="button" onClick={handleSubmit}>
              Post
            </button>
          </li>
        </ul>
      </form>
      {tweets ? (
        <ul>
          {tweets.map(t => (
            <li key={t.tweetId}>
              <span>{t.userName}</span> : {t.message} (
              {t.postedAt.replace('T', ' ').replace('.000Z', '')})
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
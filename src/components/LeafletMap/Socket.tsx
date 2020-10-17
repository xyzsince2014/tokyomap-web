import * as React from 'react';
import L from 'leaflet';

import {Tweet} from '../../services/socket/models';

export interface SocketProps {
  tweets?: Tweet[];
  postTweet?: (message: string, geolocation: L.LatLngTuple) => void;
  geolocation: L.LatLngTuple;
}

const Socket: React.FC<SocketProps> = ({tweets = [], postTweet = () => {}, geolocation}) => {
  const handleSubmit = () => {
    const message: HTMLInputElement = document.getElementById('message') as HTMLInputElement;
    postTweet(message.value, geolocation);
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

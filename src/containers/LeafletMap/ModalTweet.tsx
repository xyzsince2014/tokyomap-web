import * as React from 'react';

import ModalTweet from '../../presentationals/LeafletMap/ModalTweet';
import {setModals} from '../../utils/modal';

export interface EnhancedModalProps {
  userId: string;
  postTweet: (userId: string, message: string, geolocation: L.LatLngTuple) => void;
  geolocation: L.LatLngTuple;
}

const ModalContainer: React.FC<EnhancedModalProps> = ({userId, postTweet, geolocation}) => {
  const handlePost = (): void => {
    const message: HTMLInputElement = document.getElementById('message') as HTMLInputElement;
    if (!message.value || !(Buffer.byteLength(message.value, 'utf-8') < 256)) {
      window.alert('invalid input');
      return;
    }
    postTweet(userId, message.value, geolocation);
    message.value = '';
  };

  React.useEffect(() => {
    Array.from(document.getElementsByClassName('l-modal')).map(modal => {
      setModals(modal);
      return false;
    });
  }, []);

  return <ModalTweet handlePost={handlePost} />;
};

export default ModalContainer;

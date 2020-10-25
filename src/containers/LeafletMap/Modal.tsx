import * as React from 'react';

import Modal from '../../presentationals/LeafletMap/Modal';
import {setModals} from '../../utils/modal';

export interface EnhancedModalProps {
  postTweet: (message: string, geolocation: L.LatLngTuple) => void;
  geolocation: L.LatLngTuple;
}

const ModalContainer: React.FC<EnhancedModalProps> = ({postTweet, geolocation}) => {
  const handlePost = (): void => {
    const message: HTMLInputElement = document.getElementById('message') as HTMLInputElement;
    if (!message.value || !(Buffer.byteLength(message.value, 'utf-8') < 256)) {
      window.alert('invalid input');
      return;
    }
    postTweet(message.value, geolocation);
    message.value = '';
  };

  React.useEffect(() => {
    Array.from(document.getElementsByClassName('l-modal')).map(modal => {
      setModals(modal);
      return false;
    });
  }, []);

  return <Modal handlePost={handlePost} />;
};

export default ModalContainer;

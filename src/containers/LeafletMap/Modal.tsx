import * as React from 'react';

import Modal from '../../presentationals/LeafletMap/Modal';

import {Tweet} from '../../services/socket/models';
import {setModals} from '../../utils/modal';

export interface EnhancedModalProps {
  tweets?: Tweet[];
  postTweet: (message: string, geolocation: L.LatLngTuple) => void;
  geolocation: L.LatLngTuple;
}

const ModalContainer: React.FC<EnhancedModalProps> = ({tweets = [], postTweet, geolocation}) => {
  const handleSubmit = () => {
    const message: HTMLInputElement = document.getElementById('message') as HTMLInputElement;
    postTweet(message.value, geolocation);
    message.value = '';
    return false;
  };

  React.useEffect(() => {
    Array.from(document.getElementsByClassName('l-modal')).map(modal => {
      setModals(modal);
      return false;
    });
  }, []);

  return <Modal tweets={tweets} handleSubmit={handleSubmit} geolocation={geolocation} />;
};

export default ModalContainer;

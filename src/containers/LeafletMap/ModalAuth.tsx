import * as React from 'react';

import ModalAuth from '../../presentationals/LeafletMap/ModalAuth';
import {setModals} from '../../utils/modal';

const ModalAuthContainer: React.FC = () => {
  React.useEffect(() => {
    Array.from(document.getElementsByClassName('l-modal')).map(modal => {
      setModals(modal);
      return false;
    });
  }, []);

  return <ModalAuth />;
};

export default ModalAuthContainer;

import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';

import {postTweet} from '../../actions/Socket/socketActionCreator';
import {RootState} from '../../reducers/rootReducer';
import ModalTweet from '../../presentationals/LeafletMap/ModalTweet';
import {setModals} from '../../utils/modal';

interface StateProps {
  userId: string;
  geolocation: L.LatLngTuple;
}

interface DispatchProps {
  postTweetBegin: (userId: string, message: string, geolocation: L.LatLngTuple) => void;
}

export type EnhancedModalTweetProps = StateProps & DispatchProps;

const mapStateToProps = (state: RootState): StateProps => ({
  userId: state.authState.userId,
  geolocation: state.socketState.geolocation,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      postTweetBegin: (userId, message, geolocation) =>
        postTweet.begin(userId, message, geolocation),
    },
    dispatch,
  );

const ModalTweetContainer: React.FC<EnhancedModalTweetProps> = ({
  userId,
  geolocation,
  postTweetBegin,
}) => {
  const handlePost = (): void => {
    const message: HTMLInputElement = document.getElementById('message') as HTMLInputElement;
    if (!message.value || !(Buffer.byteLength(message.value, 'utf-8') < 256)) {
      window.alert('invalid input');
      return;
    }
    postTweetBegin(userId, message.value, geolocation);
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalTweetContainer);

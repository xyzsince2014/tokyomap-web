import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';

import * as Models from '../../services/socket/models';
import {connectToSocket, getGeolocation, postTweet} from '../../actions/Socket/socketActionCreator';
import {RootState} from '../../reducers/rootReducer';
import LeafletMap, {LeafletMapProps} from '../../presentationals/LeafletMap/LeafletMap';

interface StateProps {
  tweetsFetched: Models.Tweet[];
  geolocation: L.LatLngTuple;
  userId: string;
}

interface DispatchProps {
  connectToSocketInit: (userId: string) => void;
  postTweetBegin: (message: string, geolocation: L.LatLngTuple) => void;
  getGeolocationBegin: () => void;
}

type EnhancedLeafletMapProps = LeafletMapProps & StateProps & DispatchProps;

const mapStateToProps = (state: RootState): StateProps => ({
  tweetsFetched: state.socketState.tweets,
  geolocation: state.socketState.geolocation,
  userId: state.authState.userId,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      connectToSocketInit: userId => connectToSocket.init(userId),
      postTweetBegin: (message, geolocation) => postTweet.begin(message, geolocation),
      getGeolocationBegin: () => getGeolocation.begin(),
    },
    dispatch,
  );

const LeafletMapContainer: React.FC<EnhancedLeafletMapProps> = ({
  tweetsFetched,
  geolocation,
  userId,
  connectToSocketInit,
  postTweetBegin,
  getGeolocationBegin,
}) => {
  React.useEffect(() => {
    getGeolocationBegin();
    connectToSocketInit(userId);
  }, []);
  return (
    <LeafletMap
      tweets={tweetsFetched}
      postTweet={postTweetBegin}
      geolocation={geolocation}
      getGeolocationBegin={getGeolocationBegin}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LeafletMapContainer);

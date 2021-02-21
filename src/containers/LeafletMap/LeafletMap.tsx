import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';

import {authenticate} from '../../actions/Auth/authActionCreator';
import {connectToSocket, getGeolocation, postTweet} from '../../actions/Socket/socketActionCreator';
import {RootState} from '../../reducers/rootReducer';
import * as Models from '../../services/socket/models';
import LeafletMap, {LeafletMapProps} from '../../presentationals/LeafletMap/LeafletMap';

interface StateProps {
  tweetsFetched: Models.Tweet[];
  geolocation: L.LatLngTuple;
  userId: string;
  isAuthenticated: boolean;
}

interface DispatchProps {
  connectToSocketInit: (userId: string) => void;
  postTweetBegin: (userId: string, message: string, geolocation: L.LatLngTuple) => void;
  getGeolocationBegin: () => void;
  getIsAuthorisedBegin: () => void;
}

type EnhancedLeafletMapProps = LeafletMapProps & StateProps & DispatchProps;

const mapStateToProps = (state: RootState): StateProps => ({
  tweetsFetched: state.socketState.tweets,
  geolocation: state.socketState.geolocation,
  userId: state.authState.userId,
  isAuthenticated: state.authState.isAuthenticated,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      connectToSocketInit: userId => connectToSocket.begin(userId),
      postTweetBegin: (userId, message, geolocation) =>
        postTweet.begin(userId, message, geolocation),
      getGeolocationBegin: () => getGeolocation.begin(),
      getIsAuthorisedBegin: () => authenticate.begin(),
    },
    dispatch,
  );

const LeafletMapContainer: React.FC<EnhancedLeafletMapProps> = ({
  tweetsFetched,
  geolocation,
  userId,
  isAuthenticated,
  connectToSocketInit,
  postTweetBegin,
  getGeolocationBegin,
  getIsAuthorisedBegin,
}) => {
  React.useEffect(() => {
    getGeolocationBegin();
    connectToSocketInit(userId);
    getIsAuthorisedBegin();
  }, []);
  return (
    <LeafletMap
      userId={userId}
      tweets={tweetsFetched}
      postTweet={postTweetBegin}
      geolocation={geolocation}
      getGeolocation={getGeolocationBegin}
      isAuthenticated={isAuthenticated}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LeafletMapContainer);

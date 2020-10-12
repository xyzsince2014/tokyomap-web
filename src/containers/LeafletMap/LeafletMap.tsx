import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';

import * as Models from '../../services/socket/models';
import {connectToSocket, postTweet} from '../../actions/Socket/socketActionCreator';
import {RootState} from '../../reducers/rootReducer';

import LeafletMap, {LeafletMapProps} from '../../components/LeafletMap/LeafletMap';

interface StateProps {
  tweetsFetched: Models.Tweet[];
  userId: string;
}

interface DispatchProps {
  connectToSocketInit: (userId: string) => void;
  postTweetBegin: (tweet: Models.Tweet) => void;
}

type EnhancedLeafletMapProps = LeafletMapProps & StateProps & DispatchProps;

const mapStateToProps = (state: RootState): StateProps => ({
  tweetsFetched: state.socketState.tweets,
  userId: state.authState.userId,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      connectToSocketInit: userId => connectToSocket.init(userId),
      postTweetBegin: tweet => postTweet.begin(tweet),
    },
    dispatch,
  );

const LeafletMapContainer: React.FC<EnhancedLeafletMapProps> = ({
  tweetsFetched,
  connectToSocketInit,
  postTweetBegin,
  userId,
}) => {
  React.useEffect(() => {
    connectToSocketInit(userId);
  }, []);
  return <LeafletMap tweets={tweetsFetched} postTweet={postTweetBegin} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(LeafletMapContainer);

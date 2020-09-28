import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';

import * as Models from '../../services/socket/models';
import {initSocket, syncTweet} from '../../actions/Socket/socketActionCreator';
import {RootState} from '../../reducers/rootReducer';

import LeafletMap, {LeafletMapProps} from '../../components/LeafletMap/LeafletMap';

interface StateProps {
  tweetsFetched: Models.Tweet[];
  userId: number;
}

interface DispatchProps {
  initSocketInit: (userId: number) => void;
  syncTweetBegin: (tweet: Models.Tweet) => void;
}

type EnhancedLeafletMapProps = LeafletMapProps & StateProps & DispatchProps;

const mapStateToProps = (state: RootState): StateProps => ({
  tweetsFetched: state.socketState.tweets,
  userId: state.authState.userId,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      initSocketInit: userId => initSocket.init(userId),
      syncTweetBegin: tweet => syncTweet.begin(tweet),
    },
    dispatch,
  );

const LeafletMapContainer: React.FC<EnhancedLeafletMapProps> = ({
  tweetsFetched,
  initSocketInit,
  syncTweetBegin,
  userId,
}) => {
  React.useEffect(() => {
    initSocketInit(userId);
  }, []);
  return <LeafletMap tweets={tweetsFetched} syncTweet={syncTweetBegin} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(LeafletMapContainer);

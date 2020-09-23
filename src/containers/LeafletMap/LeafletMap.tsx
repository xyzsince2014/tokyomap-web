import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';

import * as Models from '../../services/socket/models';
import {initSocket} from '../../actions/Socket/socketActionCreator';
import {RootState} from '../../reducers/rootReducer';

import LeafletMap, {LeafletMapProps} from '../../components/LeafletMap/LeafletMap';

interface StateProps {
  tweetsFetched: Models.Tweet[] | [];
}

interface DispatchProps {
  // todo: rename
  initSocketInit: (userId: string) => void;
}

type EnhancedLeafletMapProps = LeafletMapProps & StateProps & DispatchProps;

const mapStateToProps = (state: RootState): StateProps => ({
  tweetsFetched: state.socketState.tweets,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators({initSocketInit: userId => initSocket.init(userId)}, dispatch);

const LeafletMapContainer: React.FC<EnhancedLeafletMapProps> = ({
  tweetsFetched,
  initSocketInit,
}) => {
  const [tweets, setTweets] = React.useState<Models.Tweet[] | []>(tweetsFetched);

  React.useEffect(() => {
    initSocketInit('0');
  }, []);

  return {tweets} ? <LeafletMap tweets={tweets} /> : <LeafletMap />;
};

export default connect(mapStateToProps, mapDispatchToProps)(LeafletMapContainer);

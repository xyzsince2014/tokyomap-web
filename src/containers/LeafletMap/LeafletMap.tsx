import * as React from 'react';
// import socketIOClient from 'socket.io-client';

import LeafletMap from '../../components/LeafletMap/LeafletMap';

const LeafletMapContainer: React.FC<{}> = () => {
  // const [tweets, setTweets] = React.useState<any>(null);

  // fetch messages from DB
  // React.useEffect(() => {
  //   const socket = socketIOClient('http://localhost:4000');
  //   socket.on('tweetsFetched', (tweetsFetched: any) => setTweets(tweetsFetched));
  // }, []);

  return <LeafletMap />;
};

export default LeafletMapContainer;

import {eventChannel} from 'redux-saga';

import {updateTweets} from '../../actions/Socket/socketActionCreator';
import * as Models from '../../services/socket/models';

const subscribe = (socket: SocketIOClient.Socket) =>
  eventChannel(emit => {
    const socketStateHandler = async (tweets: Models.Tweet[]) => {
      emit(updateTweets.begin(tweets));
    };

    socket.on('initState:done', socketStateHandler);
    socket.on('broadcastTweet:done', socketStateHandler);

    // the subscriber must return `unsubscribe()`, which will be invoked when the saga calls `channel.close()`
    const unsubscribe = () => {
      socket.off('initState:done', socketStateHandler);
      socket.off('broadcastTweet:done', socketStateHandler);
    };

    return unsubscribe;
  });

export default subscribe;

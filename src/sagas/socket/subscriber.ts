import {eventChannel} from 'redux-saga';

import {putTweets} from '../../actions/Socket/socketActionCreator';
import * as Models from '../../services/socket/models';

const subscribe = (socket: SocketIOClient.Socket) =>
  eventChannel(emit => {
    const socketStateHandler = async (tweets: Models.Tweet[]) => {
      emit(putTweets.begin(tweets));
    };

    socket.on('initSocketState:done', socketStateHandler);
    socket.on('postTweet:done', socketStateHandler);

    // the subscriber must return `unsubscribe()`, which will be invoked when the saga calls `channel.close()`
    const unsubscribe = () => {
      socket.off('initSocketState:done', socketStateHandler);
      socket.off('postTweet:done', socketStateHandler);
    };

    return unsubscribe;
  });

export default subscribe;

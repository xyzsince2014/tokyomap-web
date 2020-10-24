import {eventChannel} from 'redux-saga';

import {connectToSocket, postTweet} from '../../actions/Socket/socketActionCreator';
import * as Models from '../../services/socket/models';

const subscribe = (socket: SocketIOClient.Socket) =>
  eventChannel(emit => {
    const initSocketState = (tweets: Models.Tweet[]) => {
      emit(connectToSocket.resolve(tweets));
    };

    const updateSocketState = (tweets: Models.Tweet[]) => {
      emit(postTweet.resolve(tweets));
    };

    const handleError = (err: Error) => {
      window.alert('failed to fetch tweets'); // todo: display error notification
      emit(connectToSocket.resolve([]));
    };

    socket.on('initSocketState:resolve', initSocketState);
    socket.on('initSocketState:reject', handleError);
    socket.on('postTweet:done', updateSocketState);

    // the subscriber must return `unsubscribe()`, which will be invoked when the saga calls `channel.close()`
    const unsubscribe = () => {
      socket.off('initSocketState:resolve', initSocketState);
      socket.off('postTweet:done', updateSocketState);
    };

    return unsubscribe;
  });

export default subscribe;

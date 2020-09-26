import {eventChannel} from 'redux-saga';

import {updateTweets} from '../../actions/Socket/socketActionCreator';
import * as Models from '../../services/socket/models';
/**
 * 指定されたソケットからeventChannelを作成
 * 受信した`initState:fetched`, `initSelected:receive`,
 * `updateSelected:receive`, `broadCastReserve:receive` イベントに対するsubscriptionをセットアップ
 * @param socket
 */
const subscribe = (socket: SocketIOClient.Socket) =>
  // subscriber関数はsocketから渡ってきたデータをchannelに入れるために `emit`引数をとります
  eventChannel(emit => {
    // handlerの役割はデータをchannelに入れることです。これにより、Sagaは返されたchannelからこのデータを取得できます。
    // ここではreduxのactionがデータとしてchannelに入ります。
    // exec actions
    const socketStateHandler = async (tweets: Models.Tweet[]) => {
      emit(updateTweets.begin(tweets));
    };

    // setup the subscription
    socket.on('initState:done', socketStateHandler);
    socket.on('broadcastTweet:done', socketStateHandler);
    // socket.on('updateSelected:receive', updateSelectedHandler);
    // socket.on('broadCastReserve:receive', broadCastReserveHandler);

    // the subscriber must return `unsubscribe()`
    // , which will be invoked when the saga calls `channel.close()`
    const unsubscribe = () => {
      socket.off('initState:done', socketStateHandler);
      socket.off('broadcastTweet:done', socketStateHandler);
      // socket.off('updateSelected:receive', updateSelectedHandler);
      // socket.off('broadCastReserve:receive', broadCastReserveHandler);
    };

    return unsubscribe;
  });

export default subscribe;

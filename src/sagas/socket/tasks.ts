import {put, take, call} from 'redux-saga/effects';
import io from 'socket.io-client';

import subscribe from './subscriber';
import * as ActionType from '../../actions/Socket/socketConstants';
import {postTweet} from '../../actions/Socket/socketActionCreator';

export const createSocketConnection = () => {
  const socket = io('http://localhost:4000');

  return new Promise(resolve => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
};

/**
 * initialise the socket state
 * @param socket
 * @param userId
 */
export function* initSocketState(socket: SocketIOClient.Socket, userId: string) {
  yield socket.emit('initSocketState', {userId});
}

/**
 * add a tweet, and syncronise the socket state
 * @param socket
 * @param userId
 */
export function* updateSocketState(socket: SocketIOClient.Socket, userId: string) {
  while (true) {
    const action: ReturnType<typeof postTweet.begin> = yield take(ActionType.TWEET_POST);
    const {tweet} = action.payload;
    yield socket.emit('postTweet', {tweet, userId});
  }
}

/**
 * fetch an action from the channel and dispatch it
 * @param socket
 */
export function* dispatchActionFromChannel(socket: SocketIOClient.Socket) {
  const channel = yield call(subscribe, socket);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

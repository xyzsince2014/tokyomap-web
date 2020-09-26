import {put, take, all, call} from 'redux-saga/effects';
import io from 'socket.io-client';

import subscribe from './subscriber';
import * as ActionType from '../../actions/Socket/socketConstants';
import {syncTweet} from '../../actions/Socket/socketActionCreator';

export const createSocketConnection = () => {
  const socket = io('http://localhost:4000');

  return new Promise(resolve => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
};

export function* initState(socket: SocketIOClient.Socket, userId: string) {
  yield socket.emit('initState', {userId});
}

export function* writeState(socket: SocketIOClient.Socket) {
  const channel = yield call(subscribe, socket);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

export function* syncState(socket: SocketIOClient.Socket, userId: string) {
  while (true) {
    const action: ReturnType<typeof syncTweet.begin> = yield take(ActionType.STATE_SYNC);
    const {tweet} = action.payload;
    yield socket.emit('broadcastTweet', {...tweet, userId});
  }
}

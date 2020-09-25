import {put, take, all, fork, call, select} from 'redux-saga/effects';
import io from 'socket.io-client';

import subscribe from './subscriber';

export const createSocketConnection = () => {
  const socket = io('http://localhost:4000');

  return new Promise(resolve => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
};

/**
 * initialise the store with the data fetched from the DB
 * @param param0
 */
export function* initState(socket: SocketIOClient.Socket, userId: string) {
  yield socket.emit('initState', {userId});
}

/**
 * subscriber関数から渡ってきたデータ(reduxのaction)を取得
 * @param socket
 */
export function* writeState(socket: SocketIOClient.Socket) {
  const channel = yield call(subscribe, socket);
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

/**
 * reserveBoxのdbを更新、更新した値をbroadcastして、他ブラウザのreseveBoxのstore更新
 * @param socket
 */
// export function* syncStatus(socket: SocketIOClient.Socket) {
//   while (true) {
//     const {
//       payload: {boxId, userId},
//     } = yield take('SYNC_RESERVE');

//     yield all([
//       call(socket.emit, ['broadCastReserve', {boxId, userId}]),
//       call(socket.emit, ['updateSelected', {boxId, userId}]),
//     ]);
//   }
// }

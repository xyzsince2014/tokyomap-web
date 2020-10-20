import {fork, take, call, takeLatest} from 'redux-saga/effects';
import {
  createSocketConnection,
  initSocketState,
  updateSocketState,
  dispatchActionFromChannel,
  runGetGeolocation,
} from './tasks';
import {connectToSocket} from '../../actions/Socket/socketActionCreator';
import * as ActionType from '../../actions/Socket/socketConstants';

export function* watchSocket() {
  while (true) {
    yield takeLatest(ActionType.GET_GEOLOCATION_BEGIN, runGetGeolocation);
    const action: ReturnType<typeof connectToSocket.init> = yield take(ActionType.SOCKET_CONNECT); // todo: use takeLatest?
    const socket = yield call(createSocketConnection);
    yield fork(initSocketState, socket, action.payload.userId);
    yield fork(updateSocketState, socket, action.payload.userId);
    yield fork(dispatchActionFromChannel, socket);
  }
}

import {fork, take, call} from 'redux-saga/effects';
import {
  createSocketConnection,
  initSocketState,
  updateSocketState,
  dispatchActionFromChannel,
} from './tasks';
import {connectToSocket} from '../../actions/Socket/socketActionCreator';
import * as ActionType from '../../actions/Socket/socketConstants';

export function* watchSocket() {
  while (true) {
    const action: ReturnType<typeof connectToSocket.init> = yield take(ActionType.SOCKET_CONNECT);
    const socket = yield call(createSocketConnection);
    yield fork(initSocketState, socket, action.payload.userId);
    yield fork(updateSocketState, socket, action.payload.userId);
    yield fork(dispatchActionFromChannel, socket);
  }
}

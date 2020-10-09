import {fork, take, call} from 'redux-saga/effects';
import {createSocketConnection, initState, writeState, syncState} from './tasks';
import {connectToSocket} from '../../actions/Socket/socketActionCreator';
import * as ActionType from '../../actions/Socket/socketConstants';

export function* watchSocket() {
  while (true) {
    const action: ReturnType<typeof connectToSocket.init> = yield take(ActionType.SOCKET_CONNECT);
    const socket = yield call(createSocketConnection);
    yield fork(initState, socket, action.payload.userId);
    yield fork(syncState, socket, action.payload.userId);
    yield fork(writeState, socket);
  }
}

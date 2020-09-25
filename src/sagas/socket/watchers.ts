import {fork, take, call} from 'redux-saga/effects';
import {createSocketConnection, initState, writeState} from './tasks';
import {initSocket} from '../../actions/Socket/socketActionCreator';
import * as ActionType from '../../actions/Socket/socketConstants';

export function* watchOnSocket() {
  while (true) {
    /* eslint-disable no-useless-catch */
    try {
      const action: ReturnType<typeof initSocket.init> = yield take(ActionType.SOCKET_INIT);
      const socket = yield call(createSocketConnection);
      yield fork(initState, socket, action.payload.userId);
      yield fork(writeState, socket);
      // yield fork(syncStatus, socket);
    } catch (e) {
      throw e;
    }
    /* eslint-enable no-useless-catch */
  }
}

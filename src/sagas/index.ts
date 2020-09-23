import {all, fork} from 'redux-saga/effects';

import {watchGetIsAuthorised} from './auth/watchers';
import {watchOnSocket} from './socket/watchers';

export default function* rootSaga() {
  yield all([fork(watchGetIsAuthorised), fork(watchOnSocket)]);
}

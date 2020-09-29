import {all, fork} from 'redux-saga/effects';

import {watchGetIsAuthorised} from './auth/watchers';
import {watchSocket} from './socket/watchers';

export default function* rootSaga() {
  yield all([fork(watchGetIsAuthorised), fork(watchSocket)]);
}

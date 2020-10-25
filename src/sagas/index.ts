import {all, fork} from 'redux-saga/effects';

import {watchGetIsAuthorised} from './auth/watchers';
import {watchSocket, watchGeolocation} from './socket/watchers';

export default function* rootSaga() {
  yield all([fork(watchGetIsAuthorised), fork(watchSocket), fork(watchGeolocation)]);
}

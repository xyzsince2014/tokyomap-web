import {all, fork} from 'redux-saga/effects';

import {watchSocket, watchGeolocation} from './socket/watchers';

export default function* rootSaga() {
  yield all([fork(watchSocket), fork(watchGeolocation)]);
}

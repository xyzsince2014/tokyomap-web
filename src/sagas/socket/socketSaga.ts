import {all, fork} from 'redux-saga/effects';

import {watchSocket, watchGeolocation} from './watchers';

export default function* socketSaga() {
  yield all([fork(watchSocket), fork(watchGeolocation)]);
}

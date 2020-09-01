import {all, fork} from 'redux-saga/effects';

import {watchGetIsAuthorised} from './watchers';

export default function* rootSaga() {
  yield all([fork(watchGetIsAuthorised)]);
}

import {all, fork} from 'redux-saga/effects';

import {watchGetIsAuthorised} from './watchers';

/**
 * When the application starts,
 * the Saga Middleware executes RootSaga() to invoke watchGetIsAuthorised().
 */
export default function* rootSaga() {
  yield all([fork(watchGetIsAuthorised)]);
}

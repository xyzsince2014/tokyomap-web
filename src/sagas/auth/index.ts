import {all, fork} from 'redux-saga/effects';

import {watchGetIsLoggedIn} from './watchers';

/**
 * When the application starts,
 * the Saga Middleware executes RootSaga() to invoke watchGetIsLoggedIn().
 */
export default function* rootSaga() {
  yield all([fork(watchGetIsLoggedIn)]);
}

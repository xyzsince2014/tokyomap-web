import {all, fork} from 'redux-saga/effects';

import {watchGetIsAuthorised} from './auth/watchers';
// import {watchGetPosts} from './posts/watchers';

export default function* rootSaga() {
  // yield all([fork(watchGetIsAuthorised), fork(watchGetPosts)]);
  yield all([fork(watchGetIsAuthorised)]);
}

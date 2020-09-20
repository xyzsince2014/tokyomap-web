import {takeEvery} from 'redux-saga/effects';

import {runGetPosts} from './tasks';
import * as ActionType from '../../actions/Posts/postsConstants';

export function* watchGetPosts() {
  yield takeEvery(ActionType.BEGIN, runGetPosts);
}

/**
 * Effect APIs
 * For details, see https://redux-saga.js.org/docs/api/
 * or
 * https://qiita.com/kuy/items/716affc808ebb3e1e8ac#redux-saga-%E3%81%A8%E3%81%AF%E4%BB%95%E5%88%87%E3%82%8A%E7%9B%B4%E3%81%97
 *
 * select: fetch data from the state
 * put: dispatch an action
 * take: wait for an action
 * call: wait for a promise to complete
 * fork: begin a task
 * join: wait for a task to complete
 */

// import {takeLatest} from 'redux-saga/effects';
import {take, fork} from 'redux-saga/effects';

import {runAuthenticate} from './tasks';
import * as ActionType from '../../actions/Auth/authConstants';

export function* watchGetIsAuthorised() {
  // cf. https://github.com/redux-saga/redux-saga/issues/684
  // `yield takeLatest(ActionType.BEGIN, runAuthenticate);` is a kind of syntactic sugar for the snippet below
  while (true) {
    const action = yield take(ActionType.BEGIN);
    yield fork(runAuthenticate, action);
  }
}

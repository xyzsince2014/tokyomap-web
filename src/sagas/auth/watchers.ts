/**
 * Effect APIs
 * see https://redux-saga.js.org/docs/api/ for details:
 *
 * select ... select data from Store State
 * put ... executes an ActionCreator to dispatch the Action
 * take ... watch an Action to be delivered
 * call ... call async functions
 * fork ... starts & returns non-blocking tasks
 * join ... designates returned tasks to wait for to complete
 */
import {takeLatest} from 'redux-saga/effects';

import {runGetIsLoggedIn} from './tasks';
import * as ActionType from '../../actions/Auth/authConstants';

/**
 * watches ActionType.LOGIN is dispathed, and executes runGetIsLoggedIn() when it is
 */
export function* watchGetIsLoggedIn() {
  yield takeLatest(ActionType.LOGIN, runGetIsLoggedIn);
}

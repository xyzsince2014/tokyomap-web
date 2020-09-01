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

import {runGetIsAuthorised} from './tasks';
import * as ActionType from '../../actions/Auth/authConstants';

export function* watchGetIsAuthorised() {
  yield takeLatest(ActionType.BEGIN, runGetIsAuthorised);
}

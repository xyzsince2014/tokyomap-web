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
import {put} from 'redux-saga/effects';
import {authActionCreator} from '../../actions/Auth/authActionCreator';

export function* runGetIsLoggedIn() {
  yield put(authActionCreator.login());
}

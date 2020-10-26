import {put, call} from 'redux-saga/effects';
import * as authActions from '../../actions/Auth/authActionCreator';
import * as api from '../../services/auth/api';

export function* runAuthenticate(action: ReturnType<typeof authActions.authenticate.begin>) {
  try {
    const authenticate = api.getAuthFactory();
    const {isAuthenticated, userId} = yield call(authenticate);
    yield put(authActions.authenticate.resolve({isAuthenticated, userId}));
  } catch (err) {
    yield put(authActions.authenticate.reject(err));
  }
}

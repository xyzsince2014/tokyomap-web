/**
 * Effect APIs
 * see https://qiita.com/kuy/items/716affc808ebb3e1e8ac#redux-saga-%E3%81%A8%E3%81%AF%E4%BB%95%E5%88%87%E3%82%8A%E7%9B%B4%E3%81%97 for details:
 *
 * select: Stateから必要なデータを取り出す
 * put: Actionをdispatchする
 * take: Actionを待つ、イベントの発生を待つ
 * call: Promiseの完了を待つ
 * fork: 別のタスクを開始する
 * join: 別のタスクの終了を待つ
 */
import {put, call} from 'redux-saga/effects';
import {authenticate} from '../../actions/Auth/authActionCreator';
import * as api from '../../services/auth/api';

export function* runGetIsAuthorised(action: ReturnType<typeof authenticate.begin>) {
  try {
    const getIsAuthorised = api.getAuthFactory();
    const isAuthorised = yield call(getIsAuthorised);
    yield put(authenticate.resolve({isAuthorised}));
  } catch (error) {
    yield put(authenticate.reject(error));
  }
}

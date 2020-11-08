import {call, put, take} from 'redux-saga/effects';
import {expectSaga} from 'redux-saga-test-plan';

/**
 * task to be tested
 * @param factory
 */
function* runGetGeolocation(factory: () => () => Promise<L.LatLngTuple>) {
  yield take('SOCKET/GET/GEOLOCATION/BEGIN');
  const geolocation = yield call(factory());
  yield put({type: 'SOCKET/GET/GEOLOCATION/RESOLVE', payload: {geolocation}});
}

describe('sample saga', () => {
  test('should runGetGeolocation() resolve', () => {
    const getGeolocationFactory = () => (): Promise<L.LatLngTuple> => {
      return new Promise(resolve => {
        resolve([35.680722, 139.767271]);
      });
    };

    return expectSaga(runGetGeolocation, getGeolocationFactory)
      .dispatch({type: 'SOCKET/GET/GEOLOCATION/BEGIN'})
      .put({
        type: 'SOCKET/GET/GEOLOCATION/RESOLVE',
        payload: {geolocation: [35.680722, 139.767271]},
      })
      .run();
  });
});

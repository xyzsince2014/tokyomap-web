import {put, take, call} from 'redux-saga/effects';
import io from 'socket.io-client';

import subscribe from './subscriber';
import * as ActionType from '../../actions/Socket/socketConstants';
import {postTweet, getGeolocation} from '../../actions/Socket/socketActionCreator';
import {getGeolocationFactory} from '../../services/socket/api';

export const createSocketConnection = () => {
  const socket = io(`${process.env.DOMAIN_WEB}`, {transports: ['websocket']});

  return new Promise(resolve => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
};

/**
 * initialise the socket state
 * @param socket
 */
export function* initSocketState(socket: SocketIOClient.Socket) {
  yield socket.emit('initSocketState');
}

/**
 * add a tweet, and syncronise the socket state
 * @param socket
 */
export function* updateSocketState(socket: SocketIOClient.Socket) {
  while (true) {
    const action: ReturnType<typeof postTweet.begin> = yield take(ActionType.POST_TWEET_BEGIN);
    yield socket.emit('postTweet', action.payload);
  }
}

/**
 * fetch an action from the channel and dispatch it
 * @param socket
 */
export function* dispatchActionFromChannel(socket: SocketIOClient.Socket) {
  const eventChannel = yield call(subscribe, socket);
  while (true) {
    const action = yield take(eventChannel);
    yield put(action);
  }
}

export function* runGetGeolocation(action: ReturnType<typeof getGeolocation.begin>) {
  try {
    const geolocation = yield call(getGeolocationFactory());
    yield put(getGeolocation.resolve(geolocation));
  } catch (err) {
    window.alert('Enable geolocation'); // todo: display error notification
    yield put(getGeolocation.reject());
  }
}

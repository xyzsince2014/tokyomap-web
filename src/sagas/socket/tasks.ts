import {put, take, call} from 'redux-saga/effects';
import io from 'socket.io-client';

import subscribe from './subscriber';
import * as ActionType from '../../actions/Socket/socketConstants';
import {postTweet, getGeolocation} from '../../actions/Socket/socketActionCreator';
import {getGeolocationFactory} from '../../services/socket/api';

export const createSocketConnection = () => {
  const socket = io('http://localhost:4000');

  return new Promise((resolve, reject) => {
    socket.on('connect', () => {
      resolve(socket);
      // todo: reject();
    });
  });
};

/**
 * initialise the socket state
 * @param socket
 * @param userId
 */
export function* initSocketState(socket: SocketIOClient.Socket, userId: string) {
  yield socket.emit('initSocketState', {userId});
}

/**
 * add a tweet, and syncronise the socket state
 * @param socket
 * @param userId
 */
export function* updateSocketState(socket: SocketIOClient.Socket, userId: string) {
  while (true) {
    const action: ReturnType<typeof postTweet.begin> = yield take(ActionType.POST_TWEET_BEGIN);
    const {message, geolocation} = action.payload;
    yield socket.emit('postTweet', {userId, geolocation, message});
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

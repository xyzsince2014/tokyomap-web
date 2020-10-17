import * as ActionType from './socketConstants';
import * as Models from '../../services/socket/models';

export const connectToSocket = {
  init: (userId: string) => ({
    type: ActionType.SOCKET_CONNECT as typeof ActionType.SOCKET_CONNECT,
    payload: {userId},
  }),
};

export const putTweets = {
  begin: (tweets: Models.Tweet[]) => ({
    type: ActionType.TWEET_PUT as typeof ActionType.TWEET_PUT,
    payload: {tweets},
  }),
  // resolve
  // reject
};

export const postTweet = {
  begin: (message: string, geolocation: L.LatLngTuple) => ({
    type: ActionType.TWEET_POST as typeof ActionType.TWEET_POST,
    payload: {message, geolocation},
  }),
  // resolve
  // reject
};

export const getGeolocation = {
  begin: (geolocation: L.LatLngTuple) => ({
    type: ActionType.GEOLOCATION_GET as typeof ActionType.GEOLOCATION_GET,
    payload: {geolocation},
  }),
  // resolve
  // reject
};

export type SocketAction =
  | ReturnType<typeof connectToSocket.init>
  | ReturnType<typeof putTweets.begin>
  | ReturnType<typeof postTweet.begin>
  | ReturnType<typeof getGeolocation.begin>;

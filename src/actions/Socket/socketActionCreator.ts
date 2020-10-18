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
    // type: ActionType.POST_TWEET_BEGIN as typeof ActionType.POST_TWEET_BEGIN,
    type: ActionType.TWEET_POST as typeof ActionType.TWEET_POST,
    payload: {message, geolocation},
  }),
  // resolve: (tweets: Models.Tweet[]) => ({
  //   type: ActionType.POST_TWEET_RESOLVE as typeof ActionType.POST_TWEET_RESOLVE,
  //   payload: {tweets},
  // }),
  // reject
};

export const getGeolocation = {
  begin: () => ({
    type: ActionType.GET_GEOLOCATION_BEGIN as typeof ActionType.GET_GEOLOCATION_BEGIN,
  }),
  resolve: (geolocation: L.LatLngTuple) => ({
    type: ActionType.GET_GEOLOCATION_RESOLVE as typeof ActionType.GET_GEOLOCATION_RESOLVE,
    payload: {geolocation},
  }),
  // reject: (params: SearchRepositoriesParams, error: AxiosError) => ({
  //   type: ActionType.SEARCH_REPOSITORIES_FAIL as typeof ActionType.SEARCH_REPOSITORIES_FAIL,
  //   payload: {params, error},
  //   error: true,
  // }),
};

export type SocketAction =
  | ReturnType<typeof connectToSocket.init>
  | ReturnType<typeof putTweets.begin>
  | ReturnType<typeof postTweet.begin>
  | ReturnType<typeof getGeolocation.begin>
  | ReturnType<typeof getGeolocation.resolve>;

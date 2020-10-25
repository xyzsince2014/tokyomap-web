import * as ActionType from './socketConstants';
import * as Models from '../../services/socket/models';

export const connectToSocket = {
  begin: (userId: string) => ({
    type: ActionType.CONNECT_SOCKET_BEGIN as typeof ActionType.CONNECT_SOCKET_BEGIN,
    payload: {userId},
  }),
  resolve: (tweets: Models.Tweet[]) => ({
    type: ActionType.CONNECT_SOCKET_RESOLVE as typeof ActionType.CONNECT_SOCKET_RESOLVE,
    payload: {tweets},
  }),
  // todo: reject
};

export const postTweet = {
  begin: (message: string, geolocation: L.LatLngTuple) => ({
    type: ActionType.POST_TWEET_BEGIN as typeof ActionType.POST_TWEET_BEGIN,
    payload: {message, geolocation},
  }),
  resolve: (tweets: Models.Tweet[]) => ({
    type: ActionType.POST_TWEET_RESOLVE as typeof ActionType.POST_TWEET_RESOLVE,
    payload: {tweets},
  }),
  reject: () => ({
    type: ActionType.POST_TWEET_REJECT as typeof ActionType.POST_TWEET_REJECT,
  }),
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
  | ReturnType<typeof connectToSocket.begin>
  | ReturnType<typeof connectToSocket.resolve>
  | ReturnType<typeof postTweet.begin>
  | ReturnType<typeof postTweet.resolve>
  | ReturnType<typeof postTweet.reject>
  | ReturnType<typeof getGeolocation.begin>
  | ReturnType<typeof getGeolocation.resolve>;

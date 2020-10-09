import * as ActionType from './socketConstants';
import * as Models from '../../services/socket/models';

export const connectToSocket = {
  init: (userId: string) => ({
    type: ActionType.SOCKET_CONNECT as typeof ActionType.SOCKET_CONNECT,
    payload: {userId},
  }),
};

export const getTweets = {
  begin: (tweets: Models.Tweet[]) => ({
    type: ActionType.TWEET_GET as typeof ActionType.TWEET_GET,
    payload: {tweets},
  }),
  // resolve
  // reject
};

export const postTweet = {
  begin: (tweet: Models.Tweet) => ({
    type: ActionType.TWEET_POST as typeof ActionType.TWEET_POST,
    payload: {tweet},
  }),
  // resolve
  // reject
};

export type SocketAction =
  | ReturnType<typeof connectToSocket.init>
  | ReturnType<typeof getTweets.begin>
  | ReturnType<typeof postTweet.begin>;

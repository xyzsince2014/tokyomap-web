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
  begin: (tweet: Models.Tweet) => ({
    type: ActionType.TWEET_POST as typeof ActionType.TWEET_POST,
    payload: {tweet},
  }),
  // resolve
  // reject
};

export type SocketAction =
  | ReturnType<typeof connectToSocket.init>
  | ReturnType<typeof putTweets.begin>
  | ReturnType<typeof postTweet.begin>;

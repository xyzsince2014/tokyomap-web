import * as ActionType from './socketConstants';
import * as Models from '../../services/socket/models';

export const initSocket = {
  init: (userId: string) => ({
    type: ActionType.SOCKET_INIT as typeof ActionType.SOCKET_INIT,
    payload: {userId},
  }),
};

export const updateTweets = {
  begin: (tweets: Models.Tweet[]) => ({
    type: ActionType.STATE_UPDATE as typeof ActionType.STATE_UPDATE,
    payload: {tweets},
  }),
};

export const syncTweet = {
  begin: (tweet: Models.Tweet) => ({
    type: ActionType.STATE_SYNC,
    payload: {tweet},
  }),
};

export type SocketAction =
  | ReturnType<typeof initSocket.init>
  | ReturnType<typeof updateTweets.begin>
  | ReturnType<typeof syncTweet.begin>;

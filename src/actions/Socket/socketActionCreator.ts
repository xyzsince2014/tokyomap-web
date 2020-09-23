import * as ActionType from './socketConstants';
import * as Models from '../../services/socket/models';

export const initSocket = {
  init: (userId: string) => ({
    type: ActionType.SOCKET_INIT as typeof ActionType.SOCKET_INIT,
    payload: {userId},
  }),
};

export const updateTweets = {
  begin: (tweets: Models.Tweet[] | []) => ({
    type: ActionType.STATE_UPDATE as typeof ActionType.STATE_UPDATE,
    payload: {tweets},
  }),
};

// export const initTweets = {
//   exec: (tweets: Models.Tweet[] | []) => ({
//     type: ActionType.STATE_INIT,
//     payload: {tweets},
//   }),
// };

export type SocketAction =
  | ReturnType<typeof initSocket.init>
  | ReturnType<typeof updateTweets.begin>;

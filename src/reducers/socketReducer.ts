import {Reducer} from 'redux';

import {SocketAction} from '../actions/Socket/socketActionCreator';
import * as ActionType from '../actions/Socket/socketConstants';
import * as Models from '../services/socket/models';

export interface SocketState {
  tweets: Models.Tweet[];
  geolocation: L.LatLngTuple;
}

const socketReducer: Reducer<SocketState, SocketAction> = (
  state: SocketState = {tweets: [], geolocation: [35.680722, 139.767271]}, // default geolocation is Tokyo Sta.
  action: SocketAction,
): SocketState => {
  switch (action.type) {
    case ActionType.SOCKET_CONNECT:
      return {
        ...state,
      };
    case ActionType.TWEET_PUT:
      return {
        ...state,
        tweets: action.payload.tweets,
      };
    case ActionType.TWEET_POST:
      return {
        ...state,
      };
    case ActionType.GEOLOCATION_GET:
      return {
        ...state,
        geolocation: action.payload.geolocation,
      };
    default:
      /* eslint-disable no-case-declarations */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action;
      return state;
  }
};

export default socketReducer;

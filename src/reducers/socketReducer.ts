import {Reducer} from 'redux';

import {SocketAction} from '../actions/Socket/socketActionCreator';
import * as ActionType from '../actions/Socket/socketConstants';
import * as Models from '../services/socket/models';

export interface SocketState {
  tweets: Models.Tweet[];
}

export const initialSocketState = {tweets: []};

const socketReducer: Reducer<SocketState, SocketAction> = (
  state: SocketState = initialSocketState,
  action: SocketAction,
): SocketState => {
  switch (action.type) {
    case ActionType.SOCKET_INIT:
      return {
        ...state,
      };
    case ActionType.STATE_UPDATE:
      return {
        ...state,
        tweets: action.payload.tweets,
      };
    // case ActionType.REJECT:
    //   return {
    //     ...state,
    //   };
    default:
      /* eslint-disable no-case-declarations */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action;
      return state;
  }
};

export default socketReducer;

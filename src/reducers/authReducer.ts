import {Reducer} from 'redux';

import {AuthAction} from '../actions/Auth/authActionCreator';
import * as ActionType from '../actions/Auth/authConstants';

export interface AuthState {
  isAuthorised: boolean;
}

export const initialAuthState = {isAuthorised: false};

const authReducer: Reducer<AuthState, AuthAction> = (
  state: AuthState = initialAuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case ActionType.BEGIN:
      return {
        ...state,
      };
    case ActionType.RESOLVE:
      return {
        ...state,
        isAuthorised: action.payload.result.isAuthorised,
      };
    case ActionType.REJECT:
      return {
        ...state,
        isAuthorised: false,
      };
    default:
      /* eslint-disable no-case-declarations */
      /* eslint-disable @typescript-eslint/no-unused-vars */
      const _: never = action;
      return state;
  }
};

export default authReducer;

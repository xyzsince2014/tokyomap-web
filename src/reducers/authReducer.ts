import {Reducer} from 'redux';

import {AuthAction} from '../actions/Auth/authActionCreator';
import * as ActionType from '../actions/Auth/authConstants';

export interface AuthState {
  isLoading: boolean;
  isAuthenticated: boolean;
  userId: number;
}

export const initialAuthState = {
  isLoading: true,
  isAuthenticated: false,
  userId: 0,
};

const authReducer: Reducer<AuthState, AuthAction> = (
  state: AuthState = initialAuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case ActionType.BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.RESOLVE:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: action.payload.result.isAuthenticated,
        userId: action.payload.result.userId,
      };
    case ActionType.REJECT:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
      };
    default:
      /* eslint-disable no-case-declarations */
      /* eslint-disable @typescript-eslint/no-unused-vars */
      const _: never = action;
      return state;
  }
};

export default authReducer;

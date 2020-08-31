import {AxiosError} from 'axios';
import * as ActionType from './authConstants';

export interface AuthActionCreatorResult {
  isAuthorised: boolean;
}

export const authActionCreator = {
  start: () => ({
    type: ActionType.START as typeof ActionType.START,
  }),
  succeed: (result: any) => ({
    type: ActionType.SUCCEED as typeof ActionType.SUCCEED,
    payload: {result},
  }),
  fail: (error: AxiosError) => ({
    type: ActionType.FAIL as typeof ActionType.FAIL,
    payload: {error},
    error: true,
  }),
};

export type AuthAction =
  | ReturnType<typeof authActionCreator.start>
  | ReturnType<typeof authActionCreator.succeed>
  | ReturnType<typeof authActionCreator.fail>;

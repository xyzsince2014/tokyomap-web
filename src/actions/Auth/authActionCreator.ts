import {AxiosError} from 'axios';
import * as ActionType from './authConstants';

export const authActionCreator = {
  start: () => ({
    type: ActionType.START as typeof ActionType.START,
  }),
  succeed: (isAuthorised: boolean) => ({
    type: ActionType.SUCCEED as typeof ActionType.SUCCEED,
    payload: {isAuthorised},
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

import {AxiosError} from 'axios';
import * as ActionType from './authConstants';

export interface AuthResult {
  isAuthorised: boolean;
}

export const authenticate = {
  start: () => ({
    type: ActionType.START as typeof ActionType.START,
  }),
  // todo: use (result: AuthResult)
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
  | ReturnType<typeof authenticate.start>
  | ReturnType<typeof authenticate.succeed>
  | ReturnType<typeof authenticate.fail>;

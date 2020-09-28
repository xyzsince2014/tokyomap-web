import {AxiosError} from 'axios';
import * as ActionType from './authConstants';

// todo: use src/services/posts/models.ts
export interface AuthResult {
  isAuthenticated: boolean;
  userId: number;
}

export const authenticate = {
  begin: () => ({
    type: ActionType.BEGIN as typeof ActionType.BEGIN,
  }),
  resolve: (result: AuthResult) => ({
    type: ActionType.RESOLVE as typeof ActionType.RESOLVE,
    payload: {result},
  }),
  reject: (error: AxiosError) => ({
    type: ActionType.REJECT as typeof ActionType.REJECT,
    payload: {error},
    error: true,
  }),
};

export type AuthAction =
  | ReturnType<typeof authenticate.begin>
  | ReturnType<typeof authenticate.resolve>
  | ReturnType<typeof authenticate.reject>;

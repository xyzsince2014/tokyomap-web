import * as ActionType from './authConstants';

export const authActionCreator = {
  login: () => ({
    type: ActionType.LOGIN as typeof ActionType.LOGIN,
    payload: true,
  }),
  logout: () => ({
    type: ActionType.LOGOUT as typeof ActionType.LOGOUT,
    payload: false,
  }),
};

export type AuthAction =
  | ReturnType<typeof authActionCreator.login>
  | ReturnType<typeof authActionCreator.logout>;

import * as ActionType from './authConstants';

export const authActionCreator = {
  login: () => ({
    type: ActionType.LOGIN as typeof ActionType.LOGIN,
  }),
  logout: () => ({
    type: ActionType.LOGOUT as typeof ActionType.LOGOUT,
  }),
};

export type AuthAction =
  | ReturnType<typeof authActionCreator.login>
  | ReturnType<typeof authActionCreator.logout>;

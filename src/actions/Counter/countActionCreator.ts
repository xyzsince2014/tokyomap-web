import * as ActionType from './countConstants';

export const countActionCreator = {
  add: (addend: number) => ({
    type: ActionType.ADD as typeof ActionType.ADD,
    payload: addend,
  }),
  increase: () => ({
    type: ActionType.INCREASE as typeof ActionType.INCREASE,
  }),
  decrease: () => ({
    type: ActionType.DECREASE as typeof ActionType.DECREASE,
  }),
};

export type CountAction =
  | ReturnType<typeof countActionCreator.add>
  | ReturnType<typeof countActionCreator.increase>
  | ReturnType<typeof countActionCreator.decrease>;

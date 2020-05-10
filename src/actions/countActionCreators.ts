import * as ActionType from './countConstants';

export const calculateCount = {
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
  | ReturnType<typeof calculateCount.add>
  | ReturnType<typeof calculateCount.increase>
  | ReturnType<typeof calculateCount.decrease>;

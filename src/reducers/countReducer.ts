import {Reducer} from 'redux';

import {CountAction} from '../actions/Counter/countActionCreator';
import * as ActionType from '../actions/Counter/countConstants';

export interface CountState {
  count: number;
}

export const initialCountState = {count: 0};

const testReducer: Reducer<CountState, CountAction> = (
  state: CountState = initialCountState,
  action: CountAction,
): CountState => {
  switch (action.type) {
    case ActionType.ADD:
      return {
        ...state,
        count: state.count + (action.payload || 0),
      };
    case ActionType.INCREASE:
      return {
        ...state,
        count: state.count + 1,
      };
    case ActionType.DECREASE:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      /* eslint-disable no-case-declarations */
      /* eslint-disable @typescript-eslint/no-unused-vars */
      const _: never = action;
      return state;
  }
};

export default testReducer;

import {combineReducers} from 'redux';
import countReducer, {CountState} from './countReducer';

export interface RootState {
  countState: CountState;
  // beadsCounterState: BeadsCounterState;
}

const RootReducer = combineReducers({
  countState: countReducer,
  // beadsCounterState: BeadsCounterReducer,
});

export default RootReducer;

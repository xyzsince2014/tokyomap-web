import {combineReducers} from 'redux';
import countReducer, {CountState} from './countReducer';
import authReducer, {AuthState} from './authReducer';

export interface RootState {
  countState: CountState;
  authState: AuthState;
}

const RootReducer = combineReducers({
  countState: countReducer,
  authState: authReducer,
});

export default RootReducer;

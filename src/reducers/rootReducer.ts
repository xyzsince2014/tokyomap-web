import {combineReducers} from 'redux';
// import postsReducer, {PostsState} from './postsReducer';
import authReducer, {AuthState} from './authReducer';

export interface RootState {
  // postsState: PostsState;
  authState: AuthState;
}

const RootReducer = combineReducers({
  // postsState: postsReducer,
  authState: authReducer,
});

export default RootReducer;

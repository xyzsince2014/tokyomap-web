import {Reducer} from 'redux';

import {PostsAction} from '../actions/Posts/postsActionCreator';
import * as ActionType from '../actions/Posts/postsConstants';
import * as Models from '../services/posts/models';

export interface PostsState {
  posts: Models.Post[] | [];
}

export const initialCountState = {posts: []};

const postsReducer: Reducer<PostsState, PostsAction> = (
  state: PostsState = initialCountState,
  action: PostsAction,
): PostsState => {
  switch (action.type) {
    case ActionType.BEGIN:
      return {
        ...state,
      };
    case ActionType.RESOLVE:
      return {
        ...state,
        // posts: {...state.posts, action},
      };
    case ActionType.REJECT:
      return {
        ...state,
        posts: [],
      };
    default:
      /* eslint-disable no-case-declarations */
      /* eslint-disable @typescript-eslint/no-unused-vars */
      const _: never = action;
      return state;
  }
};

export default postsReducer;

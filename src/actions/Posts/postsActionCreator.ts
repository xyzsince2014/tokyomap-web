import {AxiosError} from 'axios';
import * as ActionType from './postsConstants';
import * as Models from '../../services/posts/models';

interface PostResult {
  posts: Models.Post[];
}

export const addPost = {
  begin: () => ({
    type: ActionType.BEGIN as typeof ActionType.BEGIN,
  }),
  resolve: (result: PostResult) => ({
    type: ActionType.RESOLVE as typeof ActionType.RESOLVE,
    payload: {result},
  }),
  reject: (error: AxiosError) => ({
    type: ActionType.REJECT as typeof ActionType.REJECT,
    payload: {error},
    error: true,
  }),
};

export type PostsAction =
  | ReturnType<typeof addPost.begin>
  | ReturnType<typeof addPost.resolve>
  | ReturnType<typeof addPost.reject>;

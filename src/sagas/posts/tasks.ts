import {put, call} from 'redux-saga/effects';
import {addPost} from '../../actions/Posts/postsActionCreator';
import * as api from '../../services/posts/api';

export function* runGetPosts(action: ReturnType<typeof addPost.begin>) {
  try {
    const getPosts = api.getPostsFactory();
    const posts = yield call(getPosts);
    yield put(addPost.resolve({posts}));
  } catch (error) {
    yield put(addPost.reject(error));
  }
}

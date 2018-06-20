import { REQUEST_POSTS, REQUEST_POSTS_SUCCESS, REQUEST_POSTS_FAILURE } from '../constants/actions';
import API from '../api';

const requestPosts = () => ({
  type: REQUEST_POSTS,
});

const requestPostsSuccess = items => ({
  type: REQUEST_POSTS_SUCCESS,
  payload: items,
});

const requestPostsFailure = error => ({
  type: REQUEST_POSTS_FAILURE,
  payload: error,
});

export const getPosts = () => async dispatch => {
  dispatch(requestPosts());
  try {
    const { data } = await API.fetchPosts();
    dispatch(requestPostsSuccess(data));
  } catch (error) {
    dispatch(requestPostsFailure(error));
  }
};

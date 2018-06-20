import { REQUEST_POSTS, REQUEST_POSTS_SUCCESS, REQUEST_POSTS_FAILURE } from '../constants/actions';

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

export const getPosts = () => dispatch => {
  dispatch(requestPosts());

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(json => {
      dispatch(requestPostsSuccess(json));
    })
    .catch(error => dispatch(requestPostsFailure(error)));
};

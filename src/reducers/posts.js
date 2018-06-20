import { REQUEST_POSTS, REQUEST_POSTS_SUCCESS, REQUEST_POSTS_FAILURE } from '../constants/actions';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        isLoading: true,
      };
    case REQUEST_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: action.payload,
      };
    case REQUEST_POSTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default posts;

import axios from 'axios';

const API_ROOT = process.env.API_ROOT;

const requests = {
  get: (url, config) => axios.get(`${API_ROOT}${url}`, config),
};

const API = {
  fetchPosts: () => requests.get('posts'),
};

export default API;

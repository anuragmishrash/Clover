import axios from 'axios';
import createApiUrl from '../utils/apiUrl';

export const postCreate = (data) => {
  return axios({
    method: 'post',
    url: createApiUrl('/api/register'),
    data,
  });
};

export const postUpdate = (data) => {
  return axios({
    method: 'post',
    url: createApiUrl('/api/user/edit'),
    data,
  });
};

export const postDelete = (data) => {
  return axios({
    method: 'post',
    url: createApiUrl('/api/user/delete'),
    data,
  });
};

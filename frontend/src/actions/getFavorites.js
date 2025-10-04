import axios from 'axios';
import createApiUrl from '../utils/apiUrl';

const getFavorites = () => {
  return axios({
    method: 'post',
    url: createApiUrl('/api/favorites/list'),
    data: {},
  });
};

export default getFavorites;

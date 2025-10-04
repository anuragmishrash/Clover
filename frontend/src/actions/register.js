import axios from 'axios';
import createApiUrl from '../utils/apiUrl';

const register = (data) => {
  return axios({
    method: 'post',
    url: createApiUrl('/api/register'),
    data,
  });
};

export default register;

import axios from 'axios';
import createApiUrl from '../utils/apiUrl';

const login = (email, password) => {
  return axios({
    method: 'post',
    url: createApiUrl('/api/login'),
    data: { email, password },
  });
};

export default login;

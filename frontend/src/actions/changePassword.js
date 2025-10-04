import axios from 'axios';
import createApiUrl from '../utils/apiUrl';

const changePassword = (email, authCode, password) => {
  return axios({
    method: 'post',
    url: createApiUrl('/api/auth/change'),
    data: { email, code: authCode, password },
  });
};

export default changePassword;

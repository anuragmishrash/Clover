import axios from 'axios';
import createApiUrl from '../utils/apiUrl';

const changeUserPassword = (password) => {
  return axios({
    method: 'post',
    url: createApiUrl('/api/users/change-password'),
    data: { password },
  });
};

export default changeUserPassword;

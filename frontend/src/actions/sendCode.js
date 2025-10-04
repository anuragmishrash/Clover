import axios from 'axios';
import createApiUrl from '../utils/apiUrl';

const sendCode = (email) => {
  return axios({
    method: 'post',
    url: createApiUrl('/api/auth/code'),
    data: { email },
  });
};

export default sendCode;

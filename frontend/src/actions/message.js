import axios from 'axios';
import createApiUrl from '../utils/apiUrl';

const message = (data) => {
  return axios({
    method: 'post',
    url: createApiUrl('/api/message'),
    data,
  });
};

export default message;

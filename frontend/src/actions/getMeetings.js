import axios from 'axios';
import createApiUrl from '../utils/apiUrl';

const getMeetings = () => {
  return axios({
    method: 'post',
    url: createApiUrl('/api/meeting/list'),
    data: {},
  });
};

export default getMeetings;

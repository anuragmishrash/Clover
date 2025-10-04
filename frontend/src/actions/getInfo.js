import axios from 'axios';
import createApiUrl from '../utils/apiUrl';

const getInfo = () => {
  return axios({
    method: 'get',
    url: createApiUrl('/api/info'),
  });
};

export default getInfo;

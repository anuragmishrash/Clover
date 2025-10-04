import axios from 'axios';
import createApiUrl from '../utils/apiUrl';

const search = (text, limit) => {
  return axios({
    method: 'post',
    url: createApiUrl('/api/search'),
    data: { limit: limit || 30, search: text || '' },
  });
};

export default search;

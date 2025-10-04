import axios from 'axios';
import createApiUrl from '../utils/apiUrl';

const createGroup = (data) => {
  return axios({
    method: 'post',
    url: createApiUrl('/api/group/create'),
    data,
  });
};

export default createGroup;

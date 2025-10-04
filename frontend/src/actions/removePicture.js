import axios from 'axios';
import createApiUrl from '../utils/apiUrl';

const removePicture = () => {
  return axios({
    method: 'post',
    url: createApiUrl('/api/picture/remove'),
  });
};

export default removePicture;

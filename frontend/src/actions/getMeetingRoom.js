import axios from 'axios';
import createApiUrl from '../utils/apiUrl';

const getMeetingRoom = (data) => {
  return axios({
    method: 'post',
    url: createApiUrl('/api/meeting/get'),
    data,
  });
};

export default getMeetingRoom;

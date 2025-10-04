import axios from 'axios';
import createApiUrl from '../utils/apiUrl';

const createRoom = (counterpart) => {
  return axios({
    method: 'post',
    url: createApiUrl('/api/room/create'),
    data: { counterpart },
  });
};

export default createRoom;

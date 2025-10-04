import axios from 'axios';
import createApiUrl from '../utils/apiUrl';

const getRoom = (id) => {
  return axios({
    method: 'post',
    url: createApiUrl('/api/room/join'),
    data: { id },
  });
};

export default getRoom;

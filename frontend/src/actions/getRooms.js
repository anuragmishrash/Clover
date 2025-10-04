import axios from 'axios';
import createApiUrl from '../utils/apiUrl';

const getRooms = () => {
  return axios({
    method: 'post',
    url: createApiUrl('/api/rooms/list'),
    data: { limit: 30 },
  });
};

export default getRooms;

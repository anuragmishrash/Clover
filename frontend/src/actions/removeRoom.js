import axios from 'axios';
import createApiUrl from '../utils/apiUrl';

const removeRoom = (id) => {
  return axios({
    method: 'post',
    url: createApiUrl('/api/room/remove'),
    data: { id },
  });
};

export default removeRoom;

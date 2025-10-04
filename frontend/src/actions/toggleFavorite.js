import axios from 'axios';
import createApiUrl from '../utils/apiUrl';

const toggleFavorite = (roomID) => {
  return axios({
    method: 'post',
    url: createApiUrl('/api/favorite/toggle'),
    data: { roomID },
  });
};

export default toggleFavorite;

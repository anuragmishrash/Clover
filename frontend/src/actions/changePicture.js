import axios from 'axios';
import createApiUrl from '../utils/apiUrl';

const changePicture = (imageID) => {
  return axios({
    method: 'post',
    url: createApiUrl('/api/picture/change'),
    data: { imageID },
  });
};

export default changePicture;

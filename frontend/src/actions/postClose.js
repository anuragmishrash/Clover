import axios from 'axios';
import createApiUrl from '../utils/apiUrl';

const postClose = ({ meetingID, userID }) => {
  return axios({
    method: 'post',
    url: createApiUrl('/api/meeting/close'),
    data: { meetingID, userID },
  });
};

export default postClose;

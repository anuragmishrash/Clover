import axios from 'axios';
import createApiUrl from '../utils/apiUrl';

const postCall = ({ roomID, meetingID }) => {
  return axios({
    method: 'post',
    url: createApiUrl('/api/meeting/call'),
    data: { roomID, meetingID },
  });
};

export default postCall;

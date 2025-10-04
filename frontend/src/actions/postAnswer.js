import axios from 'axios';
import createApiUrl from '../utils/apiUrl';

const postAnswer = ({ userID, meetingID, answer }) => {
  return axios({
    method: 'post',
    url: createApiUrl('/api/meeting/answer'),
    data: { userID, meetingID, answer },
  });
};

export default postAnswer;

import axios from 'axios';
import createApiUrl from '../utils/apiUrl';

const postAdd = ({ userID, meetingID }) => {
  return axios({
    method: 'post',
    url: createApiUrl('/api/meeting/add'),
    data: { userID, meetingID },
  });
};

export default postAdd;

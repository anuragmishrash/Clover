import axios from 'axios';
import createApiUrl from '../utils/apiUrl';

const getMoreMessages = ({ roomID, firstMessageID }) => {
  return axios({
    method: 'post',
    url: createApiUrl('/api/messages/more'),
    data: { roomID, firstMessageID },
  });
};

export default getMoreMessages;

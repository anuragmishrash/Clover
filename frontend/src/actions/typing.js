import axios from 'axios';
import createApiUrl from '../utils/apiUrl';

const typing = (room, isTyping) => () => {
  axios
    .post(createApiUrl('/api/typing'), { room, isTyping })
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};

export default typing;

import axios from 'axios';
import createApiUrl from '../utils/apiUrl';

const uploadFile = (file, token, onProgress = () => {}) => {
  const url = createApiUrl('/api/upload/file');

  const data = new FormData();

  data.append('file', file, file.name);

  const config = {
    onUploadProgress: onProgress,
  };

  return axios.post(url, data, config);
};

export default uploadFile;

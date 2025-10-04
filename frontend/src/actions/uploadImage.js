import axios from 'axios';
import createApiUrl from '../utils/apiUrl';

const upload = (image, token, onProgress = () => {}, crop) => {
  const url = createApiUrl('/api/upload');

  const data = new FormData();

  data.append('image', image, image.name);
  data.append('crop', crop);

  const config = {
    onUploadProgress: onProgress,
  };

  return axios.post(url, data, config);
};

export default upload;

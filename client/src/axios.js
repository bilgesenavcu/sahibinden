import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8081';
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { data } = await axios.post('/token');
        const { accessToken } = data;
        localStorage.setItem('accessToken', accessToken);
        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
        return axios(originalRequest);
      } catch (refreshError) {
        console.error("Token yenileme hatası:", refreshError);
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default axios;

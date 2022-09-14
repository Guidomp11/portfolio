import axios from 'axios';
import { getToken } from './cookies.config';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    try {
        const token = getToken();
        config.headers.Authorization = token;

        return config;
    } catch (err) {
        return err;
    }
  },
  (error) => Promise.reject(error),
);

export default axiosInstance;
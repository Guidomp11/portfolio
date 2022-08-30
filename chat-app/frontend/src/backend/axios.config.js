import axios from 'axios';
import { get } from "../storage";

const axiosInstance = axios.create({
    baseURL: process.env.API_URL,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    try {
        const token = await get("@token");

        if(!token || token.trim() === "") throw new Error("Empty Token.");

        config.headers.Authorization = token;

        return config;
    } catch (err) {
        return err;
    }
  },
  (error) => Promise.reject(error),
);

export default axiosInstance;
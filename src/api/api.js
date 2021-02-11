import axios from 'axios';
import { BASE_URL } from "../env";

const instance = axios.create({ BASE_URL });
instance.defaults.timeout = 15000;

instance.interceptors.request.use(
    (config) => {

        config.headers['Content-Type'] = 'application/json';

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;
import { responseUnwrapperInterceptor, mapInterceptor } from './interceptors';
import axios from 'axios';
import { apiConfig } from './config';

const createAxiosParams = () => ({
    baseURL: apiConfig.BASE_URL,
    params: {
        api_key: apiConfig.API_KEY,
    },
});

export const giphyInstance = axios.create(createAxiosParams());
giphyInstance.interceptors.response.use(responseUnwrapperInterceptor);
giphyInstance.interceptors.response.use(mapInterceptor);


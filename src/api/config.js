import axios from 'axios';
import { mapGif, mapGifs } from './interceptors';

export const apiConfig = {
    API_KEY: 'GJ3cFTvnDd8Qu2U0fB5feCKamyvnrarm',
    BASE_URL: 'https://api.giphy.com/v1/gifs/',
    SEARCH_ENDPOINT: '/search',
    UPLOAD_ENDPOINT: 'https://api',
};

const createAxiosApiKey = () => axios.create({
    baseURL: apiConfig.BASE_URL,
    method: 'get',
    params: {
        api_key: apiConfig.API_KEY,
    },
});

export const axiosGifs = createAxiosApiKey()
axiosGifs.interceptors.response.use((response) => mapGifs(response.data))

export const axiosGif = createAxiosApiKey()
axiosGif.interceptors.response.use((response) => mapGif(response.data));
import axios from 'axios';
import { mapGif, mapGifs } from './interceptors';

export const apiConfig = {
    API_KEY: 'GJ3cFTvnDd8Qu2U0fB5feCKamyvnrarm',
    BASE_URL: 'https://api.giphy.com/v1/gifs/',
    UPLOAD_ENDPOINT: 'https://api',
};

export const axiosGifs = axios.create();
axiosGifs.interceptors.response.use((response) => mapGifs(response.data))

export const axiosGif = axios.create();
axiosGif.interceptors.response.use((response) => mapGif(response.data));
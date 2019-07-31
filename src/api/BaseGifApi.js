import axios from 'axios';
import { apiConfig } from './config';
import { axiosGif, axiosGifs } from './config';

class BaseGifApi {

    getGifs = async (keyword, limit, offset) => {
        const paramsObject = this.createParamsObject(keyword, limit, offset);
        const apiResponse = await axiosGifs(apiConfig.SEARCH_ENDPOINT, {
            params: paramsObject,
        });
        return apiResponse;
    };

    getGif = async (id) => {
        const apiResponse = await axiosGif(id);
        return apiResponse;
    };

    uploadGif = async (file) => {
        await axios.post(apiConfig.UPLOAD_ENDPOINT, this.createFormData(file))
        .then(response => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    };

    createFormData = () => {
        throw new Error('not implemented in BaseGifApi class');
    };

    createParamsObject = () => {
        throw new Error('not implemented in BaseGifApi class');
    };
        
}

export default BaseGifApi;

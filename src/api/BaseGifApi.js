import axios from 'axios';
import { apiConfig } from './config';
import { axiosGif, axiosGifs } from './config';

class BaseGifApi {

    getGifs = async (keyword, limit, offset) => {
        const queryUrl = this.createUrlForKeyword(keyword, limit, offset);
        const apiResponse = await axiosGifs(queryUrl);
        return apiResponse;
    };

    getGif = async (id) => {
        const queryUrl = this.createUrlForId(id);
        const apiResponse = await axiosGif(queryUrl);
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
        throw new Error('not implemented');
    };

    createUrlForKeyword = () => {
        throw new Error('not implemented');
    };

    createUrlForId = () => {
        throw new Error('not implemented');
    };
    
}

export default BaseGifApi;

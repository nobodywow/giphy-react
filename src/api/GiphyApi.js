import BaseGifApi from './BaseGifApi';
import axios from 'axios';
import { apiConfig } from './config';
import { giphyInstance } from './axiosInstance';


class GiphyApi extends BaseGifApi {    

    getGifs = async (keyword, limit, offset) => {
        const paramsObject = this.createParamsObject(keyword, limit, offset);
        const apiResponse = await giphyInstance.get(apiConfig.SEARCH_ENDPOINT, {
            params: paramsObject,
        });
        return apiResponse;
    };

    getGif = async (id) => {
        const apiResponse = await giphyInstance.get(id);
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

}

export default GiphyApi;

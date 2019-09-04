import axios from 'axios';
import { apiConfig } from '../../api/config';
import BaseGifApi from '../../api/BaseGifApi';

class GifServiceApi extends BaseGifApi {

    uploadGif = async (file, username, tags) => {
        await axios.post(apiConfig.UPLOAD_ENDPOINT, this.createFormData(file, username, tags))
        .then(response => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    };

    addUser = async (username, avatarUrl) => {
        await axios.post(apiConfig.AUTH_ENDPOINT, {
            "username": username,
            "avatarUrl": avatarUrl
        });
    };

}

export const gifServiceInstance = new GifServiceApi();
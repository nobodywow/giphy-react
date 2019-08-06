import { giphyInstance } from "../../api/axiosInstance";
import { apiConfig } from "../../api/config";
import BaseGifApi from "../../api/BaseGifApi";

class GifsApi extends BaseGifApi {

    getGifs = async (keyword, limit, offset) => {
        const paramsObject = this.createParamsObject(keyword, limit, offset);
        const apiResponse = await giphyInstance.get(apiConfig.SEARCH_ENDPOINT, {
            params: paramsObject,
        });
        return apiResponse;
    };

}

export const gifsApiInstance = new GifsApi()

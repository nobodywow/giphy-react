import { giphyInstance } from "../../api/axiosInstance";
import BaseGifApi from "../../api/BaseGifApi";

class GifApi extends BaseGifApi {

    getGif = async (id) => {
        const apiResponse = await giphyInstance.get(id);
        return apiResponse;
    };

}

export const gifApiInstance = new GifApi();
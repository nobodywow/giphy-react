import BaseGifApi from './BaseGifApi';
import { convertKeywordToQuery } from '../utils/stringUtils';

class GiphyApi extends BaseGifApi {

    createFormData = (file) => {
        const formData = new FormData();
        formData.append('gif', file);
        formData.append('name', file.name);
        return formData;
    };

    createParamsObject = (keyword, limit, offset) => {
        return {
            q: convertKeywordToQuery(keyword),
            limit: limit,
            offset: offset,
         }                 
    };

}

export default GiphyApi;

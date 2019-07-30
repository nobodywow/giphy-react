import BaseGifApi from './BaseGifApi';
import { apiConfig } from './config';
import { convertKeywordToQuery } from '../utils/stringUtils';
import { constructUrl } from './utils';

class GiphyApi extends BaseGifApi {

    createFormData = (file) => {
        const formData = new FormData();
        formData.append('gif', file);
        formData.append('name', file.name);
        return formData;
    };

    createUrlForKeyword = (keyword, limit, offset) => {
        return constructUrl('search', true, {
            q: convertKeywordToQuery(keyword),
            api_key: apiConfig.API_KEY,
            limit: limit,
            offset: offset,
         });                 
    };

    createUrlForId = (id) => {
        return constructUrl(id, true, {
            api_key: apiConfig.API_KEY,
        });
    };

}

export default GiphyApi;

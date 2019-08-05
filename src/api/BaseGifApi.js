import BaseApi from './BaseApi';
import { convertKeywordToQuery } from '../utils/stringUtils';

class BaseGifApi extends BaseApi {    

    createParamsObject = (keyword, limit, offset) => {
        return {
            q: convertKeywordToQuery(keyword),
            limit: limit,
            offset: offset,
         }                 
    };
}

export default BaseGifApi;

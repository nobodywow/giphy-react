import BaseApi from './BaseApi.js';
import { env } from './../cfg/env.js';
import { convertKeywordForUrl } from '../utils/stringUtils.js';
import queryString from 'query-string';

class GiphyApi extends BaseApi {
    
    constructUrl = (path, isQuery, queryParams) => (
        isQuery 
        ? `${env.BASE_URL}${path}?${queryString.stringify(queryParams)}`
        : `${env.BASE_URL}${path}`
    );

    createUrlForKeyword = (keyword, limit, offset) => {
        return this.constructUrl('search', true, {
            q: convertKeywordForUrl(keyword),
            api_key: env.API_KEY,
            limit: limit,
            offset: offset,
         });                 
    };

    createUrlForId = (id) => {
        return this.constructUrl(id, true, {
            api_key: env.API_KEY,
        });
    };

    mapGifObject = (gifData) => ({
        id: gifData.id,
        title: gifData.title,
        username: gifData.username,
        avatarUrl: gifData.username ? gifData.user.avatar_url : '',
        postDate: gifData.import_datetime,
        previewImgUrl: gifData.images.fixed_height_small.mp4,
        originalImgUrl: gifData.images.original.mp4,
    });

    mapSingleGif = (gifData) => {
        return this.mapGifObject(gifData.data);
    };

    mapGifArray = (gifData) => {
        const dataArray = gifData.data.map((item) => {
            return this.mapGifObject(item);
        });
        return dataArray;
    };
}

export default GiphyApi;

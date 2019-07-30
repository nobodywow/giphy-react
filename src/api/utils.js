import { apiConfig } from './config';
import queryString from 'query-string';

export const constructUrl = (endpoint, isQuery, queryParams) => (
    isQuery 
    ? `${apiConfig.BASE_URL}${endpoint}?${queryString.stringify(queryParams)}`
    : `${apiConfig.BASE_URL}${endpoint}`
);
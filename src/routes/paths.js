import queryString from 'query-string';

export const paths = {
    search: '/search',
    gif: '/gif',
    front: '/',
};

export const constructPath = (endpoint, params) => (
    params 
    ? `${endpoint}?${queryString.stringify(params)}`
    : `${endpoint}`    
);
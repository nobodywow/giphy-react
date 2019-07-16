export const convertKeywordForUrl = (keyword) => encodeURIComponent(keyword.split(' ').join('+'));
export const convertQueryToKeyword = (query) => decodeURIComponent(query.split('+').join(' '));

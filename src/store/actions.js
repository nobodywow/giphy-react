import { createActions } from 'redux-actions';

export const actionTypes = {
    GET_GIFS: 'GET_GIFS',
    GIFS_RECIEVED: 'GIFS_RECIEVED',
    GET_SINGLE_GIF: 'GET_SINGLE_GIF',
    SINGLE_GIF_RECIEVED: 'SINGLE_GIF_RECIEVED',
    KEYWORD_CHANGED: 'KEYWORD_CHANGED',
    GIF_UPLOADED: 'GIF_UPLOADED',
    STOP_LOADING: 'STOP_LOADING',
    DELETE_GIF: 'DELETE_GIF',
    UPLOAD_GIF: 'UPLOAD_GIF',
    REQUEST_FAILED: 'REQUEST_FAILED',
};

export const actionCreators = createActions({
    GET_GIFS:
        (keyword, limit, offset) => ({
            keyword: keyword,
            limit: limit,
            offset: offset,
        }),
    GIFS_RECIEVED: null,
    GET_SINGLE_GIF:
        (id) => ({
            id: id,
        }),
    SINGLE_GIF_RECIEVED: null,
    KEYWORD_CHANGE: 
        (keyword, limit, offset) => ({
            keyword: keyword,
            limit: limit,
            offset: offset,
        }),
    GIF_UPLOADED: null,
    STOP_LOADING: null,
    KEYWORD_CHANGED: null, 
    DELETE_GIF: 
        (id) => ({
            id: id,
        }),
    UPLOAD_GIF: 
        (file) => ({
            file: file,
        }),
    REQUEST_FAILED: null,
});

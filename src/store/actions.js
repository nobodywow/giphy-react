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
};

export const getGifs = (keyword, limit, offset, isOnLoad) => ({
    type: actionTypes.GET_GIFS,
    payload: { keyword: keyword, limit: limit, offset: offset, isOnLoad: isOnLoad },
});

export const setOffset = (offset) => ({
    type: actionTypes.GET_GIFS,
    offset: offset,
});

export const getSingleGif = (id) => ({
    type: actionTypes.GET_SINGLE_GIF,
    id: id,
});

export const uploadGif = (file) => ({
    type: actionTypes.UPLOAD_GIF,
    file: file,
});

export const deleteGif = (id) => ({
    type: actionTypes.DELETE_GIF,
    id: id,
});
export const actionTypes = {
    GET_GIFS: 'GET_GIFS',
    GIFS_RECIEVED: 'GIFS_RECIEVED',
    GET_SINGLE_GIF: 'GET_SINGLE_GIF',
    SINGLE_GIF_RECIEVED: 'SINGLE_GIF_RECIEVED',
};

export const setGifsArray = gifs => ({
    type: actionTypes.SET_GIFS,
    payload: gifs,
});

export const getGifs = (keyword, limit, offset) => ({
    type: actionTypes.GET_GIFS,
    payload: { keyword: keyword, limit: limit, offset: offset },
});

export const setOffset = (offset) => ({
    type: actionTypes.GET_GIFS,
    offset: offset,
});

export const getSingleGif = (id) => ({
    type: actionTypes.GET_SINGLE_GIF,
    payload: id,
});
import { select, put } from 'redux-saga/effects';
import { apiInstance } from '../api/apiInstance';
import { actionTypes } from '../store/actions';

export function* getGifs(action) {
    const getOffset = (state) => state.offset;
    const offset = yield select(getOffset);
    try {
        const gifs = yield apiInstance.getGifs(action.payload.keyword, action.payload.limit, offset);
        yield put({
            type: actionTypes.GIFS_RECIEVED,
            keyword: action.payload.keyword,
            gifs: gifs,
            offset: offset + action.payload.offset,
        });
    } catch(error) {
        yield put({
            type: actionTypes.REQUEST_FAILED,
            error: error,
        });
    }    
}

export function* resetKeyword(action) {
    yield put({
        type: actionTypes.KEYWORD_CHANGED,
        keyword: action.payload.keyword,
    });
}

export function* uploadGif(action) {
    yield apiInstance.uploadGif(action.payload.file);
    yield put({
        type: actionTypes.GIF_UPLOADED,
    });
}

export function* getSingleGif(action) {
    const getGifArray = (state) => state.gifs;
    const gifArray = yield select(getGifArray);
    const findGif = yield gifArray.find((gif) => {
        return gif.id === action.payload.id;
    });
    const gif = yield findGif ? findGif : apiInstance.getGif(action.payload.id);
    yield put({
        type: actionTypes.SINGLE_GIF_RECIEVED,
        currentGif: gif,
    });
}
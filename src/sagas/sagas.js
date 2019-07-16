import { takeEvery, select, put, all } from 'redux-saga/effects';
import { apiInstance } from '../cfg/apiInstance';
import { actionTypes } from '../store/actions';

const getOffset = (state) => state.offset;

function* getGifs(action) {    
    const offset = yield select(getOffset);
    const gifs = yield apiInstance.getGifArray(action.payload.keyword, action.payload.limit, offset);
    yield put({
            type: "GIFS_RECIEVED",
            gifs: gifs,
            offset: offset + action.payload.offset,
    })
}

const getGifArray = (state) => state.gifs;

function* getSingleGif(action) {
    const gifArray = yield select(getGifArray);
    const findGif = yield gifArray.find((gif) => {
        return gif.id === action.payload;
    });
    const gif = yield findGif ? findGif : apiInstance.getSingleGif(action.payload);
    yield put({
        type: "SINGLE_GIF_RECIEVED",
        currentGif: gif
    })
}

function* watchFetch() {
    yield takeEvery(actionTypes.GET_GIFS, getGifs);
    yield takeEvery(actionTypes.GET_SINGLE_GIF, getSingleGif);
}

export function* gifSaga() {
    yield all([
            watchFetch()
    ]);
}

import { takeEvery, select, put, all } from 'redux-saga/effects';
import { apiInstance } from '../cfg/apiInstance';
import { actionTypes } from '../store/actions';

const getKeyword = (state) => state.keyword;
const getOffset = (state) => state.offset;

function* getGifs(action) {    
    const offset = yield select(getOffset);  
    const keyword = yield select(getKeyword);  
    if (action.payload.isOnLoad) {
        if (action.payload.keyword !== keyword) {
            const gifs = yield apiInstance.getGifArray(action.payload.keyword, action.payload.limit, 0);
            yield put({
                type: "KEYWORD_CHANGED",
                keyword: action.payload.keyword,
                gifs: gifs,
                offset: action.payload.offset,        
            });
        } else {
            yield put({
                type: "STOP_LOADING",
            });
        }
    } else {
        const gifs = yield apiInstance.getGifArray(action.payload.keyword, action.payload.limit, offset);
        yield put({
            type: "GIFS_RECIEVED",
            keyword: action.payload.keyword,
            gifs: gifs,
            offset: offset + action.payload.offset,
        });
    }    
}

function* uploadGif(action) {
    yield apiInstance.uploadGif(action.file);
    yield put({
        type: "GIF_UPLOADED",
    });
}

const getGifArray = (state) => state.gifs;

function* getSingleGif(action) {
    const gifArray = yield select(getGifArray);
    const findGif = yield gifArray.find((gif) => {
        return gif.id === action.id;
    });
    const gif = yield findGif ? findGif : apiInstance.getSingleGif(action.id);
    yield put({
        type: "SINGLE_GIF_RECIEVED",
        currentGif: gif,
    });
}

function* watchFetch() {
    yield takeEvery(actionTypes.GET_GIFS, getGifs);
    yield takeEvery(actionTypes.GET_SINGLE_GIF, getSingleGif);
    yield takeEvery('UPLOAD_GIF', uploadGif);
}

export function* gifSaga() {
    yield all([
            watchFetch()
    ]);
}

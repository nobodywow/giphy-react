import { select, put } from 'redux-saga/effects';
import { gifActions } from './gif.actions';
import { gifApiInstance } from './gif.api';

export function* getGifWorker(action) {
    const getGifArray = (state) => state.gifs;
    const gifArray = yield select(getGifArray);
    try {
        yield put(gifActions.getGif.request());
        const findGif = yield gifArray.find((gif) => {
            return gif.id === action.payload.id;
        });
        const gif = yield findGif ? findGif : gifApiInstance.getGif(action.payload.id);
        yield put(gifActions.getGif.success({
            currentGif: gif,            
        }));        
    } catch(error) {
        yield put(gifActions.getGif.fault({
            error: error,
        }));
    }
}
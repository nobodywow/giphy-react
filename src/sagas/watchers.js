import { takeEvery } from 'redux-saga/effects';
import { actionCreators } from '../store/actions';
import { getGifs, getSingleGif, uploadGif, resetKeyword } from './workers';

export function* watchActions() {
    yield takeEvery(actionCreators.getGifs, getGifs);
    yield takeEvery(actionCreators.keywordChange, resetKeyword);
    yield takeEvery(actionCreators.getSingleGif, getSingleGif);
    yield takeEvery(actionCreators.uploadGif, uploadGif);
}

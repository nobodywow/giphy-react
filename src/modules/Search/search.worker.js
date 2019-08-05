import { put } from 'redux-saga/effects';
import { apiInstance } from '../../api/instances';
import { searchActions } from './search.actions';

export function* resetKeywordWorker(action) {
    try {
        yield put(searchActions.resetKeyword.success({
            keyword: action.payload.keyword,
        }));
    } catch(error) {
        yield put(searchActions);
    }
}

export function* uploadGifWorker(action) {
    try {
        yield put (searchActions.uploadGif.request());
        yield apiInstance.uploadGif(action.payload.gif);
        yield put(searchActions.uploadGif.success());
    } catch (error) {
        yield put(searchActions.uploadGif.fault({
            error: error,
        }));
    }
}
import { put } from 'redux-saga/effects';
import { searchActions } from './search.actions';
import { gifServiceInstance } from './search.api';

export function* resetKeywordWorker(action) {
    try {
        yield put(searchActions.resetKeyword.success({
            keyword: action.payload.keyword,
        }));
    } catch(error) {
        yield put(searchActions.resetKeyword.fault({
            error: error,
        }));
    }
}

export function* uploadGifWorker(action) {
    try {
        yield put (searchActions.uploadGif.request());
        yield gifServiceInstance.uploadGif(action.payload.gif, action.payload.username, action.payload.tags);
        yield put(searchActions.uploadGif.success());
    } catch (error) {
        yield put(searchActions.uploadGif.fault({
            error: error,
        }));
    }
}

export function* authUser(action) {
    try {
        yield gifServiceInstance.addUser(action.payload.username, action.payload.avatarUrl);
        yield put(searchActions.authUser.success({
            username: action.payload.username,
            avatarUrl: action.payload.avatarUrl,
        }));
    } catch (error) {
        yield put(searchActions.authUser.fault({
            error: error,
        }));
    }
}
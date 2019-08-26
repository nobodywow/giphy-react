import { takeEvery } from 'redux-saga/effects';
import { searchActions } from './search.actions';
import { uploadGifWorker, resetKeywordWorker, authUser } from './search.worker';

export function* watchSearchActions() {
    yield takeEvery(searchActions.uploadGif.fetch, uploadGifWorker);
    yield takeEvery(searchActions.resetKeyword.request, resetKeywordWorker);
    yield takeEvery(searchActions.authUser.request, authUser);
}
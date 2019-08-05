import { takeEvery } from 'redux-saga/effects';
import { searchActions } from './search.actions';
import { uploadGifWorker, resetKeywordWorker } from './search.worker';

export function* watchSearchActions() {
    yield takeEvery(searchActions.uploadGif.fetch, uploadGifWorker);
    yield takeEvery(searchActions.resetKeyword.request, resetKeywordWorker);
}
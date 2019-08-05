import { takeEvery } from 'redux-saga/effects';
import { gifActions } from './gif.actions';
import { getGifWorker } from './gif.worker';

export function* watchGifActions() {
    yield takeEvery(gifActions.getGif.fetch, getGifWorker);
}
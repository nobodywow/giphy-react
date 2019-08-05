import { takeEvery } from 'redux-saga/effects';
import { gifListActions } from './gifList.actions';
import { getGifsWorker } from './gifList.worker';

export function* watchGifListActions() {
    yield takeEvery(gifListActions.getGifs.fetch, getGifsWorker);
}
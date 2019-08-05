import { all } from 'redux-saga/effects';
import { watchGifListActions } from '../modules/GifList';
import { watchSearchActions } from '../modules/Search';
import { watchGifActions } from '../modules/Gif';


export function* gifSaga() {
    yield all([
        watchGifListActions(),
        watchSearchActions(),
        watchGifActions(),
    ]);
}

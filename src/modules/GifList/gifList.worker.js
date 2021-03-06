import { select, put } from 'redux-saga/effects';
import { gifListActions } from './gifList.actions';
import { gifsApiInstance } from './gifList.api';

export function* getGifsWorker(action) {
    const getOffset = (state) => state.offset;
    const offset = yield select(getOffset);
    try {
        yield put(gifListActions.getGifs.request());
        const gifs = yield gifsApiInstance.getGifs(action.payload.keyword, action.payload.limit, offset);
        yield put(gifListActions.getGifs.success({
            keyword: action.payload.keyword,
            gifs: gifs,
            offset: offset + action.payload.offset,
        }));
    } catch(error) {
        yield put(gifListActions.getGifs.fault({
            error: error,
        }));
    }
}

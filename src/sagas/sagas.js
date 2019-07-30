import { all } from 'redux-saga/effects';
import { watchActions } from './watchers';


export function* gifSaga() {
    yield all([
            watchActions()
    ]);
}

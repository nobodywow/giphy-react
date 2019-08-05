import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import { gifSaga } from '../sagas/sagas';

export const createAppStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducer, compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
    sagaMiddleware.run(gifSaga);
    return store;
}

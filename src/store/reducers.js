import { handleActions } from 'redux-actions';
import { initialState } from './state';
import { searchReducer } from '../modules/Search';
import { gifReducer } from '../modules/Gif';
import { gifListReducer } from '../modules/GifList';

const reducer = handleActions(
    {
        ...searchReducer,
        ...gifReducer,
        ...gifListReducer,
    },
    initialState,
);

export default reducer;
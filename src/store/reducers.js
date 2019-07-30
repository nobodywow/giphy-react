import { handleActions } from 'redux-actions';
import { initialState } from './state';

const reducer = handleActions(
    {
        GET_GIFS: (state) => ({
            ...state,
            loading: true,
        }),
        STOP_LOADING: (state) => ({
            ...state,
            loading: false,
        }),
        GIFS_RECIEVED: (state, action) => ({
            ...state,
            keyword: action.keyword,
            gifs: [ ...state.gifs, ...action.gifs ],
            offset: action.offset,
            loading: false,
        }),
        SINGLE_GIF_RECIEVED: (state, action) => ({
            ...state,
            currentGif: action.currentGif,
        }),
        KEYWORD_CHANGED: (state, action) => ({
            ...state,
            keyword: action.keyword,
            gifs: [],
            offset: 0,
        }),
        DELETE_GIF: (state, action) => ({
            ...state,
            gifs: state.gifs.filter(gif => gif.id !== action.payload.id),
        })
    },
    initialState,
);

export default reducer;
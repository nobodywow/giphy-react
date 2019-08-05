import { searchActions } from './search.actions';

export const searchReducer = {
    [searchActions.uploadGif.request.toString()]: (state) => ({
        ...state
    }),
    [searchActions.uploadGif.success.toString()]: (state) => ({
        ...state,
    }),
    [searchActions.uploadGif.fault.toString()]: (state, action) => ({
        ...state,
        error: action.payload.error,
    }),
    [searchActions.resetKeyword.success.toString()]: (state, action) => ({
        ...state,
        keyword: action.payload.keyword,
        gifs: [],
        offset: 0,
    }),
};
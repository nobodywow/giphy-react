import { gifListActions } from './gifList.actions';

export const gifListReducer = {
    [gifListActions.getGifs.request.toString()]: (state) => ({
        ...state,
        loading: true,
    }),
    [gifListActions.getGifs.success.toString()]: (state, action) => ({
        ...state,
        keyword: action.payload.keyword,
        gifs: [ ...state.gifs, ...action.payload.gifs ],
        offset: action.payload.offset,
        loading: false,
    }),
    [gifListActions.getGifs.fault.toString()]: (state, action) => ({
        ...state,
        error: action.payload.error,
        loading: false,
    }),
} 


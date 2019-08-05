import { gifActions } from './gif.actions';

export const gifReducer = {  
    [gifActions.getGif.request.toString()]: (state) => ({
        ...state,
    }),
    [gifActions.getGif.success.toString()]: (state, action) => ({
        ...state,
        currentGif: action.payload.currentGif,
    }),
    [gifActions.getGif.fault.toString()]: (state, action) => ({
        ...state,
        error: action.payload.error,
    }),
    [gifActions.deleteGif.toString()]: (state, action) => ({
        ...state,
        gifs: state.gifs.filter(gif => gif.id !== action.payload.id),
    }),
};
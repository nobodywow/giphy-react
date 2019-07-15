import { actionTypes } from './actions';

const initialState = {
    gifs: [],
    offset: 0,
    currentGif: {},
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GIFS_RECIEVED: 
            return {
                ...state,
                gifs: [ ...state.gifs, ...action.gifs ],
                offset: action.offset,
            };
        case actionTypes.SINGLE_GIF_RECIEVED:
            return {
                ...state,
                currentGif: action.currentGif
            };
        default:
            return state;
    }
};

export default reducer;
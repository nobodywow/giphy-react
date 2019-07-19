import { actionTypes } from './actions';

const initialState = {
    keyword: '',
    gifs: [],
    offset: 0,
    currentGif: {},
    loading: true,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_GIFS:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.STOP_LOADING:
            return {
                ...state,
                loading: false,
            }
        case actionTypes.GIFS_RECIEVED: 
            return {
                ...state,
                keyword: action.keyword,
                gifs: [ ...state.gifs, ...action.gifs ],
                offset: action.offset,
                loading: false,
            };
        case actionTypes.SINGLE_GIF_RECIEVED:
            return {
                ...state,
                currentGif: action.currentGif
            };
        case actionTypes.KEYWORD_CHANGED: 
            return {
                ...state,
                keyword: action.keyword,
                gifs: action.gifs,
                offset: action.offset,
                loading: false,
            }
        case actionTypes.DELETE_GIF:
            return {
                ...state,
                gifs: state.gifs.filter(gif => gif.id !== action.id),
            }
        default:
            return state;
    }
};

export default reducer;
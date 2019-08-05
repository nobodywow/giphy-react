import { createHttpActions } from '../../common/actions';

export const gifListActions = {
    getGifs: createHttpActions('GET_GIFS'),
};

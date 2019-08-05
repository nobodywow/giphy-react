import { createAction } from 'redux-actions';
import { createHttpActions } from '../../common/actions';

export const gifActions = {
    getGif: createHttpActions('GET_GIF'),
    deleteGif: createAction('DELETE_GIF'),
};
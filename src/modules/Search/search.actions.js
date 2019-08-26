import { createAction } from 'redux-actions';
import { createHttpActions } from '../../common/actions';

export const searchActions = {
    uploadGif: createHttpActions('UPLOAD_GIF'),
    resetKeyword: {
        request: createAction('RESET_KEYWORD'),
        success: createAction('KEYWORD_CHANGED'),
        fault: createAction('KEYWORD_CHANGE_FAILED'),
    },
    authUser: {
        request: createAction('AUTH_USER_REQUEST'),
        success: createAction('AUTH_USER'),
        fault: createAction('AUTH_FAILED'),
    },
};

import { createAction } from 'redux-actions';
import { createHttpActions } from '../../common/actions';

export const searchActions = {
    uploadGif: createHttpActions('UPLOAD_GIF'),
    resetKeyword: {
        request: createAction('RESET_KEYWORD'),
        success: createAction('KEYWORD_CHANGED'),
    },
};

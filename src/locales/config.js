import { en } from './en/en';

const defaultNames = {
    SEARCH_INPUT_PLACEHOLDER: 'SEARCH_INPUT_PLACEHOLDER',
    SEARCH_BUTTON: 'SEARCH_BUTTON',
    LOAD_BUTTON: 'LOAD_BUTTON',
    GIF_BACK_BUTTON: 'GIF_BACK_BUTTON',
    GIF_DELETE_BUTTON: 'GIF_DELETE_BUTTON',
    ERROR_MESSAGE: 'ERROR_MESSAGE',
    UPLOAD_BUTTON: 'UPLOAD_BUTTON',
};

const mergeNames = (language) => Object.keys(defaultNames).reduce((accum, key) => ({
    ...accum,
    [key]: language[key] || defaultNames[key],
}), {});

export const lang = mergeNames(en);

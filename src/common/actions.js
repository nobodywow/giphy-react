import { createAction } from 'redux-actions';

export const createHttpActions = (actionName) => ({
    fetch: createAction(`${actionName}_FETCH`),
    request: createAction(`${actionName}_REQUEST`),
    success: createAction(`${actionName}_SUCCESS`),
    fault: createAction(`${actionName}_FAULT`),
});

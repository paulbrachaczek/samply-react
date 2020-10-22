import { WideFieldsActionTypes } from './wide-fields-types';

export const setWideFields = fields => ({
    type: WideFieldsActionTypes.SET_FIELDS,
    payload: fields
});

export const deleteWideField = field => ({
    type: WideFieldsActionTypes.DELETE_FIELD,
    payload: field
});

export const setWideField = field => ({
    type: WideFieldsActionTypes.SET_FIELD,
    payload: field
});

export const reorderWideField = field => ({
    type: WideFieldsActionTypes.REORDER_FIELDS,
    payload: field
});
import { ThinFieldsActionTypes } from './thin-fields-types';

export const setThinFields = fields => ({
    type: ThinFieldsActionTypes.SET_THIN_FIELDS,
    payload: fields
});

export const deleteThinField = field => ({
    type: ThinFieldsActionTypes.DELETE_THIN_FIELD,
    payload: field
});

export const setThinField = field => ({
    type: ThinFieldsActionTypes.SET_THIN_FIELD,
    payload: field
});
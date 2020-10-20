import { combineReducers } from 'redux';
import personaReducer from './persona/persona-reducer';
import wideFieldsReducer from './wideFields/wide-fields-reducer';
import thinFieldsReducer from './thinFields/thin-fields-reducer';

export default combineReducers({
    persona: personaReducer,
    wide: wideFieldsReducer,
    thin: thinFieldsReducer
}); 
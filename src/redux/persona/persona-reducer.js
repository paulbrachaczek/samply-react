import { PersonaActionTypes } from './persona.types';

const INITIAL_STATE = {
    currentPersona: null
}
const personaReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case PersonaActionTypes.SET_PERSONA:
            return {
                ...state, 
                currentPersona: action.payload
            }
        case PersonaActionTypes.SET_PERSONA_NAME:
            const newPersona = {...state.currentPersona};
            newPersona.name = action.payload;  
            newPersona.initials = action.payload.slice(0,3).toUpperCase(); 
            return {
                ...state,
                currentPersona: newPersona
            }
        case PersonaActionTypes.SET_PERSONA_INITIALS: 
            const newPersonaInitials = {...state.currentPersona};
            newPersonaInitials.initials = action.payload.slice(0,3).toUpperCase(); 
            return {
                ...state,
                currentPersona: newPersonaInitials
            }
        default:
            return state;
    }
}

export default personaReducer;
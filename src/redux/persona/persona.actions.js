import { PersonaActionTypes } from './persona.types';
import Api from '../../service/api';

const api = new Api();

export const setPersona = (persona) => ({
    type: PersonaActionTypes.SET_PERSONA,
    payload: persona
    //payload: api.getPersona(1).then(({data})=> data)
});

export const setPersonaName = name => ({
    type: PersonaActionTypes.SET_PERSONA_NAME,
    payload: name
});

export const setPersonaInitials= initials => ({
    type: PersonaActionTypes.SET_PERSONA_INITIALS,
    payload: initials
});


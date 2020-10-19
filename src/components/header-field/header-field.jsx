import React, {useState, useRef} from 'react';
import './field.scss';  
import {connect} from 'react-redux';
import {setPersonaName, setPersonaInitials} from '../../redux/persona/persona.actions'

const HeaderField = ({field, currentPersona, setPersonaName, setPersonaInitials}) => {
    const {title, field_type} = field;
    const [error, setError] = useState(false);
    const defaultVal = field_type === 'name' ? currentPersona.name : currentPersona.initials;
    const [value, setValue] = useState(defaultVal);
    const [editMode, setEditMode] = useState(false);
    const inputRef = useRef(null)
    const setAction = (_val) => {
        const val = _val;

        if(!val.length) {
            return
        }

        setError(false);
        setEditMode(false);
        if(field_type === 'name') {
            setPersonaName(val);
        } else {
            setPersonaInitials(val);
        }
    };
    const newVal = (_val) => {
        const val = _val;

        if(val.length) {
            setValue(val);
            setError(false)
        }
        else {
            setValue('');
            setError(true)
        }
    }
    const showInput = () => {
        setEditMode(true);
        inputRef.current.focus()
    };
    
    return(
        <div className={`m-header-field ${error ?'-error' : ''} ${editMode?'-edit':null}`}>
            <label>{title}</label>
            <p onClick={()=>showInput()}>{field_type === 'name' ? currentPersona.name : currentPersona.initials}</p>
            <input ref={inputRef} value={value} onBlur={(e)=> error ? null : setAction(e.target.value)} onChange={(e) => newVal(e.target.value)} type="text"/>
           
        </div>
    );
};

const mapStateToProps = ({persona}) => ({
    currentPersona: persona.currentPersona
});

const mapDispachToProps = dispatch => ({ 
    setPersonaName: name => dispatch(setPersonaName(name)),
    setPersonaInitials: initials => dispatch(setPersonaInitials(initials))
});

export default connect(mapStateToProps, mapDispachToProps)(HeaderField);
import React, {useState} from 'react';
import HeaderButtonNav from '../header-button-nav/header-button.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSave, faPlus, faFileExport, faClone, faForward, faHandsHelping, faDotCircle, faEdit } from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';
import './header-bottom.scss';
import {setPersonaName} from '../../redux/persona/persona.actions.js'

const HeaderBottom = ({currentPersona, setPersonaName}) => {
    const [editMode, setEditMode] = useState(false);
    const setName = (_name)=>{
        const name = _name;
        setPersonaName(name); 
        setEditMode(false);
    }
    return (
    <div className={`m-header-bottom ${editMode? '-edit-mode':null}`}>
        <header>
            <h2>
                <FontAwesomeIcon icon={faUser}/> Persona <b>{currentPersona?currentPersona.name:null}</b>
                <button onClick={()=>setEditMode(true)}><FontAwesomeIcon icon={faEdit}/></button>
            </h2>
            <input type="text" onBlur={(e)=>e.target.value.length ? setName(e.target.value) : null} />
        </header>
        <nav className="m-header-bottom_nav">
            <ul>
                <li><HeaderButtonNav type="button" icon={faSave}>Save persona</HeaderButtonNav></li>
                <li><HeaderButtonNav type="button" icon={faPlus}>Add persona</HeaderButtonNav></li>
                <li><HeaderButtonNav type="button" icon={faFileExport}>Export</HeaderButtonNav></li>
                <li><HeaderButtonNav type="button" icon={faClone}>Duplicate</HeaderButtonNav></li>
                <li><HeaderButtonNav type="button" icon={faForward}>Move</HeaderButtonNav></li>
                <li><HeaderButtonNav type="button" icon={faHandsHelping}>Help</HeaderButtonNav></li>
                <li><HeaderButtonNav type="button" icon={faDotCircle}>More actions</HeaderButtonNav></li>
            </ul>
        </nav>
    </div>
)}

const mapStateToProps = ({persona}) => ({
    currentPersona: persona.currentPersona
});

const mapDispachToProps = dispatch => ({
    setPersonaName: name => dispatch(setPersonaName(name))
});

export default connect(mapStateToProps, mapDispachToProps)(HeaderBottom);
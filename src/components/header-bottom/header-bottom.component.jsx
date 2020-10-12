import React from 'react';
import HeaderButtonNav from '../header-button-nav/header-button.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSave, faPlus, faFileExport, faClone, faForward, faHandsHelping, faDotCircle } from '@fortawesome/free-solid-svg-icons';
import './header-bottom.scss';


const HeaderBottom = () => (
    <div className="m-header-bottom">
        <h2>
            <FontAwesomeIcon icon={faUser}/> Persona Tess
        </h2>
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
)

export default HeaderBottom;
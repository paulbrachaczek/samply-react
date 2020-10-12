import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header-button.scss';

const HeaderButtonNav = ({children, type, icon, ...other}) => (
    <button type={type} className={`a-button-nav {${!children ? 'no-text' : null}`} {...other}>
        {
            icon ? <FontAwesomeIcon icon={icon} /> : null
        }
        {children} 
    </button>
);

export default HeaderButtonNav;